import { ShowtimeSchema, ShowtimeSchemaAlgoError } from '../../types'
import getShowtimesFromDB from '../showtimes/getShowtimesFromDB'
import { format } from 'date-fns'

// Task:
/*
  ** 3 hours per auditorium

  -Algorithm for getting available schedules and auditoriums for each movie
  -Return the schedules for the movie with the provided id.
*/

function movieShowtimesAlgo(
  showtimes: ShowtimeSchema[],
  index: number
): ShowtimeSchema[] | ShowtimeSchemaAlgoError {
  // 3 hours of space between showtimes
  // the index of the movie would be the started time index
  const showtimesArr: ShowtimeSchema[] = []
  const error: ShowtimeSchemaAlgoError = {
    error: true,
    message: "'movieId' incorrect."
  }

  let j = 1
  while (j <= 4) {
    // if index higher than (8 movies), this means incorrect 'movieId'
    if (Math.floor((index * 8) / 32) / 4 > 1) {
      return error
    }

    let currShowtime = showtimes[index]

    // format date
    const formatedDate = format(showtimes[index].showtime, 'eeee d MMM HH:mm bbbb')
    currShowtime = { ...currShowtime, formatedShowtime: formatedDate }

    showtimesArr.push(currShowtime)

    index += 4
    j++
  }
  console.log('')

  // return 4 showtimes per movie+
  return showtimesArr
}

const getMovieShowtimes = async (id: number) => {
  const showtimes = await getShowtimesFromDB()
  // console.log(id, showtimes)
  const movieShowtimes = movieShowtimesAlgo(showtimes, id - 1)
  return movieShowtimes
}

export default getMovieShowtimes
