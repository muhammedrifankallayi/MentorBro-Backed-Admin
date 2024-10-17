const courseModel = require("../models/courseModel");





const saveCourse = async(req,res)=>{
    try {
        
        const data = req.body

        const Model = new courseModel(data);
        await Model.save()
        .then((res)=>{
            res.status(200).send({success:true});
        })


    } catch (error) {
        res.status(400).send({success:false});

        console.log(error.message);
        
    }
}

 const  getAllCourseList =  async(req,res)=>{
    try {
        
     const courseList = await courseModel.find({delete:false});
     res.status(200).send({success:true,data:courseList});

    } catch (error) {
        res.status(400).send({success:false})
        console.log(error.message);
        
    }
 }

 const deleteCourse = async(req,res)=>{
    try {

      const id = req.query.id

      await courseModel.updateOne({
        _id:id
      },
      {
        $set:{delete:true}
      }
    
    )
        
    } catch (error) {
        console.log(error.message);
        
    }
 }



 const  updateCourse = async(req,res)=>{
    try {

        const data = req.body

        await courseModel.updateOne({_id:data._id},{
            $set:data
        })
        .then(()=>{
            res.status(200).send({success:true})
        })
        
    } catch (error) {
        res.status(400).send({success:false})
    }
 }



module.exports = {
    saveCourse,
    getAllCourseList,
    deleteCourse,
    updateCourse
}