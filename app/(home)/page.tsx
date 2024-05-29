"use client";
import Image from "next/image";
import React, { useEffect,} from 'react';
import Button from "@/components/Button";
import { FaStar } from "react-icons/fa6";
import { Children } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import "./embla.css";


export default function Home() {
  const [emblaRef] = useEmblaCarousel({startIndex:1});

  return (
    <main>
      <div className="absolute top-80">
        <p className="text-[570px] font-bold opacity-10 ">Cheers</p>
      </div>
      <div className="relative items-center text-center">
        <p className="text-8xl font-bold">The Finest Craft Beer</p>
        <Image src="/beer.png" alt="beer" width={1000} height={1000}/>
      </div>

      <div className="relative items-center text-center">
        <p className="text-8xl font-bold p-5">About Our Beer</p>
        <Image src="/beer-d.png" alt="beer" width={1000} height={1000}/>
      </div>
      <div className="relative items-center">
        <p>Quality Ingredients</p>
        <p className="pl-2 border-black border-l-2 w-80">From rich malts to aromatic hops, every component is chosen with care to bring you a superior beer experience.</p>
      </div>
      <div className="relative items-center">
        <p>Crafted with Passion</p>
        <p className="pl-2 border-black border-l-2 w-80">Our passion for beer is evident in every sip. We believe in the art of brewing and strive to create beers that not only satisfy but also inspire.</p>
      </div>

      <div className="relative items-center">
        <p className="text-8xl font-bold p-5 text-center">Our Products</p>
        <div className="shadow-lg">
          <div className="p-10 sm:flex">
            <Image src="/beer.png" alt="beer" width={600} height={600}/>
            <div className="block sm:w-96">
              <p className="text-2xl text-center">Beer 7SEAS</p>
              <p>Characteristics:
              <br/>    Style: Stout
              <br/>    Alcohol by Volume (ABV): 5%
              <br/>    Bitterness (IBU): 50
              <br/>    Color: amber
              <br/>    Aromas: tutti
              <br/>    Taste: fruity
              <br/>    Volume: 16.9 oz
              <br/>
              <br/>    Ingredients:
              <br/>    Pure water
              <br/>    Barley malt
              <br/>    Hops
              <br/>    Yeast</p>
              <div className="sm:flex text-center items-center">
                <p className="text-4xl">7$</p>
                <Button label={"Add to cart"}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full items-center justify-center">
        <p className="text-8xl font-bold p-5 text-center">Testimonial</p>

        <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><div className="shadow-lg w-96 justify-center text-center m-auto">
          <div className="relative p-10">
            <Image className="m-auto" src="/Ellipse 1.png" alt="beer" width={200} height={200}/>
            <div className="block w-full text-center justify-center">
              <p className="text-2xl pt-5">John Smith</p>
              <p className="w-80 justify-center m-auto pt-5">The flavors in 7Seas are truly remarkable! Its the perfect balance of hoppy bitterness and smooth malt. This has quickly become my go-to beer for any occasion. Highly recommend giving it a try!</p>
              <div className="flex text-center items-center justify-center pt-5">
                <p className="text-3xl">4,5</p>
                <FaStar size={30}/>
              </div>
            </div>
          </div>
        </div></div>
        <div className="embla__slide"><div className="shadow-lg w-96 justify-center text-center m-auto">
          <div className="relative p-10">
            <Image className="m-auto" src="/Ellipse 2.png" alt="beer" width={200} height={200}/>
            <div className="block w-full text-center justify-center">
              <p className="text-2xl pt-5">Lynn G. Reese</p>
              <p className="w-80 justify-center m-auto pt-5">The flavors in 7Seas are truly remarkable! Its the perfect balance of hoppy bitterness and smooth malt. This has quickly become my go-to beer for any occasion. Highly recommend giving it a try!</p>
              <div className="flex text-center items-center justify-center pt-5">
                <p className="text-3xl">4,5</p>
                <FaStar size={30}/>
              </div>
            </div>
          </div>
        </div></div>
        <div className="embla__slide"><div className="shadow-lg w-96 justify-center text-center m-auto">
          <div className="relative p-10">
            <Image className="m-auto" src="/Ellipse 3.png" alt="beer" width={200} height={200}/>
            <div className="block w-full text-center justify-center">
              <p className="text-2xl pt-5">Arianne Cormier</p>
              <p className="w-80 justify-center m-auto pt-5">The flavors in 7Seas are truly remarkable! Its the perfect balance of hoppy bitterness and smooth malt. This has quickly become my go-to beer for any occasion. Highly recommend giving it a try!</p>
              <div className="flex text-center items-center justify-center pt-5">
                <p className="text-3xl">4,5</p>
                <FaStar size={30}/>
              </div>
            </div>
          </div>
        </div></div>
      </div>
    </div>

      </div>
    </main>
  );
}
