import fs from 'fs';
import path from 'path';

async function downloadImages() {
  const imagesList = JSON.parse(fs.readFileSync('images_list.json', 'utf-8'));
  const nodeIds = [...new Set(imagesList.map(img => img.nodeId))];
  
  // Max 50 node ids per request, we have 24, so one request is fine
  const idsParam = nodeIds.join(',');
  
  console.log(`Fetching image URLs for ${nodeIds.length} nodes...`);
  const res = await fetch(`https://api.figma.com/v1/images/k3QNJgfqmH1qrsYeWhAFi2?ids=${idsParam}&scale=2&format=png`, {
    headers: {
      "X-Figma-Token": process.env.FIGMA_TOKEN || "YOUR_FIGMA_TOKEN"
    }
  });
  
  const data = await res.json();
  if (data.err) {
    console.error("Error from Figma:", data.err);
    return;
  }
  
  const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');
  if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir, { recursive: true });
  }

  const imageUrls = data.images;
  console.log(`Found ${Object.keys(imageUrls).length} image URLs. Downloading...`);
  
  for (const [id, url] of Object.entries(imageUrls)) {
    if (!url) {
      console.log(`No URL returned for node ${id}`);
      continue;
    }
    
    try {
      const imgRes = await fetch(url);
      const buffer = await imgRes.arrayBuffer();
      const filename = `img_${id.replace(':', '_')}.png`;
      fs.writeFileSync(path.join(publicAssetsDir, filename), Buffer.from(buffer));
      console.log(`Downloaded ${filename}`);
    } catch (err) {
      console.error(`Failed to download ${id}:`, err);
    }
  }
  console.log("Image download complete.");
}

downloadImages();
