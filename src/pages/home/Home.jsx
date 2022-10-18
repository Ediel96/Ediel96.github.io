
import { Grid, Icon, Typography } from '@mui/material'
import './layout/home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';




const useStyle = {

  iconMaterial:{
    fontSize: 80
  }

}

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

        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4' align='center'>Hamilton Ediel Acevedo Avila</Typography>     
          <Typography variant='h5' align='center'> Full Stack </Typography>
        </Grid>
          
        </Grid>
         
         <Grid 
            container
            spacing={0}
            >
            

              <Grid item xs={6} align='center'>
                <LinkedInIcon 
                
                color='primary' 
                style={useStyle.iconMaterial} />
              </Grid>

              <Grid item xs={6} align='center'>
                <GitHubIcon 
                color='primary'
                style={useStyle.iconMaterial} 
                />
              </Grid>

              <Grid item xs={12} className='containerText'>
                <Link to='/profile' >Leer mas..</Link>
              </Grid>

         </Grid>

        </div>

      </Grid>


    </Grid>
  )
}
