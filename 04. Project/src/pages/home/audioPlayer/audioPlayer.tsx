import {FunctionComponent} from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

interface AudioPlayerProps {
    mp3: string
}

const AudioPlayer: FunctionComponent<AudioPlayerProps> = ({mp3}) => {
    return (
        <Card>
            <CardMedia
                component="audio"
                controls
                src={mp3}
            />
        </Card>
    )
}

export default AudioPlayer