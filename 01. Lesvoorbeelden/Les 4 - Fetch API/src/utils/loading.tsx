import {Spinner} from 'react-bootstrap'
import styled from 'styled-components'
import {FunctionComponent} from 'react'

const CenteredDiv = styled.div`
  display: flex;
  align-content: center;
`

interface LoadingProps {
    spinnerText?: string
}
const Loading: FunctionComponent<LoadingProps> = ({spinnerText}) => {
    return (
        <CenteredDiv>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className={'ms-4'}>{spinnerText}</span>
        </CenteredDiv>
    )
}

export default Loading
