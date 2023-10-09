import { useState } from "react";
import Input from "../components/Input";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(username, password);
    setUsername("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='아이디'
        type='text'
        required={false}
        placeholder={"아이디를 입력해주세요"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        label={"비밀번호"}
        type={"password"}
        required={false}
        value={password}
        placeholder={"비밀번호를 입력해주세요"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type='submit'>로그인</button>
    </form>
  );
}
