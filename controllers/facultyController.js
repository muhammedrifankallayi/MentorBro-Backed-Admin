const facultyModel = require("../models/facultyModel")




const saveFaculty = async(req,res)=>{
    try {


const data = req.body ;
const _model = new facultyModel(data)

await _model.save().then(()=>res.status(200).send({success:true}))
        
    } catch (error) {
        console.log(error.message);
    }
}


const updateFaculty = async(req,res)=>{
    try {

const data = req.body ;

await facultyModel.findOneAndUpdate({_id:data._id},
    {
        $set:data
    }
).then(()=>{
    res.status(200).send({success:true})
})

        
    } catch (error) {
        console.log(error.message);
        
    }
}

const deleteFaculty = async(rq,rs)=>{
    try {
        
const id = rq.body.id
await facultyModel.findOneAndUpdate({_id:id},{
    $set:{delete:true}
}).then(()=>{
    res.status(200).send({success:true});
})

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    saveFaculty,
    updateFaculty,
    deleteFaculty
}


