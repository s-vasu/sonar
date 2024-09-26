import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import theme  from '../../../themes/theme';



export default function BasicButton({ variant, text, size, className, onClick }:{variant?:"text"|"outlined"|"contained",className?:string, text:string,size?:"small" | "medium" | "large",onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void}) {

    const StyledButton = styled(Button)`
      &.reviewbtn {
        background-color: ${theme.palette.third.main};
        width: 100%;
        height: 59px;
        border: 0 solid grey;
        border-radius: 12px;
        margin-top:5% !important;
      }
      &.resetbtn {
        color: white;
        background-color: ${theme.palette.fourth.main};
        border: 0 solid grey;
        border-radius: 12px;
        text-transform: capitalize;
        padding: 6px 12px;
      }
    `;
  return (
    <StyledButton className={className} size={size} variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
