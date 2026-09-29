import express from 'express'
import TripDestinationController from '../controllers/trip_destinations.js'

const router = express.Router()

router.get('/', TripDestinationController.getTripsDestinations)
router.get('/trips/:destination_id', TripDestinationController.getAllTrips)
router.get('/destinations/:trip_id', TripDestinationController.getAllDestinations)
router.post('/', TripDestinationController.createTripDestination)