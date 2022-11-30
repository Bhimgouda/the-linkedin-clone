const catchAsync = require("./utils/catchAsync");
const CustomError = require("./utils/customError");

module.exports.isLoggedIn = catchAsync(async(req,res,next)=>{
    if(!req.session.user_id) throw new CustomError("The user needs to login", 403)
    next()
})