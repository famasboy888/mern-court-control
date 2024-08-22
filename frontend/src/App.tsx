import { useEffect, useState } from "react";
import BACKEND_URL from "./utils/backendUrl";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/test`);

      const data = await res.json();

      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Title!</h1>
      <h1 className="text-3xl font-bold underline text-red-500">
        Message from Backend: {message}
      </h1>
    </div>
  );
}

export default App;
