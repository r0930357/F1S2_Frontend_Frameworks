import {Alert} from 'react-bootstrap'
import {FunctionComponent, PropsWithChildren} from 'react'

const ErrorFallback: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <Alert variant={'danger'}>
            {children}
        </Alert>
    )
}

export default ErrorFallback
