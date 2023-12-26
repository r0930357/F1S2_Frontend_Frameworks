import {FunctionComponent} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ListItems from './ListItem/listItems.tsx'
import exercises from '../../data/exercises.ts'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHeight: '800px',
    overflowY: 'auto',
}));

const List: FunctionComponent = () => {
    return (
        <Container maxWidth="xl">
            <h1> Woordenlijst </h1>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <div style={{ flex: 1 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <Grid item xs={8}>
                                <Item>
                                    <ListItems exercises={exercises} />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </Container>
    )
}

export default List