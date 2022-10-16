import { FieldValues, UseFormRegister } from "react-hook-form";
import { ImageInput, RadioInput, TextInput } from "../components/form";
import { IImageInput, IRadioInput, ITextInput, Question, TQuestion, TQuestionInput } from "../types";

interface IGetQuestion {
  index: number, focus: boolean[], 
  setFocus: (i:number, value: boolean)=>void, values: { [key: string]: string },
  onChange: (n: string) =>(n: string) => void, errors: { [key: string]: {message: string} }
  register: UseFormRegister<FieldValues>
}

const getQueComponent = (
  {
    type,
    index,
    focus,
    values,
    setFocus,
    onChange,
    register,
    errors
  } : {type: TQuestion} & IGetQuestion
  ): (props: TQuestionInput[typeof type]) => JSX.Element => {

  const questions = {
    "TEXT":  (props: ITextInput) => <TextInput {...props} 
      focus={focus[index]}
      setFocus={setFocus}
      index = {index} 
      value={values[props.name] ?? ""}
      error={errors[props.name]?.message || ""}
      onChange={onChange(props.name)} 
      register={register}
    />,
    "RADIO": (props: IRadioInput) => <RadioInput {...props} setFocus={setFocus}
      index={index} focus={focus[index]}
      register={register}
      value={values[props.name]} 
      onChange={onChange(props.name)}
    />,
    "IMAGE": (props: IImageInput) => <ImageInput {...props} 
      index={index}
      focus={focus[index]}
      setFocus={setFocus}
      register={register}
      value={values[props.name]} 
      onChange={onChange(props.name)}
    />
  }

  // @ts-ignore
  return questions[type];
}


export default getQueComponent