import Layout from "../components/layout";
import Image from "next/image";

import Diamond from "../assets/pictures/diamond.png";
import Head from "next/head";

const AboutUs = () => {
  return <div className="text-center mx-auto text-base text-blue-400 max-w-5xl dark:text-white">
    <div>
      <Head>
        <title>About Us - Freemerch</title>
        <meta name="description" content="All the information you want about Freemerch" />
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getFreemerch" />
        <meta name="twitter:title" content="All the information you want about Freemerch" />
        <meta name="twitter:description" content="Curious about Freemerch? All the information about how you we can help your brands is right here." 
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/freemerchcloudinary/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1663653009/logo_7c91fc5575_rslzfu.jpg" />
      </Head>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center pt-[74px]">
      <div className="md:w-1/2">
        <Image src={Diamond} alt="diamond" />
      </div>
      <div className="text-center md:text-start  md:w-1/2">
        <h2 className="text-3xl font-semibold  md:text-start">Our Core Solution</h2>
        &nbsp;
        <p>
          Freemerch is helping world-class Tech and Web3 products use merchandise to create awareness, adoption, and reward users.</p>
        &nbsp;
        <p>With pre-existing and expanding partnerships with top Tech and Web3-focused communities, we help bridge the gap between the innovators and users, creating further interest in their campaigns and brand growth.</p>
        &nbsp;
        <p>We create simple, less technical campaigns to give brands desired conversions such as App downloads, testing, social engagements, reviews, and referrals for their platform and products. Participants in these campaigns win merchandise.</p>
        &nbsp;
        <p>This merchandise further helps create more awareness among their peers and excited winners who are encouraged to share their stories on social platforms creating more unique stories and social impacts for Tech and Web3 brands. 
        </p>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div>
      <h2 className="text-3xl font-semibold">How Do We Achieve This?</h2>
      <br />
      <p>We take a creative and relatable approach to distributing merch, creating awareness, adoption, and rewarding existing users while creating unique stories and using merch for social impacts. Here are some of our approaches.</p>
      <br />
      <br />
      <ul className="flex flex-wrap child:rounded-md dark:child:text-white 
        dark:child:bg-transparent child:text-start child:max-w-[500px] 
        flex-row child:mr-2 child:mb-2 text-sm child:p-5 
        child:shadow-[0px_9px_16px_rgba(171,190,209,0.03) child:bg-white
        initiative-small:justify-center  
        "
        >
        <li className="radial-initiative">Host bounties in communities for community members to share a limited number of swags.</li>
        <li className="radial-initiative">Creating and sharing merchandise to support Tech and Web3 Hackathons, conferences, and virtual events delivered at the venue of the event or to their doorstep.</li>
        <li className="radial-initiative">Support facilitators of local events who often times encounter challenges of sponsorship with limited number of crypto shirts</li>
        <li className="radial-initiative">Making social impacts by sharing branded items and merchandise in public centers, branded learning aids for schools, and supporting non-profit events or organizations.</li>
        <li className="radial-initiative">Hosting simple, non-technical bounties both in communities and on our website is open to participation for everyone.</li>
      </ul>
    </div>

    <br /><br /><br /><br /><br /><br />

    <div>
      <h2 className="text-3xl font-semibold">What Value Do We Offer?</h2>
      <br />
      <p>Values for Partners and sponsors.</p>
      <br />
      <ul 
        className="flex flex-wrap child:rounded-md
          child:text-start child:max-w-[353px] 
          flex-row gap-14 child:mb-2 text-sm child:p-5 
          child:shadow-[0px_9px_16px_rgba(171,190,209,0.03) child:bg-white
          justify-center  
          md:justify-start text-blue-400
        "
      >
        <li className=" bg-white">
          <h3 className="text-xl font-semibold">Brand visibility </h3>
          <p>Our shirts and merchandise designs allow inscription on shirts leading to partners preferred social media, community link or search engines.</p>
        </li>
        <li className="radial-initiative">
          <h3 className="text-xl font-semibold">Hosting micro-marketing </h3>
          <p>Hosting micro-marketing tasks such as content writing, meme creation, social media engagements, attending virtual or physical events.</p>
        </li>
        <li className="radial-initiative">
          <h3 className="text-xl font-semibold">Conversion-based Campaigns. </h3>
          <p>From simple to less technical campaigns, get the community involved in Beta-testing, reviews, creating social campaigns, and expanding your communities and users with Merchandise. We help make that happen.</p>
        </li>
        {/* <li className="radial-initiative">
          <p>
            Sponsorship with swags. <br />
            Event publicity and visibility <br /> 
            Social media and micro-marketing bounties.<br />
          </p>
        </li> */}
      </ul>
    </div>

    <br /><br /><br /><br />

    <div>
      <h2 className="text-3xl font-semibold">Why Swags and Merchandise?</h2>
      <br />
      <div>
        <ul
          className="flex flex-wrap child:rounded-md dark:child:text-white 
            dark:child:bg-transparent child:text-start child:max-w-[500px] 
            flex-row child:mr-2 child:mb-2 text-sm child:p-5 
            child:shadow-[0px_9px_16px_rgba(171,190,209,0.03) child:bg-white
            initiative-small:justify-center  
          "
        >
          <li className="radial-initiative">
            For collectors, it serves as proof of participation and active involvement in Blockchain and crypto related activities.
          </li>
          <li className="radial-initiative">
            Oftentimes the drive for people to attend events.
          </li>
          <li className="radial-initiative">
            Provides an easy approach to crypto and general Blockchain Education.
          </li>
        </ul>
      </div>
    </div>

    <br /><br />
  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <AboutUs />
  </Layout>
)

export default NewComponent;
