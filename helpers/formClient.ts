import axios, { Axios, AxiosResponse } from "axios";

const sheetInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SHEET_API
});

const driveInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DRIVE_API
});

type IReturn = {
  body?: any,
  status: string,
}

class FormClientClass {
  async uploadImage(file: File): Promise<IReturn>{
    const form = new FormData();
    const name = file.name;
    form.append('file', file);
    // campaign pictures id on Google drive
    const id = "1hWOXAR6mB1cxKED6JR_PVqf7RolVj0YY";
    console.log(form, Array.from(form.entries()));

    const call = () => driveInstance.post('upload', form, {
      params: {
        id, name
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return await handleError(call);
  }

  async saveFormData(id: string, title: string, row: {[key:string]: string}): Promise<IReturn>{
    const form = new FormData();
    Object.keys(row).forEach(key => form.append(key, row[key]))
    const call = () => sheetInstance.post("add", form, {
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
      return {
        body: res.data,
        status: "success"
      };
    }else {
      throw new Error(res.statusText)
    }
  }catch(err: any){
    return {
      status: (err.message ?? "Missing error message") as string
    };
  }
}