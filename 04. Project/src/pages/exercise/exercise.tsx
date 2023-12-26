import {FunctionComponent, useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import {TextField} from '@mui/material'
import Button from '@mui/material/Button'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHeight: '600px',
    overflowY: 'auto',
}));

interface ExerciseProps {
    exercises: { frans: string; nederlands: string }[];
}

const Exercise: FunctionComponent<ExerciseProps> = ({ exercises }) => {
    const [willekeurigWoord, setWillekeurigWoord] = useState<string>('');
    const [punten, setPunten] = useState<number>(0);

    const getWillekeurigWoord = () => {
        const randomIndex = Math.floor(Math.random() * exercises.length);
        const woord = exercises[randomIndex]?.frans || '';
        setWillekeurigWoord(woord);
    };

    const controleerVertaling = () => {
        const vertalingNederlands = (document.getElementById('txtNederlands') as HTMLInputElement)?.value || '';

        if (vertalingNederlands === exercises.find((exercise) => exercise.frans === willekeurigWoord)?.nederlands) {
            setPunten(punten + 1);
            (document.getElementById('txtNederlands') as HTMLInputElement).value = '';
            getWillekeurigWoord();
        } else {
            alert('Fout, probeer nog een keer');
        }
    };

    const wisScore = () => {
        setPunten(0);
    }

    return (
        <Container maxWidth="xl">
            <h1> Oefenen van Franse woorden  </h1>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <Grid item xs={8}>
                                <Item>
                                    <h2>Check je kennis</h2>
                                    <Button style={{marginBottom: '30px'}} variant="contained" onClick={getWillekeurigWoord}>Klik hier voor een willekeurig Frans woord</Button>
                                    <Grid container spacing={0} style={{ padding: '5 px' }}>
                                        <Grid item xs={4}>
                                            <Item>
                                                <TextField disabled id="txtFrans" label="Frans" value={willekeurigWoord} variant="filled" />
                                            </Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Item>
                                                <TextField id="txtNederlands" label="Nederlands" variant="outlined" />
                                            </Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Item>
                                                <Button id="btnControleer" variant="contained" onClick={controleerVertaling}>Controleer</Button>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <h2>Je score</h2>
                                    <p>Aantal correcte antwoorden: <strong>{punten}</strong></p>
                                    <Button id="btnControleer" variant="contained" onClick={wisScore}>Wis score</Button>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </Container>
    );
};

export default Exercise;