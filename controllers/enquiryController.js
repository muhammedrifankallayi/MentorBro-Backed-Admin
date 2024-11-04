const EnqModel = require("../models/enquiryModel")




const SaveEnquiry = async(req,res)=>{
    try {
 
        
const data = req.body


const duplicate = await EnqModel.findOne({mobile:data.mobile})

if(duplicate){
    res.status(200).send({success:false,message:"Already Added data using this Mobile Number"})
}

await new EnqModel(data).save().then(()=>res.status(200).send({success:true}))

    } catch (error) {
        
    }
}


async function getAllEnquiries(res,res){

try {
    
const data  = await EnqModel.find()
res.status(200).send({success:true,data:data})

} catch (error) {
    console.log(error.message);
    
}

}



const closeEnquiry = async(req,res)=>{
    try {
        
    const data = req.body
    await EnqModel.updateOne({_id:data._id},{
        $set:{completed:1}
    }).then(()=>{
        res.status(200).send({success:true})
    })

    } catch (error) {
        console.log(error);
        
    }
}


module.exports = {
    SaveEnquiry,
    getAllEnquiries,
    closeEnquiry
}