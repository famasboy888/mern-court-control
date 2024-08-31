export const ENV = import.meta.env.VITE_ENV;
export const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
export const BACKEND_URL =
  ENV === "development"
    ? `http://localhost:${BACKEND_PORT}`
    : import.meta.env.VITE_BACKEND_URL;
