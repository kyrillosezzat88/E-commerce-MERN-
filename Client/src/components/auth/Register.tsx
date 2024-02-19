"use client";
import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";

interface RegisterProps {
  setLogin: Dispatch<SetStateAction<boolean>>;
}
type formData = {
  fullName: string;
  email: string;
  password: string;
  confPassword: string;
};
const Register = ({ setLogin }: RegisterProps) => {
  const [formData, setFormData] = useState<formData>({
    fullName: "",
    email: "",
    password: "",
    confPassword: "",
  });
  // handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //handle submti
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ formData });
  };
  return (
    <form className="flex flex-col gap-3 mt-4" onSubmit={handelSubmit}>
      <input
        type="text"
        name="fullName"
        className="input-outline"
        placeholder="Full Name"
        defaultValue={formData.fullName}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="email"
        name="email"
        className="input-outline"
        placeholder="Email"
        defaultValue={formData.email}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="password"
        name="password"
        className="input-outline"
        placeholder="Password"
        defaultValue={formData.password}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="password"
        className="input-outline"
        placeholder="Confirm Password"
        name="confPassword"
        defaultValue={formData.confPassword}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit" className="btn-primary py-4">
        Create my account
      </button>
      <span className=" capitalize text-center text-gray-500">
        Already have an account?
        <span
          className="text-black font-JostSemiBold cursor-pointer"
          onClick={() => setLogin(true)}
        >
          Login Now
        </span>
      </span>
    </form>
  );
};

export default Register;
