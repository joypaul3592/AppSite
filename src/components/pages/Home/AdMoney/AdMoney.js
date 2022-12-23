import React, { useState } from 'react'

import CashOutBg from '../../../assets/images/CashOutBg.png'

export default function AdMoney() {
  document.title = "AdMoney"
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handelSubmitValue = (event) => {
    event.preventDefault()

  }
  return (
    <>
      <div className=" w-full relative h-[100vh]  px-3 flex justify-center items-center ">
        <form onSubmit={handelSubmitValue} className="bg-white bg-opacity-30 backdrop-blur-md flex-1 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex justify-between items-center text-white">
            <span>Source</span>
            <div className='flex gap-2 items-center text-white'>
              <label for="main">Main</label>
              <input type="radio" id="main" name="type" value="main" onChange={handleChange} required />
            </div>
            <div className='flex gap-2 items-center'>
              <label for="Drive">Drive</label>
              <input type="radio" id="Drive" name="type" value="Drive" onChange={handleChange} required />
            </div>
            <div className='flex gap-2 items-center'>
              <label for="Bank">Bank</label>
              <input type="radio" id="Bank" name="type" value="Bank" onChange={handleChange} required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username"
              value={inputs.username || ""}
              type="text" placeholder="Username" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" for="email">
              User Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="User email" onChange={handleChange} value={inputs.Amount || ""} required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" for="Password">
              User Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Password" name="Password" type="password" placeholder="User Password" onChange={handleChange} value={inputs.Amount || ""} required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" for="Amount">
              Amount
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Amount" name="Amount" type="number" placeholder="Amount" onChange={handleChange} value={inputs.Amount || ""} required />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" for="note">
              Transfer Id
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="note" value={inputs.note || ""} name="note" type="text" placeholder=" Transfer Id" onChange={handleChange} required />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline" type="submit" >
              Transfer
            </button>
          </div>
        </form>
        <div className=' absolute top-0 left-0  -z-10 bg-opacity-90 right-0 bottom-0 w-full h-full'>
          <img className='z-0' src={CashOutBg} alt="loadnumberImg" />
        </div>
      </div>
    </>
  )
}
