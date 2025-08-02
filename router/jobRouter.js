import {Router} from 'express';
const router = Router();
import { validateJobInput } from '../middleware/validationMiddleware.js';

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/jobController.js';

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router.route('/:id').patch(validateJobInput, updateJob).get(getJob).delete(deleteJob);

export default router;


