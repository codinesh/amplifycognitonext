"use client";
import { Auth } from "aws-amplify";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../../public/assets/logo.png";

import placeholderImage from "../../../../public/assets/placeholder.png";
import PasswordInputBox from "../../../components/Primitives/PasswordInputBox";

export interface IUser {
  username: string;
  password: string;
  email: string;
}

export default function Page() {
  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e: any) => {
    const newUser: IUser = {
      ...user,
      [e?.target?.name ?? ""]: e?.target?.value ?? "",
    };

    setUser(newUser);
  };

  const signup = (e: any) => {
    e.preventDefault();
    signUp();
  };

  async function signUp() {
    try {
      const { user: createdUser } = await Auth.signUp({
        username: user.email,
        password: user.password,
        attributes: {
          email: user.email, // optional
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(createdUser);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <section className="grid justify-between h-full grid-cols-2">
      <section className="flex items-center border">
        <div className="flex flex-col items-center w-full gap-6">
          <Image
            src={Logo}
            alt="logo"
            className="w-24 h-24 mx-auto -mt-24 aspect-square"
          />

          <div className="flex flex-col gap-6 rounded-lg bg-[#F4F6FB] p-6">
            <h3 className="mx-auto text-2xl font-bold">Login</h3>
            <form
              className="flex flex-col gap-6 bg-[#F4F6FB] p-6"
              onSubmit={signup}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email id or Username
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    id="email"
                    className="block w-full p-2 rounded-md shadow-sm border-light focus:border-primary focus:ring-primary"
                    placeholder="Enter your Email or User name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <PasswordInputBox onChange={onChange} />
                </div>
              </div>

              <div>
                <label
                  htmlFor="account-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Account number
                </label>
                <div className="relative mt-1 rounded-md shadow-sm"></div>
              </div>

              <button
                type="submit"
                className="px-4 py-2 text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-grow items-center justify-center border bg-[#F4F6FB]">
        <Image alt="placeholder image" src={placeholderImage} />
      </section>
    </section>
  );
}
