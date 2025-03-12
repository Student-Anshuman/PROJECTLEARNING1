import { handleError } from "../helper/handleError"

export const Register = async (req, res,next) => {
  try {
    const { name, email, password } = req.body
    // check user is registered or not
    const checkUser = await user.findone({ email })
    if (checkUser) {
      //if user is already registered
      next(handleError(409,'user already registered'))
    }
    const hashedPassword = bcryptjs.hashSync(password)
    // if user not registered then register
    const user = new user({
      name,email,password:hashedPassword
    })
    await user.save();
    res.status(200).json({
      success: true,
      message : 'Registration Successful.'
    })
    
  } catch (err) {
    next(handleError(500,err.message))
    
  }
}