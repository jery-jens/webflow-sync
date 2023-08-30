import { readFileSync, writeFileSync } from 'fs';

const jsonContent = readFileSync('test.json', 'utf8');

const data = "test"

writeFileSync('test.css', data, 'utf8');
