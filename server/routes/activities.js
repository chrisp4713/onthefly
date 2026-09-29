import express from 'express'
import ActivitiesController from '../controllers/activities.js'

const router = express.Router()

router.get('/', ActivitiesController.getActivities)
router.get('/:id', ActivitiesController.getActivity)
router.post('/', ActivitiesController.createActivity)
router.patch('/:id', ActivitiesController.updateActivity)
router.delete('/:id', ActivitiesController.deleteActivity)

export default router