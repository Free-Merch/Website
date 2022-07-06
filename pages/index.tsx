import { useState } from 'react';
// Next imports
import type { NextPage } from 'next'
import Image from 'next/image'

// package imports
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

// imported components
import { WhiteButton, GreenButton } from '../components/buttons';
import Layout from '../components/layout';

// react icons
import { BsChevronRight,  } from "react-icons/bs";
import { CgChevronRightR, CgChevronLeftR } from "react-icons/cg";
import { TbCrown } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import ReactPlayer from "react-player";

// pictures
import BankyW from "../assets/pictures/bankyw.png";
import ManBeanie from "../assets/pictures/man-beanie.png"
import ManDreads from "../assets/pictures/man-dreads.png"
import ManShortHair from "../assets/pictures/man-short-hair.png"
import WomanFair from "../assets/pictures/woman-fair.png";
import WomanShortHair from "../assets/pictures/woman-short-hair.png";
import Binance from "../assets/pictures/binance.png";
import BinanceText from "../assets/pictures/binance_text.png";
import HeroHuman from "../assets/pictures/hero-human.png";
import Playbtn from "../assets/pictures/play.png";
import { ProjectCard } from '../components/cards/project-card';

  let faqsText = [
    [
      "dolor sit amet, consectetur adipiscing elit ut aliquam",
      `
        vel fringilla est ullamcorper eget nulla facilisi etiam dignissim 
        diam quis enim lobortis scelerisque fermentum dui faucibus in ornare 
        quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
      `
    ],
    [
      `Facilisis mauris sit amet massa vitae tortor condimentum 
        lacinia quis vel eros donec ac odio tempor orci dapibus`,
      `
        vel fringilla est ullamcorper eget nulla facilisi etiam dignissim 
        diam quis enim lobortis scelerisque fermentum dui faucibus in ornare 
        quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
      `
    ],
    [
      "Dam quis enim lobortis",
      `
        vel fringilla est ullamcorper eget nulla facilisi etiam dignissim 
        diam quis enim lobortis scelerisque fermentum dui faucibus in ornare 
        quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
      `
    ],
    [
      "Orci dapibus ultrices in iaculis nunc sed augue",
      `
        vel fringilla est ullamcorper eget nulla facilisi etiam dignissim 
        diam quis enim lobortis scelerisque fermentum dui faucibus in ornare 
        quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
      `
    ]
  ];

const Home: NextPage = () => {

  const [faqState, setFaqs] = useState<boolean[]>(Array(100).fill(false));

  const handleSetFaq = (index:number) => {
    const newState = [...faqState];
    newState[index] = !newState[index];
    setFaqs(newState);
  };

  const faqs = faqsText.map((faq, index) => (
    <div 
      className={`flex pb-4 border-b-1px justify-between mt-4 
        bg-white dark:bg-transparent
          p-7
          child:ease-linear
          child:transition-all
          child:duration-300
      `} key={index}>
      <div className="mr-2">
        <h4 className="text-base font-semibold max-w-[717px] dark:text-white text-blue-900 mb-4">{faq[0]}</h4>
        <p className={`
          text-sm font-normal max-w-[737px]
          ease-linear
          transition-all
          duration-3000
          overflow-hidden
          dark:text-grey-800
          text-grey-300
          ${faqState[index] ? "max-h-20" : "max-h-0" }
        `}>
          {faq[1]}
        </p>
      </div>
      <div className={`
          shrink-0
          cursor-pointer 
          relative
          flex
        `}
        onClick={() => handleSetFaq(index)}
      >
        <div className={`
          h-[4px] w-[14px] 
          ease-linear transition-all 
          duration-300
          ${!faqState[index] ?"rotate-90" : ""}
          bg-blue-400 
          dark:bg-white
        `}></div>
        <div className="h-[4px] bg-blue-400 absolute w-[14px] dark:bg-white"></div>
      </div>
    </div>
  ));

  return (
    <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-10 md:px-24 text-sm text-grey-300 dark:text-grey-400 overflow-y-hidden">
      {/* bg ellipses */}
      {/* <div className="absolute blur-[241px] w-[334px] h-[480px] opacity-50 bg-[rgba(22, 124, 186, 0.3)] right-0 top-4 z-10" /> */}
      <div className='flex flex-wrap justify-center sm:justify-between max-w-6xl mx-auto'>
        <div className="text-start xl:w-2/4 mt-32 ">
          <h1 className="text-6xl font-semibold text-green-100 max-w-[800px]">
            <span className="dark:text-white text-blue-400">Get Access</span> to Free Crypto Swag Wear
          </h1>

          <p className="my-11 max-w-[700px]">
            Using Merchandise to encourage new and pre-existing users 
            to learn about blockchain, foster education and create 
            awareness for leading blockchain and tech products.
          </p>
          
          <div className="flex w-full max-w-max justify-start flex-wrap">
            <GreenButton className="mr-6 mb-4">Contact</GreenButton>
            <button className="flex -translate-y-[10px] items-center"><Image src={Playbtn} alt="play"/> &nbsp; Learn More</button>
          </div>
        </div>
        <div className="flex justify-end relative px-2 hero-small:mx-auto">
          <div className="bg-green-100 absolute h-3/4 rounded-md bottom-0 w-full"></div>
          <Image alt="swag-human" src={HeroHuman}/>  
        </div>
      </div>

      {/* About Us */}
      <div className="max-w-screen-lg mt-20 text-center mx-auto">
        <h3 className=" font-semibold text-green-100 text-3xl mb-11">About Us</h3>
        <p>
          Get free crypto merchandise is a program directed at reaching out previously existing networks of Africans and crypto 
          enthusiasts by creating easy, Non-complex crypto bounties for community members to get free crypto merchandise for 
          sponsoring brands thereby creating value end to end.
        </p>
      </div>

      <div className="relative">
        <div className="absolute blur-[241px] w-[334px] h-[480px] opacity-50 bg-[#298A63] left-0 -translate-x-2/4 " />
      </div>

      {/* Recent Projects */}
      <div className="md:space-x-4 text-center rouded-lg mt-20">
        <div className="my-12 md:w-2/3 mx-auto text-start md:text-center">
          <h2 className="font-semibold text-green-100 text-3xl mb-11">Recent Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
          </p>
        </div>

        <div className="child:m-4">
          <ProjectCard type="binance" />
          <ProjectCard type="mexc"/>
          <ProjectCard type="binance" />
          <ProjectCard type="mexc"/>
        </div>
        <p className="text-center mt-20">
          <GreenButton href="/Projects" className="mt-6">See All Brands</GreenButton>
        </p>
      </div>

      {/* Contact Info */}
      <div className="relative mt-32 mb-52 flex justify-center flex-wrap max-w-screen-xl mx-auto md:space-x-4">
        <div className="absolute blur-[241px] w-[334px] h-[480px] opacity-50 bg-[#298A63] left-0 -translate-x-2/4 " />
        <div className="dark:border-[0.2px]  dark:border-white max-w-xl bg-grey-200 bg-silver px-12 py-12 pb-6 rounded-xl max-h-min">
          <div className="rounded-full w-12 h-12 dark:bg-white bg-blue-900 flex justify-center items-center shadow-[0px_15px_25px_rgba(34,167,93,0.25)]">
            <TbCrown className="fill-white dark:fill-blue-900 w-6 h-6"/>
          </div>
          <h3 className="my-3 font-semibold text-4xl text-blue-900 dark:text-white">Company</h3>
          <p>
            Get access, Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit ut aliquam, purus sit
          </p>
            <WhiteButton className="mt-6">Contact</WhiteButton>
        </div>

        <div className="dark:border-[0.2px] dark:border-white bg-grey-200 bg-silver max-w-xl px-12 py-12 pb-6 rounded-xl translate-y-20">
          <div className=" rounded-full w-12 h-12 dark:bg-white bg-blue-900 flex justify-center items-center shadow-[0px_15px_25px_rgba(34,167,93,0.25)]">
            <TiStarFullOutline className="fill-white dark:fill-blue-900 w-6 h-6"/>
          </div>
          <h3 className="my-3 font-semibold text-4xl text-blue-900 dark:text-white">Individual</h3>
          <p>
            Rep the branded wears, ,Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit ut aliquam, purus sit amet luctus
          </p>
            <WhiteButton className="mt-6">Contact</WhiteButton>
        </div>
      </div>
      
      {/* Gallery */}
      <div >
        <h3 className="font-semibold text-4xl text-center text-blue-900 dark:text-white mb-10">Gallery</h3>
        <div className="flex items-end mx-auto w-full space-x-1 justify-between max-w-screen-xl ">
          <Splide aria-labelledby="Gallery" hasTrack={false} options={{pagination:false}} className="w-full">
            <div className="relative md:static mt-20 md:mt-0 w-full">
              <div className="splide__arrows absolute md:relative w-full md:w-20 md:ml-auto flex items-center justify-between h-full z-10 md:justify-end">
                <span className="splide__arrow splide__arrow--prev w-5 
                    h-5 cursor-pointer absolute left-1">
                  <BiChevronLeftCircle className="md:hidden" />
                  <CgChevronLeftR className="hidden md:inline-block" />
                </span>
                <span className="splide__arrow splide__arrow--next w-5 
                    h-5 cursor-pointer absolute right-1">
                  <BiChevronRightCircle className="md:hidden"  />
                  <CgChevronRightR className="hidden md:inline-block" />
                </span>
              </div>

              <SplideTrack className="md:mt-20 space-x-4 child:flex child:items-end">
                <SplideSlide className="max-w-max">
                  <div className="mr-4">
                  <Image src={BankyW} alt="BankyW"/>
                  </div>
                </SplideSlide>
                <SplideSlide className="max-w-max">
                  <div className="mr-4">
                  <Image src={ManBeanie} alt="Man With Beanie" height={"243px"} layout="fixed"/>
                  </div>
                </SplideSlide>
                <SplideSlide className="max-w-max">
                  <div className="mr-4">
                  <Image src={WomanFair} alt="" height={222} layout="fixed"/>
                  </div>
                </SplideSlide>
                <SplideSlide className="max-w-max">
                  <div className="mr-4">
                  <Image src={ManShortHair} alt="" height={222} layout="fixed"/>
                  </div>
                </SplideSlide>
                <SplideSlide className="max-w-max">
                  <div className="mr-4">
                  <Image src={ManDreads} alt="" height={243} layout="fixed"/>
                  </div>
                </SplideSlide>
                <SplideSlide className="max-w-max">
                  <div className="">
                  <Image src={WomanShortHair} alt=""/>
                  </div>
                </SplideSlide>
              </SplideTrack>
            </div>
          </Splide>
        </div>
      </div>

      <div className="mt-32 relative max-w-[1244px] mx-auto">
        <div className="absolute blur-[241px] w-[334px] h-[480px] opacity-50 bg-[#298A63] left-0 -translate-x-2/4 -translate-y-2/4 " />
        <h4 className="text-2xl font-semibold text-blue-400 dark:text-white">Communities</h4>
        <div className="mx-auto relative">
          <Splide aria-labelledby="Communities Slideshow" hasTrack={false} options={{pagination:false}}>
            <div className="relative md:static mt-20 md:mt-0">
              <div className="splide__arrows absolute md:relative w-full md:w-20 md:ml-auto flex items-center justify-between h-full z-10 md:justify-end">
                <span className="splide__arrow splide__arrow--prev w-5 
                    h-5 cursor-pointer absolute left-1">
                  <BiChevronLeftCircle className="md:hidden" />
                  <CgChevronLeftR className="hidden md:inline-block" />
                </span>
                <span className="splide__arrow splide__arrow--next w-5 
                    h-5 cursor-pointer absolute right-1">
                  <BiChevronRightCircle className="md:hidden"  />
                  <CgChevronRightR className="hidden md:inline-block" />
                </span>
              </div>

              <SplideTrack className="md:mt-20">
                <SplideSlide className="max-w-max cursor-pointer">
                  <div className="flex ml-5 justify-between items-center max-w-[400px] border-com p-5 dark:border-[0.25px] border-green-100 rounded-xl bg-white dark:bg-transparent">
                    <div className="shrink-0 hidden md:block">
                      <Image src={Binance} alt="community image" layout="fixed" height={"50px"} width={"50px"}/>
                    </div>
                    <div className="max-w-64 shrink px-2">
                      <h5 className="flex items-center text-blue-400 font-bold dark:text-white">
                        <span  className="md:hidden"><Image src={Binance} alt="community image" height={"29px"} width={"29px"}/>&nbsp; </span>
                        Web3bridge
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, editsa consectetur 
                        adipiscing elit ut aliquam, purus sit amet....
                      </p>
                    </div>
                      <BsChevronRight className="h-8 w-8 shrink-0" />
                  </div>
                </SplideSlide>
                <SplideSlide className="max-w-max cursor-pointer">
                  <div className="flex ml-5 justify-between items-center max-w-[400px] border-com p-5 dark:border-[0.25px] border-green-100 rounded-xl bg-white dark:bg-transparent">
                    <div className="shrink-0 hidden md:block">
                      <Image src={Binance} alt="community image" layout="fixed" height={"50px"} width={"50px"}/>
                    </div>
                    <div className="max-w-64 shrink px-2">
                      <h5 className="flex items-center text-blue-400 font-bold dark:text-white">
                        <span  className="md:hidden"><Image src={Binance} alt="community image" height={"29px"} width={"29px"}/>&nbsp; </span>
                        Web3bridge
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, editsa consectetur 
                        adipiscing elit ut aliquam, purus sit amet....
                      </p>
                    </div>
                      <BsChevronRight className="h-8 w-8 shrink-0" />
                  </div>
                </SplideSlide>
                <SplideSlide className="max-w-max cursor-pointer">
                  <div className="flex ml-5 justify-between items-center max-w-[400px] border-com p-5 dark:border-[0.25px] border-green-100 rounded-xl bg-white dark:bg-transparent">
                    <div className="shrink-0 hidden md:block">
                      <Image src={Binance} alt="community image" layout="fixed" height={"50px"} width={"50px"}/>
                    </div>
                    <div className="max-w-64 shrink px-2">
                      <h5 className="flex items-center text-blue-400 font-bold dark:text-white">
                        <span  className="md:hidden"><Image src={Binance} alt="community image" height={"29px"} width={"29px"}/>&nbsp; </span>
                        Web3bridge
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, editsa consectetur 
                        adipiscing elit ut aliquam, purus sit amet....
                      </p>
                    </div>
                      <BsChevronRight className="h-8 w-8 shrink-0" />
                  </div>
                </SplideSlide>
                <SplideSlide className="max-w-max cursor-pointer">
                  <div className="flex ml-5 justify-between items-center max-w-[400px] border-com p-5 dark:border-[0.25px] border-green-100 rounded-xl bg-white dark:bg-transparent">
                    <div className="shrink-0 hidden md:block">
                      <Image src={Binance} alt="community image" layout="fixed" height={"50px"} width={"50px"}/>
                    </div>
                    <div className="max-w-64 shrink px-2">
                      <h5 className="flex items-center text-blue-400 font-bold dark:text-white">
                        <span  className="md:hidden"><Image src={Binance} alt="community image" height={"29px"} width={"29px"}/>&nbsp; </span>
                        Web3bridge
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, editsa consectetur 
                        adipiscing elit ut aliquam, purus sit amet....
                      </p>
                    </div>
                      <BsChevronRight className="h-8 w-8 shrink-0" />
                  </div>
                </SplideSlide>
              </SplideTrack>
            </div>
          </Splide>
        </div>
      </div>

      {/* Communties */}
      <div className="mt-32 max-w-screen-xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white                    ">
          Trusted with <span className="text-green-100">50+ Brands</span>
        </h3>
        <div className="mt-3  child:px-2 mx-auto text-center">
          <div className="inline-block"><Image src={BinanceText} alt="brand_image" /></div>
          <div className="inline-block"><Image src={BinanceText} alt="brand_image" /></div>
          <div className="inline-block"><Image src={BinanceText} alt="brand_image" /></div>
          <div className="inline-block"><Image src={BinanceText} alt="brand_image" /></div>
          <div className="inline-block"><Image src={BinanceText} alt="brand_image" /></div>
          <div className="inline-block"><Image src={BinanceText} alt="brand_image" /></div>
          <div className="inline-block"><Image src={BinanceText} alt="brand_image" /></div>
        </div>
      </div>

      {/* Learn More */}
      <div className="mt-24 flex justify-center items-center flex-col">
        <h3 className="font-semibold mb-4 text-2xl text-center text-black dark:text-white">Learn More</h3>
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=JNCzoG1IzoY' 
          controls
        />
      </div>

      {/* FAQs */}
      <div className="mt-24 mb-24">
        <h3 className="font-semibold text-2xl text-center text-black dark:text-white">FAQs</h3>
        <div className="mt-20 max-w-[824px] mx-auto">
          {faqs}
        </div>
      </div>
      <div className="relative">
        {/* <div className="absolute blur-[241px] w-[334px] h-[480px] opacity-50 bg-[rgba(46,200,102,0.2)] left-0 -translate-x-2/4 -translate-y-2/4 " /> */}
        {/* Footer */}
      </div>
    </Layout>
  )
}

export default Home
