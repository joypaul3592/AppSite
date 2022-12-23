import React from 'react'
import '../../../styles/Home.css'
import CashOutBg from '../../../assets/images/CashOutBg.png'
export default function CashOut() {
  return (
    <div className='  relative flex py-44 justify-center '>
      <div className=' bg-purple-200 bg-opacity-20 backdrop-blur p-3 rounded-md py-6 w-10/12'>
        <p className=' text-2xl font-semibold mb-6 text-purple-200 text-center'>CashOut  Number</p>
        <div className=' w-full mb-4'>
          <label className=' text-white' htmlFor="amount">Cashout Amount : </label>
          <input className=' w-full bg-white py-2 px-2 rounded-md' type="Number" id="amount" name="amount" maxLength="11" placeholder='Enter your clashout Amount' />
        </div>
        <div className=' w-full mb-4'>
          <label className=' text-white' htmlFor="userumber">Cashout Number : </label>
          <input className=' w-full bg-white py-2 px-2 rounded-md' type="Number" id="userumber" name="userumber" maxLength="11" placeholder='Enter your cashout number' />
        </div>
        <div className=' mb-4'>
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cashout Method</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected>Bkash</option>
            <option value="US">United States</option>
            <option value="CA">Nogod</option>
            <option value="FR">Upay</option>
            <option value="DE">Bank</option>
          </select>
        </div>
        <button className=' mt-4 bg-white py-1.5 px-6 rounded hover:bg-green-400 hover:text-white transition-all duration-300 ease-in-out font-semibold text-[#36B3B8]' >Submit </button>
      </div>

      <div className=' absolute top-0 left-0  -z-10 bg-opacity-90 right-0 bottom-0 w-full h-full'>
        <img className='z-0' src={CashOutBg} alt="loadnumberImg" />
      </div>


    </div>
  )
}
