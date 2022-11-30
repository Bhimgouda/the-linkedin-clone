const User = require("../model/user");
const catchAsync  = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

exports.userRegister = catchAsync(async (req, res)=>{
    const alreadyRegistered = await User.findOne({email: req.body.email});
    if(alreadyRegistered) throw new CustomError('The user is already registered with us, Please Login', 403)
    const user = await new User(req.body).save();
    if(user){
        req.session.user_id = user._id;
        res.send({ message: "The user has been registered Successfully", user });
    }
})

exports.userLogin = catchAsync(
    async (req,res)=>{
        if(req.body.email == null){
            if(req.session.user_id){                             // To check to see if the user has unexpired cookies
                const user = await User.findById(req.session.user_id);   // so that we can keep him logged in
                return res.send({ message:"", user });
            }
            return null;
        }

        const {email, password} = req.body;
        const user = await User.authenticate(email,password)
        if(!user) throw new CustomError("Invalid email or password", 401)
        req.session.user_id = user._id;
        res.send({message: "You have been successfully Logged In", user})
    }
)

exports.userLogout = catchAsync(async(req,res)=>{
    req.session.user_id = null;
    res.send({ message: "You have been successfully Logged out"})
})


