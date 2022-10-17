import * as yup from "yup";

// custom checks
const checkImageTypes = (files?: File[]) => {
  const types = ["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"];
  let valid = true;
  files?.forEach(file => {
    if(!types.includes(file.type)) valid = false;
  })
  return valid;
}

const checkFileSizes = (size: number) => (files?: File[]) => {
  let valid = true;
  files?.forEach(file => {
    if(file.size > size) valid = false;
  })
  return valid;
}

// regexes
const twitterProfileRegex = /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))|^$/;
const twitterPost = /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/;
const username = /@[a-zA-Z0-9_]+/;

const imageValidation = yup.string().test({
  name: "type-check", 
  message:"This image type is not supported", 
  test: (s) => { return(checkImageTypes())}
})

yup.object().shape({
    files: yup.array()
      .test({
        name: "type-check", 
        message:"This image type is not supported", 
        test: checkImageTypes
      })
      .test({
        name: "size-check",
        message: "This image is larger than 5MB",
        test: checkFileSizes(52)
      })
  })

export const schemas = {
  "text": yup.string(),
  "twitterProfileURL": yup.string().matches(twitterProfileRegex),
  "username": yup.string().matches(username),
  "twitterPost": yup.string().matches(twitterPost),
  "email": yup.string().email(),
  "image": imageValidation
}
