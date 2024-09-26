
import { Box } from '@mui/material'
import React from 'react'
// import Summary from '../../organisms/Summary/Summary'
// import SummaryContainer from '../../organisms/SummaryContainer/SummaryContainer'


interface SummaryTemplateProps{
  children:React.ReactNode;
}


export default function SummaryTemplate({children}:SummaryTemplateProps) {
  

  return (
    <Box children={children}/>
  )
}














// import SimpleContainer from '../../atoms/Container/Container'
// import BasicButton from '../../atoms/BasicButton/BasicButton'
// import Header from '../../molecules/Summary/Summary'
// import TermContainer from '../../molecules/TermContainer/TermContainer'
// import SliderContainer from '../../molecules/SliderContainer/SliderContainer'
// import PayBackContainer from '../../molecules/PayBackContainer/PayBackContainer'
// import { Box } from '@mui/material'
// import TotalContainer from '../../molecules/TotalCotainer/TotalContainer'
// import Summary from '../../organisms/Summary/Summary'

// {/* <Box>
//       <SimpleContainer>
//       <Header text={HeaderText} />
//       <TermContainer />
//       <SliderContainer />
//       <PayBackContainer />
//       <hr />
//       <TotalContainer />
//       <BasicButton variant='contained' text='Review Your Credit' />
//       </SimpleContainer>

//     </Box> */}