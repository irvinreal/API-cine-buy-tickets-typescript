import db from '../DBConnection'

const getSeatsFromDB = async () => {
  const result = await db.execute(`SELECT * FROM availableseats`)
  return result[0]
}

export default getSeatsFromDB
