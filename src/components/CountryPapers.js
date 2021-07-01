import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *':
        {
            margin: theme.spacing(3.3),
            width: theme.spacing(24),
            height: theme.spacing(23),
        },


    },
}));

const typoStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});


export default function CountryPapers(props) {
    const classes = useStyles();
    const typoClass = typoStyles();


    const [getData, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const countryName = props.country
            const api = 'https://corona.lmao.ninja/v2/countries/'+countryName+'?yesterday=true&strict=true&query'
            const apiFetchedData = await fetch(api);
            console.log(apiFetchedData);
            const apiDataJson = await apiFetchedData.json();
            console.log(apiDataJson);
            setData(apiDataJson);
            setLoading(false)
        }

        fetchData();

    }, [props.country])

    const load = 'Loaidng...'

    if (loading) {
        return (
            <div className={classes.root}>
                <Paper elevation={3} >
                    <div className={typoClass.root}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant="h4" gutterBottom style={{ color: '#f0ba32' }}>
                            {load}
                        </Typography>
                    </div>
                </Paper>

                <Paper elevation={3}>
                    <div className={typoClass.root}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant="h4" gutterBottom style={{ color: '#383632' }}>
                            {load}
                        </Typography>
                    </div>
                </Paper>

                <Paper elevation={3}>
                    <div className={typoClass.root}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant="h4" gutterBottom style={{ color: '#55e786' }}>
                            {load}
                        </Typography>
                    </div>
                </Paper>

                <Paper elevation={3}>
                    <div className={typoClass.root}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant="h4" gutterBottom style={{ color: '#f21e07' }}>
                            {load}
                        </Typography>
                    </div>
                </Paper>

                <Paper elevation={3}>
                    <div className={typoClass.root}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Typography variant="h4" gutterBottom style={{ color: '#fc5400' }}>
                            {load}
                        </Typography>

                    </div>
                </Paper>

            </div>
        );

    }

    return (
        <div className={classes.root}>
            <Paper elevation={3} >
                <div className={typoClass.root}>
                    <br></br>
                    <br></br>
                    <Typography variant="h4" gutterBottom style={{ color: '#f0ba32' }}>
                        {getData && getData.active.toLocaleString()}
                    </Typography>
                    <br></br>
                    <Typography variant="button" display="block" gutterBottom style={{ color: '#f0ba32' }}>
                        TOTAL ACTIVE CASES
                    </Typography>
                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={typoClass.root}>
                    <br></br>
                    <br></br>
                    <Typography variant="h4" gutterBottom style={{ color: '#383632' }}>
                        {getData && getData.todayCases.toLocaleString()}
                    </Typography>
                    <br></br>
                    <Typography variant="button" display="block" gutterBottom style={{ color: '#383632' }}>
                        TODAY CASES
                    </Typography>
                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={typoClass.root}>
                    <br></br>
                    <br></br>
                    <Typography variant="h4" gutterBottom style={{ color: '#55e786' }}>
                        {getData && getData.recovered.toLocaleString()}
                    </Typography>
                    <br></br>
                    <Typography variant="button" display="block" gutterBottom style={{ color: '#55e786' }}>
                        RECOVERED
                    </Typography>
                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={typoClass.root}>
                    <br></br>
                    <br></br>
                    <Typography variant="h4" gutterBottom style={{ color: '#f21e07' }}>
                        {getData && getData.deaths.toLocaleString()}
                    </Typography>
                    <br></br>
                    <Typography variant="button" display="block" gutterBottom style={{ color: '#f21e07' }}>
                        TOTAL DEATHS
                    </Typography>
                </div>
            </Paper>

            <Paper elevation={3}>
                <div className={typoClass.root}>
                    <br></br>
                    <br></br>
                    <Typography variant="h4" gutterBottom style={{ color: '#fc5400' }}>
                        {getData && getData.todayDeaths.toLocaleString()}
                    </Typography>
                    <br></br>
                    <Typography variant="button" display="block" gutterBottom style={{ color: '#fc5400' }}>
                        Today Deaths
                    </Typography>
                </div>
            </Paper>

        </div>
    );
}