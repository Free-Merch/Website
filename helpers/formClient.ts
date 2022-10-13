import axios, { Axios, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SHEET_API,
  timeout: 1000
});

class FormClientClass {
  async uploadImage(id: number, index: number, file: File): Promise<string>{
    const form = new FormData();
    form.append('title', "Campaign form image");
    form.append('file', file);

    const call = () => instance.post('upload', form, {
      headers: {
      'Content-Type': 'multipart/form-data'
      }
    });

    return await handleError(call);
  }

  async saveFormData(id: string, title: string, row: {[key:string]: string}): Promise<string>{
    const form = new FormData();
    Object.keys(row).forEach(key => form.append(key, row[key]))
    const call = () => instance.post("add", form, {
      params: {
        id, title
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return await handleError(call);
  }
}

const FormClient  = new FormClientClass();
export {
  FormClient
}

const handleError = async (apiCall: () => Promise<AxiosResponse>) => {
  try{
    const res = await apiCall();
    if(res.status === 200){
      return "success";
    }else {
      throw new Error(res.statusText)
    }
  }catch(err: any){
    return err.message;
  }
}