import { Request, Response } from 'express'
import getMoviesFromDB from '../services/movies/getMoviesFromDB'

export const getMovies = async (req: Request, res: Response) => {
  const movies = await getMoviesFromDB()

  return res.status(200).json({ movies })
}
