import { copyFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const sourceDir = 'node_modules/@shoelace-style/shoelace/dist';
const targetDir = 'dist/assets/shoelace';

// Create target directory if it doesn't exist
mkdirSync(targetDir, { recursive: true });

// Copy all files from source to target
const files = readdirSync(sourceDir);
files.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.woff2')) {
    copyFileSync(join(sourceDir, file), join(targetDir, file));
  }
}); 