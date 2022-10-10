import ImageInput from "./imageInput";
import TextInput from "./textInput";
import RadioInput from "./radio";
import { IImageInput, IImageInput1, IRadioInput, IRadioInput1, ITextInput, ITextInput1, Question, TQuestion } from "../../types";
import { Submit } from "./buttons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { schemas as validationSchemas } from "./validation-schemas";


export {
  ImageInput,
  TextInput,
  RadioInput,
}
interface IForm {
  questions: Question[]
}

interface IFormInputs {
  firstName: string
  age: number
}


const Form = ({questions}: IForm) => {
  let schema: {[key: string]: yup.AnySchema} = {}
  questions.forEach(question => {
    schema[question.name] = validationSchemas[
      question.validation.toLowerCase() as keyof typeof validationSchemas
    ] ?? validationSchemas["text"]
  })

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(yup.object(schema).required()),
    mode: "onChange"
  });
  
  const [values, setValues] = useState<{[key: string]: string}>({});
  const onChange = (key: string) => (value: string) => {
    setValues({...values, [key]: value})
  }

  const [focus, _setFocus] = useState<boolean[]>(Array(6).map(() => false))
  const setFocus = (index: number, value: boolean) => {
    console.log(index, value)
    const newFocus = focus.map(() => false)
    newFocus[index] = value;
    _setFocus(newFocus);
  }

  const onSubmit = (data: IFormInputs) => console.log(data);
  const getQuestion = (type: TQuestion, index: number) => {
    const questions = {
      "TEXT":  (props: ITextInput) => <TextInput {...props} 
        focus={focus[index]}
        setFocus={setFocus}
        index = {index}
        value={values[props.name] ?? ""} 
        valid={errors[props.name] || !values[props.name] ? false : true}
        onChange={onChange(props.name)} 
        register={register}
      />,
      "EMAIL": (props: ITextInput) => <TextInput {...props} 
        focus={focus[index]}
        setFocus={setFocus}
        index={index}
        value={values[props.name] ?? ""} 
        valid={errors[props.name] || !values[props.name] ? false : true}
        onChange={onChange(props.name)}
        register={register}
      />,
      "RADIO": (props: IRadioInput) => <RadioInput {...props} setFocus={setFocus}
        index={index} 
        value={values[props.name]} valid={errors[props.name] || !values[props.name] ? false : true}
        onChange={onChange(props.name)}
      />,
      "IMAGE": (props: IImageInput) => <ImageInput {...props} 
        value={values[props.name]} valid={errors[props.name] || !values[props.name] ? false : true}
        onChange={onChange(props.name)}
      />
    }
    return questions[type];
  }

  const queComponents = questions.map((question, i) => {
    if(i === 0) question.first = true;
    if(i === questions.length-1) question.last = true;
    return <div key={i} className="max-w-max">
      {// @ts-ignore
      getQuestion(question.type, i)({ 
        ...question, 
      })
      }
    </div>
  })

  useEffect(() => {
    setFocus(0, true)
    console.log("running")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <form className="w-full flex flex-col items-center justify-center mt-[40px] gap-5"
    // @ts-ignore
    onSubmit={handleSubmit(onSubmit)}
  >
      {queComponents}
      <Submit active={false} onClick={() => {}}/>
    </form>
}

export default Form
