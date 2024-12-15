import db from '../DBConnection'
import { ShowtimeSchema } from '../../types'

const getShowtimesFromDB = async () => {
  // returns [rows, tableFields]
  const result = await db.execute(`SELECT * FROM showtimes ORDER BY showtime ASC`)
  // rows = result[0]
  return result[0] as ShowtimeSchema[]
}

export default getShowtimesFromDB
