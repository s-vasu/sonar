import { Box } from '@mui/material';
import React, { useState } from 'react';
import SimpleContainer from '../../atoms/Container/Container';
import TypographyTheme from '../../atoms/Typography/TypographyTheme';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import RangeSlider from '../../atoms/Slider/RangeSlider';


import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Summary({ termMonths, contracts, maxValue }: { termMonths: number, contracts: number, maxValue: number }) {
  const MIN = 0;

  const [curValue, setCurValue] = useState(0);
  const [val, setVal] = useState<number>(MIN);
  const [rate, setRate] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  const handleChange = (_: Event, newValue: number | number[]) => {
    const value = newValue as number;
    setVal(value);
    setCurValue(value);
    // const newRate = value * 0.12;
    const newRate = parseFloat((value * 0.12).toFixed(3));
    setRate(newRate);
    setTotalPayable(value + newRate);
  };

  const handleReset = () => {
    setVal(MIN);
    setCurValue(MIN);
    setRate(0);
    setTotalPayable(0);
  };
 

  return (
    <SimpleContainer>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between',width:143}}>
        <TypographyTheme variant='h5' >Summary </TypographyTheme><InfoOutlinedIcon sx={{fontSize:30, color:'grey'}} />
        
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
        <TypographyTheme id='greytext' text="Term" variant='body1' />
        <TypographyTheme variant='body1'>{termMonths} months</TypographyTheme>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between'  }}>
        <TypographyTheme id='greytext' text="Selected contracts" variant='body1' />
        <TypographyTheme variant='body1'>{contracts}</TypographyTheme>
      </Box>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between'  }}>
          <TypographyTheme id='greytext' text="Slide to autoselect" variant='body1' />
          <BasicButton className="resetbtn" size='small' variant='outlined' text='Reset' onClick={handleReset} />
        </Box>
        <RangeSlider val={val} curValue={curValue} maxValue={maxValue} handleChange={handleChange} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between'  }}>
        <TypographyTheme id='greytext' text="Payback amount" variant='body1' />
        <TypographyTheme data-testid="payback-amount" variant='body1'>{curValue}</TypographyTheme>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between'  }}>
        <TypographyTheme id='greytext' text="Rate %" variant='body1' />
        <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <TypographyTheme id='ratecap' text="(12.00%)  " variant='caption'></TypographyTheme> <TypographyTheme variant='body1'> {rate}</TypographyTheme>
        </Box>
      </Box>
      <hr id='hr' color='grey'/>
      <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-between'  }}>
        <TypographyTheme id='greytext' text="Total Payout" variant='body1' />
        <TypographyTheme data-testid="total-payout" variant='h5'>${totalPayable}</TypographyTheme>
      </Box>
      <BasicButton className="reviewbtn" size='large' variant='contained' text='Review Your Credit' />
    </SimpleContainer>
  );
}
