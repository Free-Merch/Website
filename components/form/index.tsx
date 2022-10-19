import ImageInput from "./imageInput";
import TextInput from "./textInput";
import RadioInput from "./radio";
import LockLight from "../../assets/svgs/filelock_light.svg"
import LockDark from "../../assets/svgs/filelock_dark.svg"
import { Question } from "../../types";
import { Submit } from "./buttons";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { schemas as validationSchemas } from "./validation-schemas";
import { useModalContext, useThemeContext } from "../../hooks/contexthooks";
import { FormClient } from "../../helpers/formClient";
import getQueComponent from "../../helpers/getQueComponent";
import { Button } from "../buttons";
import Image from "next/image";

export {
  ImageInput,
  TextInput,
  RadioInput,
}
interface IForm {
  questions: Question[]
  id: string,
  name: string
  active: boolean
}

type IFormInputs = {[key:string]:string}


const Form = ({questions, id, name, active}: IForm) => {
  let schema: {[key: string]: yup.AnySchema} = {}
  questions.forEach(question => {
    schema[question.name] = validationSchemas[
      question?.validation?.toLowerCase() as keyof typeof validationSchemas
    ] ?? validationSchemas["text"]
  })

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(yup.object(schema).required()),
    mode: "onBlur"
  });
  
  const [values, setValues] = useState<{[key: string]: string}>({});
  const onChange = (key: string) => (value: string) => {
    setValues((_values) => { return {..._values, [key]: value}})
  }

  const [ready, setReady] = useState<boolean>(false);
  const [focus, _setFocus] = useState<boolean[]>(Array(6).map(() => false))
  const setFocus = (index: number, value: boolean) => {
    const newFocus = focus.map(() => false)
    newFocus[index] = value;
    _setFocus(newFocus);
  }

  const { show } = useModalContext();
  const {theme} = useThemeContext();

  const onSubmit = async (data: IFormInputs) => {
    show("submitForm", {open: true, progress: "Sending"})
    const {status} = await FormClient.saveFormData(id, name, values)
    if(status === "success"){
      show("submitForm", {open: true, progress: "Sent"})
    }else{
      show("submitForm", {open: true, progress: "Failed", call: () => onSubmit(data)}, )
    }
  }

  const queComponents = questions.map((question, i) => {
    if(i === 0) question.first = true;
    if(i === questions.length-1) question.last = true;
    return <div key={i} className="w-full">
      {
        getQueComponent({
          type: question.type, index: i, 
          focus, setFocus, values, onChange,
          register, errors: errors as unknown as { [key: string]: {message: string} }
        })(question)
      }
    </div>
  })

  useEffect(() => {
    if(active){
      setFocus(0, true)
    }
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

  return <form className={`${!active && ""} w-full relative  mt-[40px] `}
    onSubmit={handleSubmit(onSubmit)} 
  >
    <div className="absolute -left-[1000px]  h-full -right-[1000px] bg-[#ffffff] dark:bg-blue-400 z-[5] opacity-40">
    </div>
    <div className="absolute  items-center h-full z-[6] w-full flex flex-col justify-center blur-none">
      <Image src={theme === "dark" ? LockDark : LockLight} alt="file_locked" />
      <p className="my-[20px] font-semibold text-blue-400 dark:text-white text-xl">Campaign completed</p>
      <Button href="/campaigns" className="dark:bg-black-200 border-green-200 border text-green-200 px-[51px] py-[14px] bg-white font-medium">View Other Tasks</Button>
    </div>
    <div className="blur-[2px] gap-5 flex flex-col items-center justify-center shadow-[0px_9px_16px_rgba(171,190,209,0.03)]">
      {!active && <div className="mt-[20px]"></div>}
      {queComponents}
      {active && <div className="px-[21px] w-full">
        <Submit active={ready} onClick={() => {}}/>
      </div>}
    </div>
  </form>
}

export default Form
