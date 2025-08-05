import { StatusCodes } from "http-status-codes";
import User from "../model/UserModel.js";
import Job from "../model/jobModel.js";
export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

export const getApplicationStats = async (req, res) => {
  const user = await User.countDocuments();
  const jobs = await Job.countDocuments();

  res.status(StatusCodes.OK).json({ user, jobs });
};

export const updateUser = async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
