import { readFileSync, writeFileSync } from 'fs';

const jsonContent = readFileSync('test.json', 'utf8');

writeFileSync('transformed.json', JSON.stringify({"data": "data"}), 'utf8');
