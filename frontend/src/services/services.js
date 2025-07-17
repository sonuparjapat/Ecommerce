import axios from "axios";

const hostname = window.location.hostname;
const baseURL =
  hostname == "localhost"
    ? "http://localhost:8080"
    : hostname == "devadmin.skart-express.com"
    ? "https://devapiv2.skart-express.com/api/v1"
    : "https://apiv2.skart-express.com/api/v1";
    // console.log(process.env.Node_ENV,"env")

const path1 = "/admin";

axios.defaults.withCredentials = true;
// common request for get

export const commongetrequest=async(endpoint,params)=>{
  if(params){
try {
  const response = await axios.get(baseURL + `/${endpoint}`,params);
  return response;
} catch (err) {
 if (err?.response?.status == 401 && endpoint !== "auth/verify/1") {
   window.location.href = "/";
 }
 return err;
}
  }else{
    try {
      const response = await axios.get(baseURL + `/${endpoint}`);
      return response;
    } catch (err) {
       if (err?.response?.status == 401 && endpoint !== "auth/verify/1") {
         window.location.href = "/";
       }
       return err;
    }
  }
  
}
export const commonputrequest=async(endpoint,obj)=>{
  try{
const response=await axios.put(baseURL+`/${endpoint}`,obj)
return response
  }catch(err){
   if (err?.response?.status == 401 && endpoint !== "auth/verify/1") {
     window.location.href = "/";
   }
   return err
  }
}
export const commonpatchrequest = async (endpoint, obj) => {
  if(obj){
  try {
    const response = await axios.patch(baseURL + `/${endpoint}`, obj);
    return response;
  } catch (err) {
    if (err?.response?.status == 401 && endpoint !== "auth/verify/1") {
      window.location.href = "/";
    }
    return err;
  }
  }else{
      try {
        const response = await axios.patch(baseURL + `/${endpoint}`);
        return response;
      } catch (err) {
        if (err?.response?.status == 401 && endpoint !== "/auth/verify/1") {
          window.location.href = "/";
        }
        return err;
      }
  }

};