import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState , useEffect , useRef } from 'react';
import Graph from './Graph';
import CountryPapers from './CountryPapers';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    marginRight: theme.spacing(130),
    marginTop: theme.spacing(0),
  },
  divSet: {
    backgroundColor: '#79e2f2',
    borderRadius: 3,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ContList() {
  const classes = useStyles();
  const [country, setCountry] = React.useState('Afghanistan');

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const [loading, setLoading] = useState(false);
  const ref_countries = useRef();


  useEffect(() => {
    async function fetchData(){
        setLoading(true)
        const apiFetchedData = await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');
        console.log(apiFetchedData);
        const apiDataJson = await apiFetchedData.json();
        console.log(apiDataJson);
        ref_countries.current = apiDataJson;
        console.log(ref_countries.current);
        setLoading(false);
    }
  
    fetchData();
    
  }, [])


  if(loading){
    return (
      <div>
          <div className={classes.divSet}>
          <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
              Select Country
              </InputLabel>
              <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={country}
              onChange={handleChange}
              >
              <MenuItem value="">Loading...</MenuItem>
              </Select>
              <FormHelperText>Select The Country To See It's Data</FormHelperText>
          </FormControl>
          </div>
          <div>
            <br></br>
            <Paper className={classes.paper}><Graph country = {country} /></Paper>
            <br></br>
            <Paper className={classes.paper}><CountryPapers country = {country}/></Paper>
          </div>
      </div>
  );}



  if(loading===false){

    const countryNames =[];
    for (let index = 0; index < 222 ; index=index+1) {
      if(ref_countries.current)
      {
        countryNames.push(ref_countries.current[index].country);
      }
    }
    console.log(countryNames);
    return (
      <div>
          <div className={classes.divSet}>
          <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
              Select Country
              </InputLabel>
              <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={country}
              onChange={handleChange}
              >
              {countryNames.map((data) => {return(<MenuItem value={data}>{data}</MenuItem>)})}
              </Select>
              <FormHelperText>Select The Country To See It's Data</FormHelperText>
          </FormControl>
          </div>
          <div>
            <br></br>
            <Paper variant="outlined" className={classes.paper}><Graph country = {country} /></Paper>
            <br></br>
            <Paper variant="outlined" className={classes.paper}><CountryPapers country = {country}/></Paper>
          </div>
      </div>
  );}
}
