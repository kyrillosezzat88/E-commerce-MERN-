import { Dispatch, SetStateAction } from "react";

interface RegisterProps {
  setLogin: Dispatch<SetStateAction<boolean>>;
}
function Login({ setLogin }: RegisterProps) {
  return (
    <form className="flex flex-col gap-3 mt-4">
      <input
        type="email"
        autoComplete="off"
        className="input-outline"
        placeholder="Email"
      />
      <input
        type="password"
        autoComplete="off"
        className="input-outline"
        placeholder="Password"
      />

      <button className="btn-primary py-4">Login</button>
    </form>
  );
}

export default Login;
