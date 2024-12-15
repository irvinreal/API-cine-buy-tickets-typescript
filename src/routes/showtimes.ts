import { Router } from 'express'
import { getShowtimes } from '../controllers/showtimes'

const router = Router()

router.get('/showtimes/:movieId', getShowtimes)

export default router
