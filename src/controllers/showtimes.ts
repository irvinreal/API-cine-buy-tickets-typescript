import { Request, Response } from 'express'
import getMovieShowtimes from '../services/movies/getMovieShowtimes'

export const getShowtimes = async (req: Request, res: Response) => {
  const { movieId } = req.params
  const movieIdParsed = parseInt(movieId)

  if (isNaN(movieIdParsed)) {
    return res.status(400).json({
      error: "Param 'movieId' is not a number."
    })
  }

  const showtimes = await getMovieShowtimes(movieIdParsed)
  if (showtimes instanceof Array) {
    return res.status(200).json({ movieId, showtimes })
  } else if (showtimes instanceof Object) {
    return res.status(400).json({ error: showtimes.message })
  }
}
