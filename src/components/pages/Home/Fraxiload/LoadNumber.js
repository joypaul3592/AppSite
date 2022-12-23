import React, { useEffect } from 'react'
import loadnumberImg from '../../../assets/images/loadnumber.png'
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function LoadNumber({ CompanyLogo, number }) {
    useEffect(() => {
        document.getElementById("ipf").focus()
    }, [])

    return (
        <div className='  relative  pt-2'>
            <div className=' bg-white w-10/12 mx-auto py-10 mt-28 rounded-lg '>
                <div className=' flex items-center justify-center gap-5 '>
                    <div class="flex items-center gap-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100  border-none" />
                        <label for="default-radio-1" class=" mt-1 text-sm font-medium text-gray-900 ">Prepaid</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100  border-none" />
                        <label for="default-radio-2" class=" mt-1 text-sm font-medium text-gray-900 ">Postpaid</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100  border-none" />
                        <label for="default-radio-3" class=" mt-1 text-sm font-medium text-gray-900 ">Skitto</label>
                    </div>

                </div>
                <div className=' flex items-center justify-between px-10 mt-4'>
                    <h5 className=' text-md '>{number}</h5>
                    <img className=' w-16 h-16 ' src={CompanyLogo} alt="CompanyLogo" />
                </div>
            </div>

            <div className=' mt-10  px-10 '>
                <div className=' bg-white rounded-xl flex items-center justify-between px-5 py-4'>
                    <div>
                        <div class="flex items-center gap-2 cursor-pointer">
                            <input id="default-radio-7" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100  border-none" />
                            <label for="default-radio-7" class=" mt-1 text-sm font-medium text-gray-900 ">20</label>
                        </div>
                        <div class="flex items-center gap-2  cursor-pointer">
                            <input id="default-radio-6" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100  border-none" />
                            <label for="default-radio-6" class=" mt-1 text-sm font-medium text-gray-900 ">50</label>
                        </div>
                        <div class="flex items-center gap-2 cursor-pointer">
                            <input id="default-radio-5" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100  border-none" />
                            <label for="default-radio-5" class=" mt-1 text-sm font-medium text-gray-900 ">100</label>
                        </div>
                        <div class="flex items-center gap-2 cursor-pointer">
                            <input id="default-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100  border-none" />
                            <label for="default-radio-4" class=" mt-1 text-sm font-medium text-gray-900 ">150</label>
                        </div>
                    </div>

                    <input className=' text-3xl  h-20 w-28 p-2' type='number' id="ipf" placeholder='$0' />
                    <div className=' text-3xl text-sky-600'>
                        <BsArrowRightCircleFill />
                    </div>
                </div>
            </div>

            <div className=' absolute top-0 left-0  -z-10 bg-opacity-90 right-0 bottom-0 w-full h-full'>
                <img className='z-0' src={loadnumberImg} alt="loadnumberImg" />
            </div>
            <p className=' text-xs text-white text-center mt-2'>Go next step for complete</p>
        </div>
    )
}
