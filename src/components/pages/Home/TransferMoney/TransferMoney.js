import React from 'react'
import CashOutBg from '../../../assets/images/CashOutBg.png'
export default function TransferMoney() {
  return (
    <div className=" w-full relative h-[100vh]  px-3 flex justify-center items-center ">
      <form className="bg-white bg-opacity-30 backdrop-blur-md flex-1 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex justify-between items-center text-white">
          <span>Source</span>
          <div className='flex gap-2 items-center text-white'>
            <label for="main">Main</label>
            <input type="radio" id="main" name="type" value="main" required />
          </div>
          <div className='flex gap-2 items-center'>
            <label for="Drive">Drive</label>
            <input type="radio" id="Drive" name="type" value="Drive" required />
          </div>
          <div className='flex gap-2 items-center'>
            <label for="Bank">Bank</label>
            <input type="radio" id="Bank" name="type" value="Bank" required />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" for="email">
            User Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="User email" required />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" for="Amount">
            Amount
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Amount" name="Amount" type="number" placeholder="Amount" required />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" for="number">
            Number
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" name="number" type="number" placeholder=" Transfer number" required />
        </div>
        <div className=' mb-4'>
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transfer Method</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected>Bkash</option>
            <option value="US">United States</option>
            <option value="CA">Nogod</option>
            <option value="FR">Upay</option>
            <option value="DE">Bank</option>
          </select>
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
  )
}
