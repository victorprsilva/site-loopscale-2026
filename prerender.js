import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rotas para pre-renderizar
const routes = [
  '/',
  '/sobre',
  '/contato',
  '/aulas',
  '/case',
  '/marketing',
  '/vendas',
  '/atendimento',
  '/ebooks',
  '/analise',
  '/agencia-de-marketing-digital',
  '/obrigado'
];

const distDir = path.join(__dirname, 'dist');
const PORT = 4173;

async function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['vite', 'preview', '--port', PORT.toString()], {
      cwd: __dirname,
      shell: true,
      stdio: 'pipe'
    });

    server.stdout.on('data', (data) => {
      if (data.toString().includes('Local:')) {
        resolve(server);
      }
    });

    server.stderr.on('data', (data) => {
      console.log(data.toString());
    });

    // Timeout para iniciar
    setTimeout(() => resolve(server), 5000);
  });
}

async function prerender() {
  console.log('🚀 Iniciando pre-renderização SSG...\n');

  // Verificar se dist existe
  if (!fs.existsSync(distDir)) {
    console.error('❌ Pasta dist não encontrada. Execute npm run build primeiro.');
    process.exit(1);
  }

  // Iniciar servidor preview
  console.log('🖥️  Iniciando servidor de preview...');
  const server = await startServer();
  
  // Aguardar servidor estabilizar
  await new Promise(resolve => setTimeout(resolve, 2000));

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const route of routes) {
      console.log(`📄 Pre-renderizando: ${route}`);
      
      const page = await browser.newPage();
      
      // Navegar para a rota
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Aguardar React renderizar completamente
      await page.waitForSelector('#root', { timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Obter HTML renderizado
      let html = await page.content();

      // Limpar scripts desnecessários para SSG (manter apenas os essenciais)
      // O HTML já terá o conteúdo renderizado

      // Determinar caminho do arquivo
      let filePath;
      if (route === '/') {
        filePath = path.join(distDir, 'index.html');
      } else {
        const routeDir = path.join(distDir, route.slice(1));
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        filePath = path.join(routeDir, 'index.html');
      }

      // Salvar HTML
      fs.writeFileSync(filePath, html, 'utf8');
      
      // Verificar se title foi renderizado
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'N/A';
      console.log(`   ✅ Salvo: ${route === '/' ? 'index.html' : route.slice(1) + '/index.html'} (title: "${title}")`);

      await page.close();
    }

    console.log('\n✨ Pre-renderização SSG concluída!');
    console.log(`📊 ${routes.length} páginas HTML geradas com SEO`);
    console.log('\n📁 Estrutura gerada:');
    routes.forEach(route => {
      if (route === '/') {
        console.log('   dist/index.html');
      } else {
        console.log(`   dist${route}/index.html`);
      }
    });

  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  } finally {
    await browser.close();
    server.kill();
    process.exit(0);
  }
}

prerender();
