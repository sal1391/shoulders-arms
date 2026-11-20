import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync(new URL('./dist/index.html',import.meta.url),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
for(const [,source] of scripts)new vm.Script(source);
if(!html.includes('name="viewport"')||scripts.length!==1)throw Error('Missing app content');
console.log('Static site and JavaScript syntax verified.');
