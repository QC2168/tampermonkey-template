const year = new Date().getFullYear();
import commonMeta from '../../meta/commonMeta';
import path from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';

const getBanner = (meta = {}) => `// ==UserScript==\n${Object.entries(Object.assign(commonMeta, meta))
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.map(v => `// @${key.padEnd(20, ' ')}${v}`).join('\n')
    } else {
      return `// @${key.padEnd(20, ' ')}${value}`
    }

  })
  .join('\n')}
// ==/UserScript==
`;

export default function injectMeta() {
  return {
    name: 'inject-meta',
    closeBundle() {
      console.log('正在注入元数据...')
      const distFolder = (path.join(process.cwd(), 'dist'));
      const entry = (path.join(distFolder, 'index.js'));
      const sourceCode = readFileSync(entry, { encoding: 'utf-8' })
      const meta = getBanner()
      const content = meta + '\n' + sourceCode
      writeFileSync(entry, content, { encoding: 'utf-8' })
      console.log('注入元数据成功')
    }
  }
}
