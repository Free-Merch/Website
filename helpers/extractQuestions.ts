import { IImageInput, IRadioInput, ITextInput, Question, TQuestion } from "../types"

const extractText = (question: any): ITextInput => {
  const {title, description, placeholder, required, validation, index, titleLink, name} = question;

  return{
    type: TQuestion.TEXT, title, description, placeholder,
    name, required, 
    validation, index, titleLink,
  }
}

const extractImage = (question: any): IImageInput => {
  const {title, description, required, validation, index, titleLink, name, samples} = question;
  let sample = samples.data[0].attributes;
  sample = sample

  return{
    type: TQuestion.IMAGE, title, description,
    sample, name, required, 
    validation, index, titleLink,
  }
}

const extractRadio = (question: any): IRadioInput => {
  const {title, description, required, validation, index, titleLink, name, radioOptions} = question;

  return{
    type: TQuestion.RADIO, title, description,
    name, required, 
    validation, index, titleLink,
    radioTexts: radioOptions
  }
}


const questionExtractors = {
  text: extractText,
  image: extractImage,
  radio: extractRadio,
}

export const extractQuestions = (questions: {[key:string]: any[]}) => {
  const extractedQuestions: Question[] = [];
  Object.entries(questionExtractors).forEach(([type, extractor]) => {
    questions[type].forEach(question => {
      extractedQuestions.push(extractor(question))
    })
  })

  return extractedQuestions.sort((a, b) => {
    return a.index < b.index ? -1 : 1
  })
}