
import { Grid } from '@mui/material'
import './layout/home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Home = () => {
  return (
    <Grid  
      container
      height='100vh'
      >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className='contentInfo'>
         <LinkedInIcon  />
        </div>

      </Grid>


    </Grid>
  )
}
