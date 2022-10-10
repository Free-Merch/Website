import * as yup from "yup";

const twitteRegex = /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/;

export const schemas = {
  "text": yup.string(),
  "twitter": yup.string().matches(twitteRegex),
  "email": yup.string().email()
}
