
import React from 'react';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DelIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from '@mui/material/Link'
import './App.css'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import NativeSelect from '@mui/material/NativeSelect';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';


function valuetext(value: number) {
  return `${value}°C`;
}

const buttons=[
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
]
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const labelsw = { inputProps: { 'aria-label': 'Size switch demo' } }

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});


export default function Buttons() {
  const [checked, setChecked] = React.useState([true, false]);
  const [value, setValue] = React.useState('male');
  const [age, setAge] = React.useState('');

const handleChangeAge = (event: SelectChangeEvent) => {
  setAge(event.target.value as string);
};


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  
const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([event.target.checked, event.target.checked]);
};

const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([event.target.checked, checked[1]]);
};

const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked([checked[0], event.target.checked]);
};
const children = (
  <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
    <FormControlLabel
      label="Child 1"
      control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
    />
    <FormControlLabel
      label="Child 2"
      control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
    />
  </Box>
);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <div className='bt1'>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <br></br>
<div>
    <Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>
</div>
<br></br>
<div>
<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>
</div>
<br />
<div>
<Button variant="outlined">Primary</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>
<Button variant="outlined" href="#outlined-buttons">
  Link
</Button>
</div>
<br />
<div>
<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button>
</div>
<br />
<Button variant="outlined" startIcon={<DelIcon/>}>
  Delete
</Button>
<br></br>
<Button variant="contained" endIcon={<SendIcon/>}>
  Send
</Button>
<br />
<div>
<IconButton aria-label="delete" size="small">
  <DelIcon fontSize="inherit" />
</IconButton>
<IconButton aria-label="delete" size="small">
  <DelIcon fontSize="small" />
</IconButton>
<IconButton aria-label="delete" size="large">
  <DelIcon />
</IconButton>
<IconButton aria-label="delete" size="large">
  <DelIcon fontSize="inherit" />
</IconButton>
</div>
<br />
<div>
<Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={(event) => console.log(event.target.files)}
    multiple
  />
</Button>
</div>
<br />
<div>
<Stack direction="row" spacing={2}>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined">
        Save
      </LoadingButton>
</Stack>
</div>
<br></br>
<div>
<ButtonGroup variant="contained" aria-label="Basic button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
</div>
<br />
<div>
<ButtonGroup orientation="vertical" aria-label="Vertical button group">
        {buttons}
      </ButtonGroup>
</div>
<br />
<div>
<ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
</div>
<br />
<div>
<ButtonGroup variant="outlined" aria-label="Loading button group">
  <Button>Submit</Button>
  <LoadingButton>Fetch data</LoadingButton>
  <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />}>
    Save
  </LoadingButton>
</ButtonGroup>
</div>
<br />
<div>
<Link href="#">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
</div>
<br />
<div>
<Link href="#" underline="none">
  {'underline="none"'}
</Link>
<Link href="#" underline="hover">
  {'underline="hover"'}
</Link>
<Link href="#" underline="always">
  {'underline="always"'}
</Link>
</div>
<br></br>
<div>
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>
</div>
<br />
<div>
<Checkbox {...label} defaultChecked size="small" />  
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
</div>
<br />
<div>
<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
<Checkbox
  {...label}
  icon={<BookmarkBorderIcon />}
  checkedIcon={<BookmarkIcon />}
/>
</div>
<br />
<div>

</div>
<br />
<div>
<FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
</div>
<br />
<div>
<FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
</div>
<br />
<div>
<Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
</div>
<br />
<div>
<Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
</div>
<br />
<div>
  <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChangeAge}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>
</div>
<br />
<div>
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
</div>
<br />
<div>
  <Box sx={{ width: 300 }}>
<Slider
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  shiftStep={30}
  step={10}
  marks
  min={10}
  max={110}
/>
<Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
</Box>
</div>
<div>
<FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel required control={<Switch />} label="Required" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
</div>
<br />
<div>
<Switch {...labelsw} defaultChecked size="small" />
<Switch {...labelsw} defaultChecked />
</div>
<br />
<div>
<Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
</div>

    </div>
  );
}
