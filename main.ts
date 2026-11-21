import { mkdirSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';

// The speaker asks to borrow a library card and carries its books home.
// On the last page, a yes in their own handwriting predates the request.
const poem = 'I asked to borrow your library card. You signed the back and said, take what you need. I carried home a stack of other people\'s lives, and on the last page of the last one I found a note in my own handwriting — a yes I wrote years before I asked.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
console.log('Unicode code points:', [...poem].length);
console.log('UTF-8 bytes:', Buffer.byteLength(poem, 'utf8'));
