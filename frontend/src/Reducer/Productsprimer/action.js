
import axios from "axios"
import {productsreq,productsucc,productfail} from "../Productsprimer/actionType"


const url=process.env.REACT_APP_Url

const getprimerdatareq=()=>{
    return {type:productsreq}
}
const getprimerdatasucc=(payload)=>{
    return {type:productsucc,payload}
}
const getprimerdatafail=()=>{
    return {type:productfail}
}
export const getprimerdata=(obj)=>(dispatch)=>{
dispatch(getprimerdatareq())
console.log(obj,"object coming","url",url)
axios.get(`${url}/products/all?limit=8&page=${1}`,obj).then((res)=>{
    // console.log(res.data)
    dispatch(getprimerdatasucc(res.data))
}).catch((err)=>{
    console.log(err)
dispatch(getprimerdatafail())
})
}