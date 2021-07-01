import { useState, useEffect, useRef  } from 'react';
import { Line } from 'react-chartjs-2';






function Graph(props) {
  const [loading, setLoading] = useState(false);
  const ref_labels = useRef();
  const ref_cases = useRef();
  const ref_deaths = useRef();
  const ref_recov = useRef();
  
  useEffect(() => {
    async function fetchData(){
        setLoading(true)
        const countryName = props.country
        const api = 'https://corona.lmao.ninja/v2/historical/'+countryName+'?lastdays=30'
        const apiFetchedData = await fetch(api);
        console.log(apiFetchedData);
        const apiDataJson = await apiFetchedData.json();
        console.log(apiDataJson);
        ref_labels.current= Object.keys(apiDataJson.timeline.cases)
        ref_cases.current= Object.values(apiDataJson.timeline.cases)
        ref_deaths.current= Object.values(apiDataJson.timeline.deaths)
        ref_recov.current= Object.values(apiDataJson.timeline.recovered)
        setLoading(false);
    }
  
    fetchData();
    
  }, [props.country])
  if(loading){
    const data = {
      labels: ['Waiting','Waiting','Waiting','Waiting','Waiting','Waiting'],
      datasets: [{
        label: 'Cases',
        data: [0,0,0,0,0,0],
        fill: false,
        borderColor: 'rgb(240, 186, 50)',
        tension: 0.1
      },
      {
        label: 'Deaths',
        data: [0,0,0,0,0,0],
        fill: false,
        borderColor: 'rgb(242, 30, 7)',
        tension: 0.1
      },
      {
        label: 'Recovered',
        data: [0,0,0,0,0,0],
        fill: false,
        borderColor: 'rgb(85, 231, 134)',
        tension: 0.1
      }]
    };
    
  
    return(
      <div>
        <Line
          data={data}
          width={250}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
  if(loading===false){
    const labels =[];
    const cases =[];
    const deaths =[];
    const recov =[];
    for (let index = 0; index < 30; index=index+1) {
      if(ref_labels.current)
      {
        labels.push(ref_labels.current[index]);
        cases.push(ref_cases.current[index]);
        deaths.push(ref_deaths.current[index]);
        recov.push(ref_recov.current[index]);
        
      }
    }
    const data = {
      labels:labels,
      datasets: [{
        label: 'Cases',
        data: cases,
        fill: false,
        borderColor: 'rgb(240, 186, 50)',
        tension: 0.1
      },
      {
        label: 'Deaths',
        data: deaths,
        fill: false,
        borderColor: 'rgb(242, 30, 7)',
        tension: 0.1
      },
      {
        label: 'Recovered',
        data: recov,
        fill: false,
        borderColor: 'rgb(85, 231, 134)',
        tension: 0.1
      }]
    };

    return(
      <div>
        <Line
          data={data}
          width={250}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
  
}

export default Graph;
