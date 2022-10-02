import Layout from "../../components/layout";
import {HiOutlineMail} from "react-icons/hi";
import {BsTwitter} from "react-icons/bs";
import Image from "next/image";
import { ImageInput, TextInput, RadioInput } from "../../components/form";

const Request = () => {
  return <div>
    <div className="w-full flex justify-center items-center bg-blue-400 h-[120px]">
      <div className="w-[113px] h-[30px] relative">
        <Image 
          layout="fill"
          src={"https://res.cloudinary.com/nonseodion/image/upload/v1659201113/T1_WHA_Gs5_W_Ze_P_Qej_N_Sqqrx_Zah4uh_Bv_Yr698n_TC_Fh_X_Mj_M_Zo5o_S_Coko5y_W2wtme_O1_Cl_RU_0bf759f08b.png"}
          alt="logo"
        />
      </div>
    </div>
    
    <div></div>

    <form className="w-full flex flex-col justify-center mt-[40px] gap-5">
      <TextInput
        title="Email"
        description="Input your correct address for contact"
        image={(className: string) => <HiOutlineMail className={`${className}`}/>}
        placeholder="Email"
        first={true}
      ></TextInput>

      <TextInput
        title="Follow On Twiiter"
        description="Please provide your Twitter profile url with your username. It must have at least 30 followers and show human activity. You must have followed us on Twitter."
        image={(className: string) => <BsTwitter className={`${className}`}/>}
        placeholder="Twitter username"
        first={false}
        titleLink="https://"
      ></TextInput>

      <ImageInput 
        title="Deposit Proof"
        description="Please provide a screenshot like the one below showing either your P2P trading or deposit history of at least $10."
        image={(className: string) => <BsTwitter className={`${className}`}/>}
        first={false}
        sample="https://res.cloudinary.com/nonseodion/image/upload/v1664461952/eQnFS5BvowhmHUV3xUffTnNoVb8UvM1VMDMiPJsjL5e6heAruXMr8KJHpmDpzD_8PkrqNhEhICnJ07Y6VvDQPJ5it5JQv3I2saMtIyfu2vJ1fWTe_N1NzcMGOLhTb4w9PQ_w591_iliqee.jpg"
      />

      <RadioInput 
        title="Shirt size"
        description=""
        first={false}
        radioTexts={
          ["XS", "S", "M", "L", "XL", "XXL"]
        }
      />
    </form>
  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Request />
  </Layout>
);

export default NewComponent;