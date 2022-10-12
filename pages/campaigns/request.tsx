import Layout from "../../components/layout";
import Image from "next/image";
import Form from "../../components/form";
import { Question, TQuestion } from "../../types";
import formImages from "../../components/form/formImages";
import { text } from "node:stream/consumers";

{/* <TextInput
        title="Email"
        description=""
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

      <NumberInput
        title="Bybit uid"
        description="You can find it on your profile page. Select your profile button at the top left of the app to to your profile page."
        placeholder="Bybit uid"
        first={false}
        titleLink="https://"
      ></NumberInput>

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

      /> */}

const data: Question[] = [
  {type: TQuestion.TEXT, title: "Email", description: "Input your correct address for contact", placeholder: "Email",
    image: formImages["email"], name: "email",
    required: true,
    validation: "EMAIL",
  },
  { 
    type: TQuestion.TEXT, title: "Follow on Twitter", 
    description: "Please provide your Twitter profile url with your username. It must have at least 30 followers and show human activity. You must have followed us on Twitter.",
    placeholder: "https://twitter.com/getfreemerch", titleLink: "https://twitter.com/getfreemerch",
    image: formImages["twitter"], name: "twitter",
    required: false, validation: "TWITTER"
  },
  // {
  //   type: TQuestion.NUMBER, title: "Bybit uid", 
  //   description: "You can find it on your profile page. Select your profile button at the top left of the app to to your profile page.",
  //   placeholder: "114567",
  //   titleLink: "https://www.bybit.com/en-US/"
  // },
  {
    type: TQuestion.IMAGE, title: "Deposit Proof",
    description: "Please provide a screenshot like the one below showing either your P2P trading or deposit history of at least $10.",
    sample: "https://res.cloudinary.com/nonseodion/image/upload/v1664461952/eQnFS5BvowhmHUV3xUffTnNoVb8UvM1VMDMiPJsjL5e6heAruXMr8KJHpmDpzD_8PkrqNhEhICnJ07Y6VvDQPJ5it5JQv3I2saMtIyfu2vJ1fWTe_N1NzcMGOLhTb4w9PQ_w591_iliqee.jpg",
    name: "deposit-proof", validation: "IMAGE"
  },
  {
    type: TQuestion.RADIO, title: "Shirt size", name: "shirt-size", validation: "TEXT",
    description: "", radioTexts: ["XS", "S", "M", "L", "XL", "XXL"],
  }
]

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

    <Form questions={data} />
  </div>
}

const NewComponent = () => (
  <Layout className="h-full bg-grey-100 dark:bg-blue-900 py-10 px-[12px] text-sm md:px-24 text-grey-300 dark:text-grey-400 overflow-y-hidden">
    <Request />
  </Layout>
);

export default NewComponent;