const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Header
  { url: "https://www.figma.com/api/mcp/asset/276e66f6-60df-452c-b8f0-10cf620654b7", folder: "src/img/header", name: "submenu-image.jpg" },
  
  // Home
  { url: "https://www.figma.com/api/mcp/asset/e932723e-e788-44eb-930a-7aba4075a784", folder: "src/img/home", name: "hero-1.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/eed46c77-5c20-4374-84e3-8bfbbd31b728", folder: "src/img/home", name: "hero-2.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/c0f18363-9f62-4ef2-b5d6-c4ae2a6f5506", folder: "src/img/home", name: "hero-3.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/b105775c-83e1-431b-b56e-d16a00aedcd7", folder: "src/img/home", name: "hero-4.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/fab97d76-2739-4ab8-a8b7-b9d75a15a9ce", folder: "src/img/home", name: "hero-5.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/1277b4d3-b774-4e7e-8f5c-20d99dfebc0a", folder: "src/img/home", name: "hero-6.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/ecc79433-1e5f-4bad-9fb5-59f2e30c56ca", folder: "src/img/home", name: "section2-card-1.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/8c1529bc-d380-4ba8-b05e-1d7a6cb2f12b", folder: "src/img/home", name: "section2-card-2.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/dc33892a-6748-4e57-9796-575811306ec5", folder: "src/img/home", name: "section2-card-3.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/65309223-1e5f-4f29-ba22-8113565a3003", folder: "src/img/home", name: "section4-card-1.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/9a1cc112-1695-40ad-803e-82d6bf6bb239", folder: "src/img/home", name: "section4-card-2.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/a7d62979-263a-4fd9-bdca-eaeeda65b116", folder: "src/img/home", name: "section4-card-3.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/cfa038c1-c0d1-4407-9018-29622fceb236", folder: "src/img/home", name: "section5-bg.jpg" },
  
  // Case
  { url: "https://www.figma.com/api/mcp/asset/14f20135-6700-4e5d-b02f-8360219dc190", folder: "src/img/case", name: "logo-comcristo.png" },
  { url: "https://www.figma.com/api/mcp/asset/e09ce8a7-ff08-42f6-bd20-02b71cbe5d50", folder: "src/img/case", name: "logo-kings.png" },
  { url: "https://www.figma.com/api/mcp/asset/64c4124a-207f-495e-911b-542d546ff3ef", folder: "src/img/case", name: "logo-yamaha.png" },
  { url: "https://www.figma.com/api/mcp/asset/6b96f512-2498-458a-9331-882450ce9ced", folder: "src/img/case", name: "logo-nacionalinn.png" },
  { url: "https://www.figma.com/api/mcp/asset/7408583a-fe30-450c-8f11-0193cdc28b5d", folder: "src/img/case", name: "logo-addebitare.png" },
  { url: "https://www.figma.com/api/mcp/asset/82b70dbf-b1a3-4ffa-bf3b-299f81a32eb9", folder: "src/img/case", name: "logo-shineray.png" },
  
  // Aulas
  { url: "https://www.figma.com/api/mcp/asset/e9b44310-ab31-46ed-a870-8cc241a14df8", folder: "src/img/aulas", name: "channel-logo.jpg" },
  
  // Ebooks
  { url: "https://www.figma.com/api/mcp/asset/fc8dacd2-fcb7-466a-902c-24c3c4a4a78d", folder: "src/img/ebooks", name: "ebook-1.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/f6b2ddbb-452f-462d-828b-b3ecdf9c2170", folder: "src/img/ebooks", name: "ebook-2.jpg" },
  
  // About
  { url: "https://www.figma.com/api/mcp/asset/3bdd4101-fbec-4b81-9fb1-cd0ab39f6cf7", folder: "src/img/about", name: "target-1.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/fb0a4c61-938c-4be3-b34b-7547214c80ab", folder: "src/img/about", name: "target-2.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/913f0669-aa70-4fa5-bf66-aaa50d30f45c", folder: "src/img/about", name: "target-3.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/6f3a048d-96a6-43d5-9b40-c82e2d462247", folder: "src/img/about", name: "infinity.png" },
  { url: "https://www.figma.com/api/mcp/asset/63f123cd-b08f-4e4f-baea-f0d585e76dd0", folder: "src/img/about", name: "joao.jpg" },
  
  // Marketing
  { url: "https://www.figma.com/api/mcp/asset/5559168c-8d02-4cad-b88e-3c7852cc6cd7", folder: "src/img/marketing", name: "banner.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/563c0de1-4102-4ea1-ac41-ece933a2afbb", folder: "src/img/marketing", name: "diagnostico.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/8561e78e-bf4d-413b-8778-b9cd4d35deea", folder: "src/img/marketing", name: "rocket.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/c96607c5-5b09-41d1-a4d6-54e3ba1c7787", folder: "src/img/marketing", name: "woman.jpg" },
  
  // Vendas
  { url: "https://www.figma.com/api/mcp/asset/b51b18fe-3a25-49dc-ac74-de7136b2e7c7", folder: "src/img/vendas", name: "banner.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/9dfaac8a-e2cc-4cdc-8a50-80d95281b53b", folder: "src/img/vendas", name: "integracao.jpg" },
  
  // Atendimento
  { url: "https://www.figma.com/api/mcp/asset/ca040b09-6a99-423c-9ddc-7f290effe39b", folder: "src/img/atendimento", name: "banner.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/9c0a1519-813b-4d58-b2d5-e25d82233eff", folder: "src/img/atendimento", name: "treinamento.jpg" },
  
  // Analise
  { url: "https://www.figma.com/api/mcp/asset/b9da9195-49a5-460d-a9e7-f54f4be1f01b", folder: "src/img/analise", name: "banner.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/7716318a-2d7a-4ed0-8b1a-32ba1337d773", folder: "src/img/analise", name: "dashboard.jpg" },
  { url: "https://www.figma.com/api/mcp/asset/85fb43cb-eac9-44ed-8eab-98ef9ef8490d", folder: "src/img/analise", name: "integracao.jpg" },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    const request = https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
    
    request.on('error', (err) => {
      file.close();
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

async function main() {
  console.log('🚀 Iniciando download das imagens...\n');
  
  let success = 0;
  let failed = 0;
  
  for (const img of images) {
    const folderPath = path.join(__dirname, '..', img.folder);
    const filepath = path.join(folderPath, img.name);
    
    // Criar pasta se não existir
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      console.log(`📁 Pasta criada: ${img.folder}`);
    }
    
    try {
      console.log(`⬇️  Baixando: ${img.name}...`);
      await downloadImage(img.url, filepath);
      console.log(`✅ Salvo: ${img.folder}/${img.name}`);
      success++;
    } catch (error) {
      console.log(`❌ Erro: ${img.name} - ${error.message}`);
      failed++;
    }
  }
  
  console.log(`\n📊 Resultado: ${success} sucesso, ${failed} falhas`);
  console.log('\n✨ Download concluído!');
}

main();
