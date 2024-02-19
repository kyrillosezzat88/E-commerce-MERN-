"use client";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
const Auth = () => {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <div className="auth">
      <div className="auth-head flex gap-3">
        <span
          className={`text-2xl font-JostBold cursor-pointer ${
            login ? "text-shadow opacity-100" : "opacity-50"
          }`}
          onClick={() => setLogin(true)}
        >
          Login
        </span>
        <span
          className={`text-2xl font-JostBold cursor-pointer ${
            !login ? "text-shadow opacity-100" : "opacity-50"
          }`}
          onClick={() => setLogin(false)}
        >
          Register
        </span>
      </div>
      <div className="auth-content">
        {login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        )}
      </div>
    </div>
  );
};

export default Auth;
