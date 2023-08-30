import { readFileSync, writeFileSync } from 'fs';

const jsonContent = readFileSync('test.json', 'utf8');
const data = JSON.parse(jsonContent);

const css = Object.keys(data.Primitives).map(key => {
    const item = data.Primitives[key];
    return `--${key}: ${item.value};`;
}).join('\n');

writeFileSync('test.css', `:root {\n${css}\n}`, 'utf8');
