import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from "../controllers/jobController.js";
import { checkForTestUser } from "../middleware/authMiddelware.js";
import { validateJobInput } from "../middleware/validationMiddleware.js";

const router = Router();

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .patch(checkForTestUser, validateJobInput, updateJob)
  .get(getJob)
  .delete(checkForTestUser, deleteJob);

export default router;
