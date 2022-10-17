import {HiOutlineMail} from "react-icons/hi";
import {BsTwitter} from "react-icons/bs";

const formImages = {
  "twitter": (className: string) => <BsTwitter className={`${className}`}/>,
  "email": (className: string) => <HiOutlineMail className={`${className}`}/>
}

export default formImages;