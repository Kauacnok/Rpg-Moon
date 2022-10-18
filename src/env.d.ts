/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string,
  readonly VITE_API_ACCESS_TOKEN: string,
  readonly VITE_PASSWORD_UPDATE_HISTORY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
