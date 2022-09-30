import axios, { Axios, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.PUBLNEXT_PUBLIC_SHEET_API,
  timeout: 1000
});

export class FormClient {
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

  async saveFormData(id: number, index: number, row: {string: string}): Promise<string>{
    const call = () => instance.post("update", JSON.stringify(row), {
      params: {
        id, index
      }
    });

    return await handleError(call);
  }
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