/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NOCODB_API_URL: string
  readonly VITE_NOCODB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}