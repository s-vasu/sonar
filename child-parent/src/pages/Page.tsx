import React from 'react'
import './style.css'
import SummaryTemplate from '../components/templates/SummaryTemplate/SummaryTemplate'
import Summary from '../components/organisms/Summary/Summary'
import { ThemeProvider } from '@mui/material'
import theme from './../themes/theme'


export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <SummaryTemplate
        children={<Summary termMonths={12} contracts={3} maxValue={880000} />}
      />
    </ThemeProvider>
  );
}
