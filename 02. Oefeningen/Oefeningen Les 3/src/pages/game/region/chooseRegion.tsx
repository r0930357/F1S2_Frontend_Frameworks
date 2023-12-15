import {FunctionComponent} from 'react'
import {useNavigate} from 'react-router-dom'
import {getAllRegions} from '../../../api/capitalsAPI.ts'
import {ListGroup} from 'react-bootstrap'

interface ChooseRegionProps {
}

const ChooseRegion: FunctionComponent<ChooseRegionProps> = () => {
    const navigate = useNavigate()
    const regions = getAllRegions()

    return (
        <ListGroup>
            {regions.map((r,i)}
            <ListGroup.Item key={i} onClick={() => navigate('')} >Cras justo odio</ListGroup.Item>)
        </ListGroup>
    )
}

export default ChooseRegion