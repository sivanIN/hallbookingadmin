import React from 'react';
import Grid from '@mui/material/Grid';
import Associatedetails from './Associatedetails';
import Halls from './Halls';





const halldetails = () => {


  
  
  return (
    <div style={{ width: '100%',  
                  paddingTop:"10px"}}>
      <Grid container spacing={8}>
      
      
        <Grid item xs={10} sm={7.5}>


        <Halls/>
        

        </Grid>
      



        <Grid item xs={12} sm={4}>
          <Associatedetails/>
        </Grid>
        
       
      </Grid>
    </div>
  );
};

export default halldetails;