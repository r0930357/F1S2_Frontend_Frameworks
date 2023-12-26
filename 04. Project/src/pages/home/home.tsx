import {FunctionComponent, useState} from 'react'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import WoordjeUItleg from './woordjeUItleg.tsx'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sights from '../../data/sights.ts';
import AudioPlayer from './audioPlayer/audioPlayer.tsx'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import weetjes from '../../data/weetjes.ts'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHeight: '600px',
    overflowY: 'auto',
}));

const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '600px',
    overflowY: 'auto',
}));

const Home: FunctionComponent = () => {

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Container maxWidth="xl">
        <h1> Welkom! </h1>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <div style={{ flex: 1 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <Grid item xs={8}>
                                <Item2>
                                    <WoordjeUItleg/>
                                </Item2>
                            </Grid>
                            <Grid item xs={4}>
                                <Item2>
                                    <h2>Bezienswaardigheden</h2>
                                    <Carousel showThumbs={true}>
                                        {sights.map((sight, i) => (
                                            <div key={i}>
                                                <a href={sight.wiki} target="_blank">{sight.alt}</a>
                                                <img src={sight.img} alt={sight.alt} />
                                            </div>
                                        ))}
                                    </Carousel>
                                </Item2>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Item>
                                    <h2> De vlag van Frankrijk </h2>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg" alt="De Franse vlag" />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <h2>Interessante weetjes</h2>
                                        {weetjes.map((weetje) => (
                                            <Accordion key={weetje.id} expanded={expanded === weetje.id} onChange={handleChange(weetje.id)}>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${weetje.id}-content`} id={`${weetje.id}-header`}>
                                                    <Typography>{weetje.naam}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul>
                                                        {weetje.omschrijvingen.map((omschrijving) => (
                                                            <li key={omschrijving.id}>{omschrijving.omschrijving}</li>
                                                        ))}
                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <h2>Het Franse volkslied</h2>
                                    <AudioPlayer mp3={"../../../assets/volkslied/leMarseillaise.mp3"}/>
                                    <p>De Marseillaise</p>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </Container>
    )
}

export default Home