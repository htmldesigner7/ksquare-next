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

function dumpNode(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let info = `${node.name} [${node.type}]`;
  
  if (node.type === 'TEXT') {
    const chars = node.characters ? node.characters.replace(/\n/g, '\\n').substring(0, 50) : '';
    info += ` - "${chars}"`;
    if (node.style) {
      info += ` (Font: ${node.style.fontFamily}, Size: ${node.style.fontSize}, Weight: ${node.style.fontWeight})`;
    }
  }
  
  if (node.fills && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID' && fill.color) {
      const r = Math.round((fill.color.r || 0) * 255);
      const g = Math.round((fill.color.g || 0) * 255);
      const b = Math.round((fill.color.b || 0) * 255);
      info += ` (Bg: rgb(${r},${g},${b}))`;
    }
    if (fill.type === 'IMAGE') info += ` (ImageRef: ${fill.imageRef})`;
  }
  
  if (node.layoutMode) {
    info += ` (Flex: ${node.layoutMode}, Padding: ${node.paddingTop}/${node.paddingRight}/${node.paddingBottom}/${node.paddingLeft}, Gap: ${node.itemSpacing})`;
  }

  if (node.absoluteBoundingBox) {
    info += ` (W: ${node.absoluteBoundingBox.width}, H: ${node.absoluteBoundingBox.height})`;
  }

  console.log(indent + info);
  
  if (node.children) {
    node.children.forEach(c => dumpNode(c, depth + 1));
  }
}

try {
  const data = JSON.parse(fs.readFileSync("figma_full.json", "utf-8"));
  const targetId = process.argv[2] || "1:164"; // Default to 1:164, or use argument
  const targetNode = findNode(data.document, targetId);
  if (targetNode) {
    dumpNode(targetNode);
  } else {
    console.error(`Error: Node with ID ${targetId} not found in figma_full.json`);
  }
} catch (e) {
  console.error("Error running script:", e.message);
}
