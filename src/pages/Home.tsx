import { Box } from '@mui/material'
import { useState } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import { Exercise } from '../types/Exercise'

const Home = () => {
  const [bodyPart, setBodyPart] = useState<string>('all')
  const [exercises, setExercises] = useState<Exercise[]>([])
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home
