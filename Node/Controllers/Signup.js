const Signupmodel=require('../Models/signupmodel')
const bcrypt=require('bcrypt')
const SignupController = async (req, res) => {
  const isuserexist=await Signupmodel.find({email:req.body.email});
 try{
  if(isuserexist.length>0){
    res.status(200).json({message:'already a user'}) 
  }else{
    const hashpassword=  await bcrypt.hashSync(req.body.password,10);
    const datatostore={
      email:req.body.email,
      password:hashpassword,
      name: req.body.name,
    } 
    const rese = await Signupmodel.create(datatostore);
    res.status(200).json({ message: "done", data:rese});
  } 
 } 
 catch(e){
  res.status(400);
 }
}

module.exports = SignupController;
