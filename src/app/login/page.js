"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        throw new Error("Wrong Credentials...");
      }

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      }

      router.replace("/invoice");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100 rounded"
      style={{
        overflowY: "scroll",
        scrollbarColor: "white white",
        scrollbarWidth: "thin",
        height: "100vh",
      }}>
      <form className="bg-white p-8 shadow-md w-96 rounded" onSubmit={handleLogin} style={{ width: 500 }}>
        <br />
        <h4 className="text-2xl mb-4">
          <b>Sign in to account</b>
        </h4>
        <p style={{ fontFamily: "sans-serif", color: "gray" }}>Enter your email & password to login</p>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Test@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="******"
          />
        </div>
        <div className="flex justify-between mb-2">
          <div className="flex items-center">
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="mr-2" />
            <p>Remember me</p>
          </div>
          <Link href="/forgot-password" className="font-bold text-blue-700 ml-2 hover:underline">
            Forget password
          </Link>
        </div>
        <button type="submit" className="bg-gray-900 text-white rounded py-2 px-4 hover:bg-blue-600" style={{ width: 435 }}>
          Sign in
        </button>

        <div className="mt-2">
          Dont have an account?
          <Link href="/sign-up" className="font-bold text-blue-700 ml-2 hover:underline">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
