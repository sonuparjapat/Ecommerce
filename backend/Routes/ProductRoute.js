const express=require("express")
const { productRouter } = require("./userProductRoute")
const { allproducts } = require("../Models/AllProducts")
const { cardModal } = require("../Models/Cards")
const allproductRoute=express.Router()

function checkType(data) {
    if (Array.isArray(data)) return "arr";
    else if (typeof data === 'object' && data !== null) return "obj";
    else return "na";
}

allproductRoute.post("/addcard", async (req, res) => {
    const { data,limit } = req.body;

    try {
        const type = checkType(data);

        if (type === "obj") {
            // ✅ Single object → replace latest 1 record
            const old = await cardModal.find().sort({ _id: -1 }).limit(1);
            if (old.length) {
                await cardModal.deleteOne({ _id: old[0]._id });
            }
            await cardModal.insertOne({ link: data });
            return res.status(201).json({ msg: "Replaced latest record with single data." });
        } 
        
        else if (type === "arr") {
            let limit =limit||4;  // example limit
            let trimmedData = data.slice(0, limit); // ✅ cut to max limit

            // ✅ Replace only as many records as trimmedData.length
            const old = await cardModal.find().sort({ _id: -1 }).limit(trimmedData.length);
            const ids = old.map(item => item._id);
            if (ids.length) {
                await cardModal.deleteMany({ _id: { $in: ids } });
            }

            const newData = trimmedData.map(item => ({ link: item }));
            await cardModal.insertMany(newData);
            return res.status(201).json({ msg: `Replaced last ${trimmedData.length} records.` });
        } 
        
        else {
            return res.status(400).json({ msg: "Invalid data provided." });
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server error", error: err.message });
    }
});
allproductRoute.get("/getcards",async(req,res)=>{
    try{
const data=await cardModal.find()
if(data?.length>=1){
    res?.status(200)?.json({msg:"carddata",data})
}else{
    return res?.status(204)?.json({msg:"No data found",data:[]})
}

    }catch(err){
        res?.status(500)?.json({msg:err})
    }
})

allproductRoute.post("/addall",async(req,res)=>{
try{
await allproducts.insertMany(req.body)
res.status(200).send({msg:"products added"})
}catch(err){
    res.status(400).send({msg:"something going wrong"})
}
})
allproductRoute.delete("/deleteall",async(req,res)=>{
    try{
    await allproducts.deleteMany()
    res.status(200).send({msg:"allproducts deleted"})
    }catch(err){
        res.status(400).send({msg:"something going wrong"})
    }
    })

allproductRoute.get("/all", async (req, res) => {
    const { limit = 10, page = 1, range, discountrange, productbrand } = req.query;
    const allquery = {};

    if (productbrand) {
        allquery.productbrand = { $in: Array.isArray(productbrand) ? productbrand : [productbrand] };
    }
    if (range) {
        allquery.range = { $in: Array.isArray(range) ? range : [range] };
    }
    if (discountrange) {
        allquery.discountrange = { $in: Array.isArray(discountrange) ? discountrange : [discountrange] };
    }



    const skipCount = (Number(page) - 1) * Number(limit);
    const data = await allproducts.find(allquery).skip(skipCount).limit(Number(limit));

    res.status(200).json({ msg: "success", data });
});
allproductRoute.get("/single/:id",async(req,res)=>{
  const {id}=req.params
  
   
    
       try{

        const data=await allproducts.findOne({"_id":id})
        res.status(200).json({"msg":"success","data":data})}catch(err){
            res.status(400).json({"msg":"something going wrong"})
        }
    })

allproductRoute.patch("/edit",async(req,res)=>{
const {id}=req.params

let data=await allproducts.findOne({"_id":id})
if(data){
    try{
await allproducts.findByIdAndUpdate({"_id":id},req.body)
res.status(200).json({"msg":`data updated with id:-${id}`})
    }catch(err){
        res.status(400).send({"msg":"something going wrong"})
    }
}else{
    res.status(400).json({"msg":"No data found"})
}



})
allproductRoute.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    
    let data=await allproducts.findOne({"_id":id})
    if(data){
        try{
    await allproducts.findByIdAndDelete({"_id":id})
    res.status(200).json({"msg":`data deleted with id:-${id}`})
        }catch(err){
            res.status(400).send({"msg":"something going wrong"})
        }
    }else{
        res.status(400).json({"msg":"No data found"})
    }
    
    
    
    })

allproductRoute.patch("/update",async(req,res)=>{
   try{

    await allproducts.updateMany(
    { productbrand: "Smashbox", type: "Compact Powder" },
    {
        $set: {
            img: "https://m.media-amazon.com/images/I/51GnV-weWyL._UF1000,1000_QL80_.jpg"
        }
    })
    return res?.status(200).json({msg:"Updated Successfully"})

}catch{
        console.log(err?.message)
    }}
);


module.exports={allproductRoute}