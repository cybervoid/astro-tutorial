import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// Set the base path for Shoelace assets
// In development, use node_modules
// In production, use the bundled assets
const isDev = import.meta.env.DEV;
const basePath = isDev 
  ? '/node_modules/@shoelace-style/shoelace/dist'
  : '/assets/shoelace';

setBasePath(basePath);

// Import Shoelace components
import '@shoelace-style/shoelace/dist/shoelace.js'; 