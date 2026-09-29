import {pool} from '../config/database.js'

const getTripsDestinations = async (req, res) => {
    try{
        const results = await pool.query(`SELECT * FROM trips_destinations ORDER BY trip_id ASC`)
        res.status(200).json(results.rows)
    }catch(error){
        res.status(409).json({error: error.message})
    }
}

const getAllTrips = async (req, res) => {
    try{
        const id = req.paramsdestination_id
        const results = await pool.query(`SELECT * FROM trips WHERE id = ANY 
            (SELECT trip_id from trip_destinations WHERE destination_id = $1)`, [id])
        res.status(200).json(results.rows)
    }catch(error){
        res.status(409).json({error: error.message})
    }
}

const getAllDestinations = async (req, res) => {
    try{
        const id = req.params.trip_id
        const results = await pool.query(`SELECT * FROM destinations WHERE id = ANY
            (SELECT destination_id from trip_destinations WHERE trip_id = $1)`, [id])
            res.status(200).json(results.rows)
    }catch(error){
        res.status(409).json({error: error.message})
    }
}

const createTripDestination = async (req, res) => {
    try{
        const {trip_id, destination_id} = req.body
        const results = await pool.query(`INSERT INTO trip_destinations (trip_id, destination_id)
            VALUES($1, $2) RETURNING *`, [trip_id, destination_id])
        res.status(201).json(results.rows[0])
    }catch(error){
        res.status(409).json({error: error.message})
    }
}

export default {getTripsDestinations, getAllTrips, getAllDestinations, createTripDestination}