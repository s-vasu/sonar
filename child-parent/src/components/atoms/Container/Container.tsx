import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from 'styled-components';
import theme from '../../../themes/theme';



const SC = styled.div`
  background: #19181C;
  color: #white;
  // margin: 0 1em;
  // padding: 0.25em 1em;
  height:100vh;
  padding:5%;


  #outer-container{
  padding:2%;
  background-color: #201F24;
  width:340px;
  height:513px;
  border-radius: 12px;
  border: 1px solid grey;
  opacity: 1;
  }



  .inner-container {
    color: #E8E7F0;
  text-align:left;
    margin: auto;
  }

    #greytext{
    color:${theme.palette.secondary.main};
    }
    #ratecap{
    color:#A5A5A6;
    margin-right:3%;
    }
    #purpletext{
    color:#B4A9FF;
    // padding-right:1%;
    }
    #hr{
    margin:5% 0;
    }
 
`


export default function SimpleContainer({children}:{children:React.ReactNode}) {
  return (
    <SC>
   
      <CssBaseline />
      <Container id='outer-container' maxWidth="sm">
        <Box className="inner-container"  children={children} />
      </Container>
    </SC>
  );
}


