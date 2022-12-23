import React, { useEffect, useState } from 'react'
import LoadNumber from './LoadNumber'
import flaxiload from '../../../assets/images/flixiload.png'
export default function Fraxload() {

  const CompanyNumber = [
    {
      name: 'gp',
      type: ["017", "013"],
      img: "https://i.ibb.co/SctxQx8/gp.png"
    },
    {
      name: 'tet',
      type: ["015"],
      img: "https://i.ibb.co/Phx1q5P/Teletalk.png"
    },
    {
      name: 'bd',
      type: ["014", "019"],
      img: "https://i.ibb.co/V94ctd5/bd.png"
    },
    {
      name: 'rb',
      type: ["018"],
      img: "https://i.ibb.co/JpFQ652/robi.png"
    },
    {
      name: 'art',
      type: ["016"],
      img: "https://i.ibb.co/tpP9xfr/artel.png"
    },
    {
      name: 'skt',
      type: ["015"],
      img: "https://i.ibb.co/R0ygCQ3/home-icon-strong-network.png"
    }
  ]
  const [number, setNumber] = useState(0)
  const [CompanyLogo, setCompanyLogo] = useState("");

  const FlexiLoad = () => {
    if (number.length == 11) {
      const NumberCheck = number.slice(0, 3)
      if (NumberCheck && "017" || "014" || "013" || "015" || "018" || "019" || "016") {
        const LogoInfo = CompanyNumber.filter(dt => dt.type.includes(NumberCheck))
        if (LogoInfo.length >= 1) {
          setCompanyLogo(LogoInfo[0].img)
        }
      } else {
        alert('Not Alw')
      }
    } else {
      alert('Not Alw')
    }
  }


  return (
    <div className='  relative'>

      {!CompanyLogo && <div className=' z-50  py-52 flex flex-col items-center justify-center mx-10'>
        <p className=' text-2xl text-white font-semibold mb-4'>FlexiLoad  Number</p>
        <input className=' w-full bg-white py-2 px-2 rounded-md' type="Number" id="username" name="username" maxLength="11" placeholder='Enter your flexiload number' onChange={(e) => setNumber(e.target.value)} />
        <button className=' mt-4 bg-white py-1.5 px-6 rounded hover:bg-green-400 hover:text-white transition-all duration-300 ease-in-out font-semibold text-[#36B3B8]' onClick={() => FlexiLoad(number)}>Submit </button>
      </div>
      }
      {
        CompanyLogo && <LoadNumber CompanyLogo={CompanyLogo} number={number} />
      }
      {
        !CompanyLogo && <div className=' absolute top-0 left-0  -z-10 bg-opacity-90 right-0 bottom-0 w-full h-full'>
          <img className='z-0' src={flaxiload} alt="flaxiload" />
        </div>
      }

    </div>
  )
}
