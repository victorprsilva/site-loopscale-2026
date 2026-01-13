import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração
const quality = 80; // Qualidade WebP (0-100)
const imgDirectory = path.join(__dirname, 'src', 'img');

// Função para converter uma imagem
async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Apenas converter JPG, JPEG e PNG
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Pular se já existe
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Pulando (já existe): ${path.basename(outputPath)}`);
    return;
  }

  try {
    const info = await sharp(filePath)
      .webp({ quality })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(filePath).size;
    const newSize = info.size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(filePath)} → ${path.basename(outputPath)}`);
    console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% menor)\n`);
  } catch (error) {
    console.error(`❌ Erro ao converter ${filePath}:`, error.message);
  }
}

// Função para percorrer diretórios recursivamente
async function processDirectory(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile()) {
      await convertToWebP(fullPath);
    }
  }
}

// Executar
console.log('🚀 Iniciando conversão de imagens para WebP...\n');
console.log(`📁 Diretório: ${imgDirectory}`);
console.log(`🎯 Qualidade: ${quality}%\n`);

processDirectory(imgDirectory)
  .then(() => {
    console.log('\n✨ Conversão concluída!');
    console.log('\n📝 Próximos passos:');
    console.log('   1. Verifique as imagens .webp geradas');
    console.log('   2. Execute o script de atualização do código');
  })
  .catch(error => {
    console.error('❌ Erro:', error);
    process.exit(1);
  });
