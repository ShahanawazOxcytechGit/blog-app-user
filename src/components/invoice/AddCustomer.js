"use client"
import React from "react";
import { useState } from "react";

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("/api/addcustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email , mobileNumber , address }),
    });

     const { error , result } = await response.json();

        if(error!==undefined) {
             console.log('Customer Added error:', error);
        }
           setName('');
          setEmail('');
          setMobileNumber('');
          setAddress('')
      } catch (error) {
          console.error('Customer Message addition operation error', error);
      }  };


  return (
    <>
      <div className="bg-white my-5 rounded-md shadow-[0px_5px_20px_lightgray] mb-20">
        <h1 className="p-4 text-3xl font-semibold">Add Customer</h1>

        <div className="p-2 rounded-md md:p-5">
          <h2 className="ml-[420px] text-2xl font-semibold uppercase">Customer Details</h2>

          <div className="ml-[420px] flex flex-col items-center gap-3 py-5 lg:flex-row lg:justify-between lg:items-start">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] px-2 py-0 border-none outline-none rounded-md"
              />
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] p-2 border-none outline-none rounded-md"
              />
              <input
                type="text"
                id="mobileno"
                name="mobileno"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile Number"
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] h-[30px] md:h-[40px] p-2 border-none outline-none rounded-md"
              />
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-gray-100 text-sm md:text-base w-[200px] sm:w-[300px] min-h-[60px] md:min-h-[100px] p-2 border-none outline-none rounded-md"
                placeholder="Company Address"></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 py-5">
            <button onClick={handleAddCustomer} className="bg-green-500 text-white rounded px-2 py-1">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
