const {Schema, model} = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    name:String,
    email: String,
    password: String,
    profilePic: String,
})

userSchema.statics.authenticate = async (email, password)=>{
    const user = await User.findOne({email});
    if(!user) return false;
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : false;
}

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next()
} )

const User = model("User", userSchema);

module.exports = User;

