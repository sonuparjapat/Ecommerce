const mongoose=require("mongoose")

const schema=mongoose.Schema({
    link:String

})

const cardModal=mongoose.model("cards",schema)
module.exports={cardModal}