import { UnauthenticatedError, UnauthorizedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";
export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid");
  }

  try {
    const { userId, userRole } = verifyJWT(token);
    req.user = { userId, userRole };
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
