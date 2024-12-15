import { AudSchema } from '../../types'
import db from '../DBConnection'

const getAuditoriumsFromDB = async () => {
  // returns [rows, tableFields]
  const result = await db.execute(`SELECT * FROM auditorium`)
  // rows = result[0]
  return result[0] as AudSchema[]
}

export default getAuditoriumsFromDB
