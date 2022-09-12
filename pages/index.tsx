import { useEffect, useState } from 'react';
// Next imports
import type { NextPage } from 'next'
import Image from 'next/image'

// package imports
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

// imported components
import { WhiteButton, GreenButton } from '../components/buttons';
import Layout from '../components/layout';
import ReactPlayer from "react-player";

// react icons
import { BsChevronRight,  } from "react-icons/bs";
import { CgChevronRightR, CgChevronLeftR } from "react-icons/cg";
import { TbCrown } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";

// pictures
import Gida from "../assets/pictures/gida.png";
import CryptoHills from "../assets/pictures/cryptohillz.jpeg"
import BlockchainOAU from "../assets/pictures/blockchain_oau.jpeg";
import BlockchainBUK from "../assets/pictures/bayero-university1.png"
import ByBit from "../assets/pictures/bybit.svg"
import Rex from "../assets/pictures/Rex.png";
import Playbtn from "../assets/pictures/play.png";
import { ProjectCard, ProjectCardSkeleton } from '../components/cards/project-card';
import useHomePage from '../hooks/useHomePage';
import useBrands from '../hooks/useBrands';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FAQ } from '../types';
import Link from 'next/link';
import { useWindowSize } from '../hooks/useSize';

const Home: NextPage = () => {

  const brands = useBrands();
  const CampaignCards = brands?.map((brand, index) => {
    const { about, logo, campaigns, brand: name, logoBgColor, id } = brand;
    return <ProjectCard  
        brand={name}
        image={logo}
        about={about}
        bgColor={logoBgColor}
        id={id}
        campaigns={campaigns}
        key={index}
      />
  })

  const {width: windowWidth} = useWindowSize();


  const [faqState, setFaqs] = useState<boolean[]>(Array(100).fill(false));
  const { gallery: galleryPics} = useHomePage();
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  
  const faqsText: FAQ[] = [
    {
      question: "What is a branded Merchandise (Swag)?",
      answer: "Branded merchandise also called swags are materials on which companies have placed their identity. These materials can be clothes, books, pens etc."
    },
    {
      question: "What is Freemerch?",
      answer: "FreeMerch is a platform that helps you get free and easy access to branded merchandise. We help brands put themselves out there and help communities and individuals receive free merchandise."
    },
    {
      question: "How can I get branded merch?",
      answer: <span>`If you are a community or individual visit the {<span className='text-green-100'><Link href="/contact-us" >Contact Us</Link></span>} page, select the option that applies and fill out the form. We&apos;ll get back to you as soon as possible.</span>
    },
    {
      question: "How do I patner with Freemerch?",
      answer: <span>Go to the {<span className='text-green-100'><Link href="/contact-us" >Contact Us</Link></span>} page and select the company button, fill the form that pops up and submit it. We&apos;ll get back to you as soon as possible.</span>
    }
]
  const handleSetFaq = (index:number) => {
    const newState = [...faqState];
    newState[index] = !newState[index];
    setFaqs(newState);
  };

  const faqs = faqsText?.map((faq, index) => (
    <div 
      className={`flex
        justify-between mb-[10px]
        rounded-md
      bg-white dark:bg-transparent faq-bg
        py-[11px] 
        px-[31px]
        child:ease-linear
        child:transition-all
        child:duration-300
        shadow-[0_8px_16px_3px_rgb(3, 3, 36)]
      `} key={index}>
      <div className="w-full">
        <h4 className="text-lg cursor-pointer 
          flex justify-between items-center font-semibold
          dark:text-white text-blue-900"
          onClick={() => handleSetFaq(index)} 
        >
          {faq.question}
          <div className={`
              shrink-0
              cursor-pointer 
              relative
              items-center
              inline-flex
              h-[14px]
              w-[14px]
            `}
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
        </h4>
        <p className={`
          text-sm font-normal max-w-[737px]
          ease-linear
          transition-all
          duration-3000
          overflow-hidden
          dark:text-grey-800
          text-grey-300
          ${faqState[index] ? "max-h-80" : "max-h-0" }
        `}>
          <span className='w-full h-[15px] block'></span>
          {faq.answer}
        </p>
      </div>
    </div>
  ));

  const communitiesInfo = [
    { name: "Blockchain OAU", logo: BlockchainOAU, 
      description: "A community of Active Blockchain and Cryptos Lovers sharing knowledge and Opportunities."
    },
    { name: "Gida Academy", logo: Gida, 
      description: "Gida academy is a crypto academy Specializing on spreading Education of Crypto And Blockchain."
    },
    {
      name: "Crypto Hills", logo: CryptoHills, 
      description: "Crypto Hills is a team of professional traders with an easy, consistent and profitable trading method!"
    },
    {
      name: "Blockchain BUK", logo: BlockchainBUK,
      description: "A Blockchain campus Club Educating any determined individual on Blockchain Technology."
    }
  ]

  const communities = communitiesInfo.map( ({name, logo, description}, index) => {
    
    const width = windowWidth <= 760 ? 28 : 50;
    return <SplideSlide key={index} className="max-w-max cursor-pointer h-full items-end align-bottom">
      <div className="flex justify-between mr-4 items-center max-w-[400px] border-com p-5 dark:bg-[#0B1237] rounded-xl bg-white dark:bg-transparent">
        <div className="max-w-64 shrink px-2">
          <h5 className="flex mb-[12px] h-[50px] items-center text-blue-400 font-bold dark:text-white">
            <span className="md:mr-3 mr-[3px] inline-flex justify-center items-center"><Image className='rounded' src={logo} alt="community image" 
              height={`${(logo.height/logo.width)* width}px`} 
              width={`${width}px`}/>&nbsp; </span>
            <span>{name}</span>
          </h5>
          <p className='brand-text'>
            {description}
          </p>
        </div>
          <BsChevronRight className="h-8 w-8 shrink-0" />
      </div>
    </SplideSlide>
  }
  )

  const galleryHeights = ["h-[275px]", "h-[243px]", "h-[222px]", "h-[222px]", "h-[243px]", "h-[275px]"];
  const gallery = galleryPics?.map(({ alternativeText, url }, index) => (
    <SplideSlide className="max-w-max mr-4" key={index}>
      <div className={`${galleryHeights[index]} w-[193px]`}>
      <Image src={url} alt={alternativeText} className="rounded-[10px]" layout="fill" objectFit='cover'/>
      </div>
    </SplideSlide>
  ))

  const gallerySkeleton = Array(6).fill(0).map( ( _, index ) => (
    <SplideSlide className="max-w-max" key={index}>
      <div className={`mr-4 w-[193px] ${galleryHeights[index]}`}>
      <Skeleton containerClassName='w-full h-full' className='w-full h-full' />
      </div>
    </SplideSlide>
  ));

  const faqSkeleton = Array(4).fill(0).map((_, index) => (
    <div key={index} className="w-[700px] h-[50px] mb-2 mx-auto"><Skeleton containerClassName='w-full h-full' className='w-full h-full' /></div>
  ))

  const ProjectCardSkeletons = [<ProjectCardSkeleton key={1}/>, <ProjectCardSkeleton key={2} />, <ProjectCardSkeleton key={3} />]

  return (
    <Layout className="h-full overflow-hidden bg-grey-100 dark:bg-blue-900 py-10 px-[12px] md:px-24 text-sm text-grey-300 dark:text-grey-400 overflow-y-hidden">
      {/* bg ellipses */}
      {/* <div className="absolute blur-[241px] w-[334px] h-[480px] opacity-50 bg-[rgba(22, 124, 186, 0.3)] right-0 top-4 z-10" /> */}
      <div className='flex flex-wrap justify-center sm:justify-between mx-auto pt-[51px]'>
        <div className="text-start xl:w-2/4 mt-2 md:mt-32 ">
          <h1 className="text-[40px] leading-[44px] md:text-6xl font-semibold text-green-100 max-w-[800px]">
            <span className="dark:text-white text-blue-400">Get Access</span> to Free Swag
          </h1>

          <p className="my-[30px] max-w-[700px] font-normal text-[14px] md:text-[20px] leading-[20px] md:leading-[28px]">
            Using Merchandise to create awareness, encourage adoption and reward existing users of tech/web3 products and solutions
          </p>
          
          <div className="flex w-full max-w-max justify-start flex-wrap">
            <GreenButton href="/campaigns" className="mr-6 mb-4">Get Merch</GreenButton>
            <a href="#Learn-More" className="flex items-center -translate-y-[10px]">
              <button className="flex items-center">
                <Image src={Playbtn} alt="play"/> 
                &nbsp; Learn More
              </button>
            </a>
          </div>
        </div>
        <div className={`flex justify-end relative hero-small:mx-auto w-[314px] h-[397px] sm:w-[377px] sm:h-[476px]`}>
          <div className="bg-green-100 absolute h-3/4 rounded-md bottom-0 w-full"></div>
          <Image alt="swag-human" src={Rex} layout="fill"/>
        </div>
      </div>

      {/* Recent Campaigns */}
      <div className="md:space-x-4 text-center rouded-lg mt-[100px]">
        <div className="my-12 md:w-2/3 mx-auto text-center mb-[50px]">
          <h2 className="font-semibold text-green-100 text-3xl mb-[20px]">Ongoing Campaigns</h2>
          <p>
            Participate in any of the ongoing campaigns to win yourself free merch from world-class brands. Merch is priceless.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          { CampaignCards || ProjectCardSkeletons }
        </div>
        <p className="text-center mt-20">
          <GreenButton href="/campaigns" className="mt-6">See All Campaigns</GreenButton>
        </p>
      </div>

      <div className="ellipsis relative">
        <div className="absolute blur-[241px] w-[334px] h-[480px] opacity-50 bg-[#298A63] left-0 -translate-x-2/4 " />
      </div>

      {/* About Us */}
      <div className="max-w-screen-lg mt-[100px] text-center mx-auto">
        <h3 className=" font-semibold text-green-100 text-3xl mb-[20px]">About Us</h3>
        <p>
          Freemerch is a platform that helps brands create a unique voice by leveraging social impact, gen-z and millennial relatable campaigns. 
          Thereby creating awareness, adoption for leading tech and web3 solutions, bringing their products closer to users and communities.
        </p>
      </div>

      {/* Contact Info */}
      <div className="relative mt-[100px] flex justify-center gap-x-20 gap-y-8 lg:flex-nowrap flex-wrap max-w-screen-xl mx-auto">
        <div className="ellipsis absolute blur-[241px] w-[421px] h-[479px] opacity-50 bg-[#298A63] left-0 -translate-x-3/4 translate-y-1/4" />
        <div className="
          drop-shadow-[0_9px_16px_rgba(171,190,209,0.03)]
          dark:border-[0.5px] grow-0  dark:border-white max-w-[581px] 
          bg-grey-200 bg-silver px-[27px] py-[14px]  sm:px-[47px] sm:pt-[49px] md:pb-[25px] rounded-xl max-h-min">
          <div className="rounded-full sm:w-12 sm:h-12 w-8 h-8 dark:bg-white bg-blue-900 flex justify-center items-center">
            <TbCrown className="fill-white sm:w-6 sm:h-6 w-[14px] h-[14px] dark:fill-blue-900 md:w-6 md:h-6 text-white dark:text-blue-900"/>
          </div>
          <h3 className="my-3 font-semibold sm:text-3xl text-lg text-blue-900 dark:text-white">Company</h3>
          <p className="text-xs md:text-lg text-[#7A797D] font-normal">
            Sell out your solutions in a more relatable, user-oriented and fun way. Create unique stories and social impact with your merchandise. 
          </p>
            <WhiteButton className="mt-6">Contact</WhiteButton>
        </div>

        <div className="
          dark:border-[0.5px] grow-0 dark:border-white max-w-[581px] bg-grey-200 bg-silver px-[27px] py-[14px] sm:px-[47px] sm:pt-[49px] md:pb-[25px] rounded-xl lg:translate-y-20
          drop-shadow-[0_9px_16px_rgba(171,190,209,0.03)]
          ">
          <div className=" rounded-full sm:w-12 sm:h-12 w-8 h-8 dark:bg-white bg-blue-900 flex justify-center items-center">
            <TiStarFullOutline className="fill-white dark:fill-blue-900 sm:w-6 sm:h-6 w-[14px] h-[14px]"/>
          </div>
          <h3 className="my-3 font-semibold sm:text-3xl text-lg text-blue-900 dark:text-white">Community / Individual</h3>
          <p className="text-xs md:text-lg text-[#7A797D] font-normal">
            Like what we do? Want free merch or would like to speak with our team? Reach out to us now. We are waiting to hear from you.
          </p>
            <WhiteButton className="mt-6">Contact</WhiteButton>
        </div>
        <div className="ellipsis absolute blur-[241px] w-[421px] h-[479px] opacity-50 bg-[#298A63] right-0 translate-x-3/4 translate-y-1/4" />
      </div>
      
      {/* Gallery */}
      <div >
        <h3 className="font-semibold text-4xl text-center text-blue-900 dark:text-white mt-[180px] mb-[20px]">Gallery</h3>
        <div className="flex items-end mx-auto w-full space-x-1 justify-between max-w-screen-xl ">
          <Splide 
            draggable={true}
            aria-labelledby="Gallery" hasTrack={false} options={{pagination:false, gap: 18}} className="w-full">
            <div className="relative md:static mt-20 md:mt-0 w-full">
              <div className="splide__arrows absolute top-1/2 -translate-y-1/2 md:relative w-full md:w-20 md:ml-auto flex items-center justify-between h-0 z-[5] md:justify-end">
                <button className="splide__arrow splide__arrow--prev w-5 
                    h-5 cursor-pointer absolute left-1">
                  <BiChevronLeftCircle className="md:hidden text-xl" />
                  <CgChevronLeftR className="hidden md:inline-block text-xl" />
                </button>
                <button className="splide__arrow splide__arrow--next w-5 
                    h-5 cursor-pointer absolute right-1">
                  <BiChevronRightCircle className="md:hidden text-xl"  />
                  <CgChevronRightR className="hidden md:inline-block text-xl" />
                </button>
              </div>
              <SplideTrack className="md:mt-20 child:flex child:items-end">
                { gallery || gallerySkeleton }
              </SplideTrack>
            </div>
          </Splide>
        </div>
      </div>

      {/* Communities */}
      <div className="mt-[100px] relative mx-auto">
        <h4 className="text-3xl font-semibold text-blue-400 dark:text-white">Communities</h4>
        <div className="mx-auto relative">
          <Splide aria-labelledby="Communities Slideshow" hasTrack={false} options={{pagination:false}}>
            <div className="static mt-[69px]">
              <span className="splide__arrows top-[-88px] -translate-y-1/2 relative w-20 ml-auto flex items-center h-0 z-[5] justify-end">
                <button className="splide__arrow splide__arrow--prev w-5 
                    h-5 cursor-pointer absolute left-1 show">
                  <CgChevronLeftR className="inline-block text-xl" />
                </button>
                <button className="splide__arrow splide__arrow--next w-5 
                    h-5 cursor-pointer absolute right-1 show">
                  <CgChevronRightR className="inline-block text-xl" />
                </button>
              </span>

              <SplideTrack className="items-end">
                {communities}
              </SplideTrack>
            </div>
          </Splide>
        </div>
        <div className="ellipsis absolute blur-[241px] w-[334px] h-[480px] opacity-50 
          bg-[#298A63] -left-96 -translate-y-3/4 " />
      </div>

      {/* Trusted */}
      <div className="mt-[100px] relative max-w-screen-xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-blue-900 dark:text-white                    ">
          Trusted by 
          {/* these <span className="text-green-100">brands</span> */}
        </h3>
        <div className="mt-5 child:max-w-[120px] md:child:max-w-[200px] child:px-2 mx-auto text-center">
          <div className="inline-block"><Image src={ByBit} alt="brand_image" /></div>
        </div>
        <div className="ellipsis absolute blur-[241px] w-[334px] h-[480px] opacity-50 
          bg-[#298A63] -right-96 -translate-y-3/4" />
      </div>

      {/* Learn More */}
      <div className="mt-[100px] flex justify-center items-center flex-col" id="Learn-More">
        <h3 className="font-semibold mb-[50px] text-2xl text-center text-blue-900 dark:text-white ">Learn More</h3>
        <div className="h-[360px] w-full max-w-[640px]">
          {/* relative pt-[56.25%] */}
          {hasWindow && <ReactPlayer 
            url='https://youtu.be/vsODeBWNPd4' 
            controls
            width="100%"
            height="100%"
          />}
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-24 mb-24 relative">
          <div className="ellipsis absolute blur-[241px] w-[334px] h-[480px] opacity-50 
          bg-[#298A63] -left-40 -top-0 -translate-y-4/4 " />
        <h3 className="font-semibold text-2xl text-center text-blue-900 dark:text-white ">FAQs</h3>
          <div className="ellipsis absolute blur-[241px] w-[334px] h-[480px] opacity-50 
          bg-[#298A63] -right-40 -top-0 -translate-y-4/4 " />
        <div className="mt-8 max-w-[824px] mx-auto">
          { faqs ||  faqSkeleton }
        </div>
      </div>
    </Layout>
  )
}

export default Home
