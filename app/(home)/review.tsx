import React from 'react'
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface ButtonProps {
    name: string;
  }

function review({
    name,
  }: ButtonProps) {
  return (
    <div className="shadow-lg w-96 justify-center text-center m-auto">
          <div className="relative p-10">
            <Image className="m-auto" src="/Ellipse 1.png" alt="beer" width={200} height={200}/>
            <div className="block w-full text-center justify-center">
              <p className="text-2xl pt-5">{name}</p>
              <p className="w-80 justify-center m-auto pt-5">The flavors in 7Seas are truly remarkable! Its the perfect balance of hoppy bitterness and smooth malt. This has quickly become my go-to beer for any occasion. Highly recommend giving it a try!</p>
              <div className="flex text-center items-center justify-center pt-5">
                <p className="text-3xl">4,5</p>
                <FaStar size={30}/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default review
