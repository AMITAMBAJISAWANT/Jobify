import { UnauthenticatedError, UnauthorizedError,BadRequestError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";
export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid");
  }

  try {
    const { userId, userRole } = verifyJWT(token);
    const testUser = userId === "68b67d6a259292a7287fc9f8";
    req.user = { userId, userRole, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const authorizePermission = (...roles) => {
  return (req, res, next)=>{
    if (!roles.includes(req.user.userRole)) {
      throw new UnauthorizedError('Unautherized to access this route');
    }
    next();

  }
  

};

export const checkForTestUser = (req,res,next)=>{
  if(req.user.testUser){
    throw new BadRequestError("🔒 Please log in to perform this action")
  }
  next();

}
