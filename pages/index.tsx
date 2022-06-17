import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GreenBorderButton, GreenButton } from '../components/buttons';
import Nav from '../components/navigation';

import { BsArrowRight } from "react-icons/bs";
import { TbCrown } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";

import WhiteShirt from "../assets/pictures/white-shirt.png";
import RedBook from "../assets/pictures/red-book.png";
import WhiteCap from "../assets/pictures/white-cap.png";
import BankyW from "../assets/pictures/bankyw.png";
import ManBeanie from "../assets/pictures/man-beanie.png"
import ManDreads from "../assets/pictures/man-dreads.png"
import ManShortHair from "../assets/pictures/man-short-hair.png"
import WomanFair from "../assets/pictures/woman-fair.png";
import WomanShortHair from "../assets/pictures/woman-short-hair.png";
import BinanceGroup from "../assets/svgs/binance-group";


const Home: NextPage = () => {
  return (
    <div className="h-full bg-green-900 py-10 px-24 text-white">
      <Head>
        <title>FreeMerch</title>
        <meta name="description" content="Get Free Merch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <div className="text-center w-2/4 mx-auto mt-32 ">
        <h1 className="text-6xl font-semibold">
          <span className="text-green-100">Get Access</span> to Free Crypto Swag Wear
        </h1>

        <p className="my-11">
          Using Merchandise to encourage new and pre-existing users 
          to learn about blockchain, foster education and create 
          awareness for leading blockchain and tech products.
        </p>
        
        <div className="space-x-16">
          <GreenButton>Button</GreenButton>
          <GreenBorderButton>Learn More</GreenBorderButton>
        </div>
      </div>


      <div className="my-12 w-2/3 mx-auto text-center">
        <h2 className="font-semibold text-green-100 text-4xl mb-11">CATEGORIES</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
        </p>
      </div>
      
      
      <div className="flex justify-between mx-auto max-w-[1097px]">
          <div className="border-1px border-green-100 max-w-[289px] p-3.5">
          <Image src={WhiteShirt} alt={"white shirt"} />
          <div className="mt-11 mx-6 mb-2.5">
            <p className="text-left text-xl">
              Wears &nbsp;
              <BsArrowRight className="inline-block"/>
            </p>
            <div className="flex justify-between text-left">

              <div className="flex flex-col">
                <span>
                  Owned
                </span>
                <BinanceGroup />
              </div>

              <div className="flex flex-col text-left">
                <span>
                  Shared
                </span>
                1,578
              </div>

            </div>
          </div>
        </div>

                <div className="border-1px border-green-100 max-w-[289px] p-3.5">
          <Image src={RedBook} alt={"white shirt"} />
          <div className="mt-11 mx-6 mb-2.5">
            <p className="text-left text-xl">
              Wears &nbsp;
              <BsArrowRight className="inline-block"/>
            </p>
            <div className="flex justify-between text-left">

              <div className="flex flex-col">
                <span>
                  Owned
                </span>
                <BinanceGroup />
              </div>

              <div className="flex flex-col text-left">
                <span>
                  Shared
                </span>
                1,578
              </div>

            </div>
          </div>
        </div>

          <div className="border-1px border-green-100 max-w-[289px] p-3.5">
            <Image src={WhiteCap} alt={"white shirt"} />
            <div className="mt-11 mx-6 mb-2.5">
              <p className="text-left text-xl">
                Wears &nbsp;
                <BsArrowRight className="inline-block"/>
              </p>
              <div className="flex justify-between text-left">

                <div className="flex flex-col">
                  <span>
                    Owned
                  </span>
                  <BinanceGroup />
                </div>

                <div className="flex flex-col text-left">
                  <span>
                    Shared
                  </span>
                  1,578
                </div>

              </div>
            </div>
          </div>
        </div>

      <div className="mt-32 mb-52 flex justify-between flex-wrap max-w-screen-xl mx-auto">
        <div className="border-1px border-green-100 max-w-xl px-12 py-12 pb-6 rounded-xl max-h-min">
          <div className="rounded-full w-12 h-12 bg-white flex justify-center items-center">
            <TbCrown className="fill-green-900 w-6 h-6"/>
          </div>
          <h3 className="my-3 font-semibold text-4xl">Company</h3>
          <p>
            Get access, Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit ut aliquam, purus sit
          </p>
            <GreenButton className="mt-6">Contact</GreenButton>
        </div>

        <div className="border-1px border-green-100 max-w-xl px-12 py-12 pb-6 rounded-xl translate-y-20">
          <div className="rounded-full w-12 h-12 bg-white flex justify-center items-center">
            <TiStarFullOutline className="fill-green-900 w-6 h-6"/>
          </div>
          <h3 className="my-3 font-semibold text-4xl">Individual</h3>
          <p>
            Rep the branded wears, ,Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit ut aliquam, purus sit amet luctus
          </p>
            <GreenButton className="mt-6">Contact</GreenButton>
        </div>
      </div>

      <div >
        <h3 className="font-semibold text-4xl text-center mb-10">Gallery</h3>
        <div className="flex items-end mx-auto w-full space-x-1 justify-between max-w-screen-xl ">
          <Image src={BankyW} alt="BankyW"/>
          <Image src={ManBeanie} alt="Man With Beanie" height={"243px"} layout="fixed"/>
          <Image src={WomanFair} alt="" height={222} layout="fixed"/>
          <Image src={ManShortHair} alt="" height={222} layout="fixed"/>
          <Image src={ManDreads} alt="" height={243} layout="fixed"/>
          <Image src={WomanShortHair} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Home
