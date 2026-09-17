/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const d = JSON.parse(fs.readFileSync('figma_full.json', 'utf-8'));
function findNode(n, id) {
  if (n.id === id) return n;
  if (n.children) {
    for (let c of n.children) {
      let r = findNode(c, id);
      if (r) return r;
    }
  }
  return null;
}
const root = findNode(d.document.children[0], process.argv[2] || '1:1439');
function extract(n, depth) {
  if (depth > 6) return;
  let text = n.name + ' [' + n.type + '] - ' + n.id;
  if (n.type === 'TEXT') {
    text += ' TEXT="' + n.characters.replace(/\n/g, '\\n') + '"';
  }
  console.log('  '.repeat(depth) + text);
  if (n.children) n.children.forEach(c => extract(c, depth + 1));
}
if(root) extract(root, 0);
