import React from 'react'
import CashOutBg from '../../../assets/images/CashOutBg.png'
import img1 from '../../../assets/Lod/artel.png'
import img2 from '../../../assets/Lod/bd.png'
import img3 from '../../../assets/Lod/gp.png'
import img4 from '../../../assets/Lod/skitto.png'
import img5 from '../../../assets/Lod/robi.png'
import img6 from '../../../assets/Lod/Teletalk.png'




export default function SpecialOffer() {
  return (
    <div className=" w-full relative h-[100vh]  px-3 flex justify-center items-center ">
      <div className=' grid grid-cols-2 gap-5' >
        <div className=' p-2 bg-white hover:scale-[1.02] transition-all ease-in-out duration-200 rounded-md flex items-center justify-center'>
          <img src={img1} alt="img1" />
        </div>
        <div className=' p-2 bg-white rounded-md hover:scale-[1.02] transition-all ease-in-out duration-200 flex items-center justify-center'>
          <img src={img2} alt="img1" />
        </div>
        <div className=' p-2 bg-white rounded-md flex items-center justify-center hover:scale-[1.02] transition-all ease-in-out duration-200'>
          <img src={img3} alt="img1" />
        </div>
        <div className=' p-2 bg-white rounded-md hover:scale-[1.02] transition-all ease-in-out duration-200 flex items-center justify-center'>
          <img src={img4} alt="img1" />
        </div>
        <div className=' p-2 bg-white rounded-md flex items-center hover:scale-[1.02] transition-all ease-in-out duration-200 justify-center'>
          <img src={img5} alt="img1" />
        </div>
        <div className=' p-2 bg-white rounded-md flex items-center justify-center hover:scale-[1.02] transition-all ease-in-out duration-200'>
          <img src={img6} alt="img1" />
        </div>
      </div>
      <div className=' absolute top-0 left-0  -z-10 bg-opacity-90 right-0 bottom-0 w-full h-full'>
        <img className='z-0' src={CashOutBg} alt="loadnumberImg" />
      </div>
    </div>
  )
}
