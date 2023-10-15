"use client";
import React from "react";
import Image from "next/image";
import backgroundImage from "../assets/home-hotel-img.jpg";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const router = useRouter();
  const notifyError = (info) => toast.error(info);
  const notifySuccess = (info) => toast.success(info,{autoClose:2000});
  const handleSubmit = (event) => {
    event.preventDefault()
    notifySuccess("Successfull admin sign in.");
    router.push('/hotelDashboard')
  };
  return (
    <main className="absolute t-0 l-0 h-full w-full flex flex-row">
      <section className="w-3/5">
        <div className="relative w-full h-full p-0 m-0 py-2">
          <Image
            src={backgroundImage}
            fill
            style={{ objectFit: "cover" }}
            alt="vector image of hotel"
          />
        </div>
      </section>
      <section className="w-2/5">
        <div className="w-full h-full flex flex-row justify-center items-center">
          <div className="w-full max-w-xs">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="adminId"
                >
                  Admin Id
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="adminId"
                  type="text"
                  placeholder="adminId"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                {/* <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a> */}
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2023 Hotel Corp. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
