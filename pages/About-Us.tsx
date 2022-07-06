import Layout from "../components/layout";
import Image from "next/image";

import Diamond from "../assets/pictures/diamond.png";

const AboutUs = () => {
  return <div className="text-center mx-auto text-base text-blue-400 max-w-5xl dark:text-white">
    <div>
      <h1 className="text-3xl font-semibold">About Us</h1>
      <br />
      <p>
        Africans and Nigerians over the years have demonstrated unweaving support for adoption of Blockchain, Cryptocurrency and metaverse with several communities established across different zones, regions and countries all saddled with the responsibilities of education.
      </p>
      &nbsp;
      <p>
        From experience, <span className="text-green-100">Africans, just like non-fungible tokens,</span> have so much interest in <span className="text-green-100">Crypto Merchandise</span> and swags such as shirts, books and other gift items and are proud to own as many as possible. It is discovered that they are ready to engage in micro- marketing tasks for projects and learn more when there are swags.
      </p>
      &nbsp;
      <p>These merchandise further help create more awareness among their peers and give them a perception of being crypto inclined. For several more reasons like this, Africans love shirts.</p>
    </div>

    <br />
    <br />

    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2">
        <Image src={Diamond} alt="diamond" />
      </div>
      <div className="text-center md:text-start  md:w-1/2">
        <h2 className="text-3xl font-semibold  md:text-start">Our Core Solution</h2>
        &nbsp;
        <p>Get free crypto merchandise is a program directed at reaching out previously existing networks of Africans and crypto enthusiasts by creating easy, Non-complex crypto bounties for community members to get free crypto merchandise for sponsoring brands thereby creating value end to end.</p>
        &nbsp;
        <p>Our goal is to sensitize the Nigeria community through inscriptions on shirts that informs their subconsciousness about why Cryptocurrency is not a scam and inscriptions that further enlighten the public about the new technology and other opportunities in it. </p>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div>
      <h2 className="text-3xl font-semibold">How Do We Achieve This?</h2>
      <br />
      <p>Our initiative is keen to further ammonizing the power of pre-existing crypto communities and offer them support thereby creating a larger network.</p>
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
        <li className="radial-initiative">Support Hackathon, Crypto-conferences host and virtual events with shirts, swags and merchandise for their participants delivered at the venue of the event or to their doorstep.</li>
        <li className="radial-initiative">Host bounties in communities for community members to share a limited number of swags.</li>
        <li className="radial-initiative">Support facilitators of local events who often times encounter challenges of sponsorship with limited number of crypto shirts</li>
        <li className="radial-initiative">Books distributions to schools with Crypto theme or fun-based and relatable education contents or quotes for teenagers.</li>
        <li className="radial-initiative">Branded health aids for hospitals and possible healthcare centers.</li>
        <li className="radial-initiative">Host bounties on our website for Crypto shirts and swags.</li>

      </ul>
    </div>

    <br /><br /><br /><br /><br /><br />

    <div>
      <h2 className="text-3xl font-semibold">What Value Do We Offer?</h2>
      <br />
      <p>Values for Partners and sponsors.</p>
      <br />
      <ul 
        className="flex flex-wrap child:rounded-md dark:child:text-white 
          dark:child:bg-transparent child:text-start child:max-w-[353px] 
          flex-row child:mr-2 child:mb-2 text-sm child:p-5 
          child:shadow-[0px_9px_16px_rgba(171,190,209,0.03) child:bg-white
          justify-center  
          md:justify-start 
        "
      >
        <li className="radial-initiative">
          <h3 className="text-xl font-semibold">Brands visibility </h3>
          <p>Our shirts and merchandise designs allow inscription on shirts leading to partners preferred social media, community link or search engines.</p>
        </li>
        <li className="radial-initiative">
          <h3 className="text-xl font-semibold">Hosting micro-marketing </h3>
          <p>Hosting micro-marketing tasks such as content writing, meme creation, social media engagements, attending virtual or physical events.</p>
        </li>
        <li className="radial-initiative">
          <p>
            Sponsorship with swags. <br />
            Event publicity and visibility <br /> 
            Social media and micro-marketing bounties.<br />
          </p>
        </li>
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
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-10 md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <AboutUs />
  </Layout>
)

export default NewComponent;
