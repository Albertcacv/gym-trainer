import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Exercise } from '../types/Exercise'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

interface SearchExercisesProps {
  setExercises: (exercises: Exercise[]) => void
  bodyPart: string
  setBodyPart: (bodyPart: string) => void
}

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
}: SearchExercisesProps) => {
  const [search, setSearch] = useState<String>('')

  const [bodyParts, setBodyParts] = useState<string[]>([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      )

      setBodyParts(['all', ...bodyPartData])
    }

    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      )
      const searchExercises = exerciseData.filter(
        (exercise: Exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase())
      )
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      setSearch('')
      setExercises(searchExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
        }}
        mb='49px'
        textAlign='center'
      >
        Awesome exercises to get you started
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: {
              lg: '1170px',
              xs: '350px',
            },
            backgroundColor: '#FFF',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder='Search exercises'
          type='text'
        />
        <Button
          className='search-btn'
          sx={{
            backgroundColor: '#FF2625',
            color: '#FFF',
            textTranform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyParts}
          bodyPart={bodyParts}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
