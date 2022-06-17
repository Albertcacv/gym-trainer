import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => (
  <Stack
    direction='row'
    justifyContent='center'
    alignItems='center'
    width='100%'
  >
    <InfinitySpin color='grey' width='300px' />
  </Stack>
)

export default Loader
