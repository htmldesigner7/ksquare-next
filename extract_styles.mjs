import fs from 'fs';

function findNode(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNode(child, id);
      if (found) return found;
    }
  }
  return null;
}

function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

const data = JSON.parse(fs.readFileSync("figma_full.json", "utf-8"));
const homeNode = findNode(data.document, "1:2");

const colors = new Set();
const fonts = new Set();
const images = [];

function extract(node) {
  // Extract Colors
  if (node.fills) {
    node.fills.forEach(fill => {
      if (fill.type === 'SOLID' && fill.color) {
        colors.add(rgbToHex(fill.color.r, fill.color.g, fill.color.b));
      }
      if (fill.type === 'IMAGE' && fill.imageRef) {
        images.push({ nodeId: node.id, imageRef: fill.imageRef });
      }
    });
  }
  
  // Extract Fonts
  if (node.style && node.style.fontFamily) {
    fonts.add(node.style.fontFamily);
  }

  if (node.children) {
    node.children.forEach(extract);
  }
}

if (homeNode) {
  extract(homeNode);
  console.log("--- Extracted Colors ---");
  console.log(Array.from(colors).join(', '));
  console.log("\n--- Extracted Fonts ---");
  console.log(Array.from(fonts).join(', '));
  console.log(`\n--- Images Found: ${images.length} ---`);
  fs.writeFileSync('images_list.json', JSON.stringify(images, null, 2));
}
