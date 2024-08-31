import { useEffect, useState } from "react";
import { BACKEND_PORT, BACKEND_URL } from "./backendUrl";

const BackendTest = () => {
  const [message, setMessage] = useState("");
  const hostname = window.location.hostname;
  const url =
    hostname === "localhost"
      ? BACKEND_URL
      : `http://${hostname}:${BACKEND_PORT}`;

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${url}/api/test`);
      const data = await res.json();
      setMessage(data.message);
      if (!res.ok) {
        setMessage(`error: ${res.status.toString()}`);
      }
    } catch (error) {
      setMessage(`error`);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div className="text-xs">
      Backend:{" "}
      <span
        className={`font-bold  ${
          message === "ok" ? "text-[var(--primary-500)]" : "text-red-600"
        }`}
      >
        {message}
      </span>
    </div>
  );
};

export default BackendTest;
