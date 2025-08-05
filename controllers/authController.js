import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/customErrors.js";
import User from "../model/UserModel.js";
import { comparePassword, hashPassWord } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";
export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  req.body.password = await hashPassWord(req.body.password);
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValid =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValid) throw new UnauthenticatedError("Invalid Password");
  const token = createJWT({ userId: user._id, userRole: user.role });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httponly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "Login Successful" });
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httponly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "Logged out Seccesfully..." });
};
