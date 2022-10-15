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
import { useModalContext } from "../../hooks/contexthooks";
import { FormClient } from "../../helpers/formClient";


export {
  ImageInput,
  TextInput,
  RadioInput,
}
interface IForm {
  questions: Question[]
}

type IFormInputs = {[key:string]:string}


const Form = ({questions}: IForm) => {
  let schema: {[key: string]: yup.AnySchema} = {}
  questions.forEach(question => {
    schema[question.name] = validationSchemas[
      question?.validation?.toLowerCase() as keyof typeof validationSchemas
    ] ?? validationSchemas["text"]
  })

  const { register, handleSubmit, formState:{ errors }, getValues } = useForm({
    resolver: yupResolver(yup.object(schema).required()),
    mode: "onBlur"
  });

  const [values, setValues] = useState<{[key: string]: string|File}>({});
  const onChange = (key: string) => (value: string|File) => {
    setValues({...values, [key]: value})
  }

  const [ready, setReady] = useState<boolean>(false);
  const [focus, _setFocus] = useState<boolean[]>(Array(6).map(() => false))
  const setFocus = (index: number, value: boolean) => {
    const newFocus = focus.map(() => false)
    newFocus[index] = value;
    _setFocus(newFocus);
  }

  const { show } = useModalContext();

  const onSubmit = async (data: IFormInputs) => {
    show("submitForm", {open: true, progress: "Sending"})
    const status = await FormClient.saveFormData("14LdzeHMNPLVSrTBmmGyR-g6yFOIa6fFfqmDDd4hGLBc", "trest", data)
    if(status === "success"){
      show("submitForm", {open: true, progress: "Sent"})
    }else{
      show("submitForm", {open: true, progress: "Failed", call: () => onSubmit(data)}, )
    }
  }
  const getQuestion = (type: TQuestion, index: number) => {
    const questions = {
      "TEXT":  (props: ITextInput) => <TextInput {...props} 
        focus={focus[index]}
        setFocus={setFocus}
        index = {index}
        //@ts-ignore 
        value={values[props.name] ?? ""}
        //@ts-ignore 
        error={errors[props.name]?.message || ""}
        // valid={errors[props.name] || !values[props.name] ? false : true}
        onChange={onChange(props.name)} 
        register={register}
      />,
      "EMAIL": (props: ITextInput) => <TextInput {...props} 
        focus={focus[index]}
        setFocus={setFocus}
        index={index}
        //@ts-ignore 
        value={values[props.name] ?? ""} 
        //@ts-ignore 
        error={errors[props.name]?.message || ""}
        // valid={errors[props.name] || !values[props.name] ? false : true}
        onChange={onChange(props.name)}
        register={register}
      />,
      "RADIO": (props: IRadioInput) => <RadioInput {...props} setFocus={setFocus}
        index={index} focus={focus[index]}
        register={register}
        //@ts-ignore 
        value={values[props.name]} valid={errors[props.name] || !values[props.name] ? false : true}
        onChange={onChange(props.name)}
      />,
      "IMAGE": (props: IImageInput) => <ImageInput {...props} 
        index={index}
        focus={focus[index]}
        setFocus={setFocus}
        register={register}
        //@ts-ignore 
        value={values[props.name]} valid={errors[props.name] || !values[props.name] ? false : true}
        //@ts-ignore 
        onChange={onChange(props.name)}
      />
    }
    return questions[type];
  }

  const queComponents = questions.map((question, i) => {
    if(i === 0) question.first = true;
    if(i === questions.length-1) question.last = true;
    return <div key={i} className="w-full">
      {// @ts-ignore
      getQuestion(question.type, i)({ 
        ...question, 
      })
      }
    </div>
  })

  useEffect(() => {
    setFocus(0, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(Object.keys(errors).length === 0 && Object.keys(values).length === questions.length){
      const _ready = Object.values(values).reduce((oldValue, currValue) => {
        return oldValue && currValue ? true : false
      }, true)
      setReady(_ready);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, values]);

  return <form className="w-full flex flex-col items-center justify-center mt-[40px] gap-5"
    // @ts-ignore
    onSubmit={handleSubmit(onSubmit)}
  >
    {queComponents}
    <div className="px-[21px] w-full">
      <Submit active={ready} onClick={() => {}}/>
    </div>
    </form>
}

export default Form
