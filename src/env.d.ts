/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_AUTH_API_URL: string;
  readonly PUBLIC_AUTH_REGISTER_ENDPOINT: string;
  readonly PUBLIC_AUTH_LOGIN_ENDPOINT: string;
  readonly PUBLIC_AUTH_VERIFY_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace JSX {
  interface IntrinsicElements {
    'sl-card': any;
    'sl-input': any;
    'sl-button': any;
    'sl-alert': any;
    'sl-icon': any;
  }
} 