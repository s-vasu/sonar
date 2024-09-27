import * as React from 'react';
import { Typography } from '@mui/material';


export default function TypographyTheme({id, text, variant, children }: {id?:string, text?: string; variant: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'overline' | 'inherit' | undefined; children?: React.ReactNode; }) {
  return (
   
      <Typography id={id} variant={variant}>{text}{children}</Typography>
   
  );
}