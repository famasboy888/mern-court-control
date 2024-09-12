export const ENV = import.meta.env.VITE_ENV;
export const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
export const BACKEND_URL =
  ENV === "development"
    ? `http://localhost:${BACKEND_PORT}`
    : import.meta.env.VITE_BACKEND_URL;

export const getLocalURL = (hostname: string): string => {
  return ENV === "development" && hostname !== "localhost"
    ? `http://${hostname}:${BACKEND_PORT}`
    : BACKEND_URL;
};
