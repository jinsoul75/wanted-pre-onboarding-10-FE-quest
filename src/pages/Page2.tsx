import { useEffect, useState } from "react";
import axios from "axios";

export default function Page2() {
  const [value, setValue] = useState([]);

  const fetchMockApi = async () => {
    try {
      const response = await axios(
        "https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock"
      );
      setValue(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMockApi();
  }, []);

  return (
    <ul>
      {value.map((v: { name: string }) => (
        <li key={Math.random()}>{v.name}</li>
      ))}
    </ul>
  );
}
