import {Router} from 'express';
const router = Router();

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/jobController.js';

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').patch(updateJob).get(getJob).delete(deleteJob);

export default router;


