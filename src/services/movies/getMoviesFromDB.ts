import db from '../DBConnection'
import { MovieShowtime } from '../../types'

const getMoviesFromDB = async () => {
  // returns [rows, tableFields]
  const result = await db.execute(`SELECT * FROM movie`)
  // rows = result[0]
  return result[0] as MovieShowtime[]
}

export default getMoviesFromDB
