const batchModel = require("../models/batchModel")




const saveBatch = async(req,res)=>{
    try {
        
    const data = req.body
console.log(data);

    const Model = new batchModel(data);
    await Model.save()
    .then((data)=>{
        console.log(data);
        
        res.status(200).send({success:true})
    })

 
    } catch (error) {
        res.status(400).send({success:false})
        console.log(error.message);
        
    }
}

const getAllBatch = async(req,res)=>{
    try {
        
const data = await batchModel.find();
res.status(200).send({success:true,data:data});

    } catch (error) {
        res.status(400).send({success:false})
        console.log(error.message);
        
    }
}

const getNextBatchNo = async(req,res)=>{
    try {

        const data = await batchModel.find()
        const batchNo = data.length+1
  res.status(200).send({success:true,data:batchNo})
        
    } catch (error) {
        res.status(400).send({success:false})
        console.log(error.message);
    }
}

const updateBatch = async(req,res)=>{
    try {
        
const id = req.body._id
const data = req.body

await batchModel.updateOne(
    {_id:id},
    {
        $set:data
    }
).then(()=>{
    res.status(200).send({success:true})
})

    } catch (error) {
        res.status(400).send({success:false})
        console.log(error.message);
    }
}



module.exports = {
    saveBatch,
    getAllBatch,
    getNextBatchNo,
    updateBatch
}