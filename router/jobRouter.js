import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from "../controllers/jobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";
const router = Router();

router
  .route("/")
  .get(validateIdParam, getAllJobs)
  .post(validateJobInput, createJob);
router
  .route("/:id")
  .patch(validateJobInput, updateJob)
  .get(getJob)
  .delete(deleteJob);

export default router;
