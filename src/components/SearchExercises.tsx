import { Box, Button, Stack, TextField, Typography } from '@mui/material'
const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
        }}
        mb='50px'
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
              lg: '800px',
              xs: '350px',
            },
            backgroundColor: '#FFF',
            borderRadius: '40px',
          }}
          value=''
          onChange={(e) => {}}
          placeholder='Search exercises'
          type='text'
        />
        <Button className='search-btn' 
            sx={{
                backgroundColor: '#FF2625',
                color: '#FFF',
                textTranform: 'none',
                width: { lg: '175px', xs: '80px'}, 
                fontSize: {lg: '20px', xs: '14px'},
                height: '56px',
                position: 'absolute',
            }}>
            Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises