import {FormEventHandler, FunctionComponent, useState} from 'react'
import FormSubmitButtonWithLoading from '../../utils/formSubmitButtonWithLoading.tsx'
import ResponseMessage from '../../utils/responseMessage.tsx'
import {Col, Container, Form, Row} from 'react-bootstrap'
import styled from 'styled-components'
import {useSignIn, useSignUp} from '../../api/users.ts'
import useRedirectAfterCountdown from '../../hooks/useRedirectAfterCountdown.ts'
import useProfile from '../../hooks/useProfile.ts'
import {Navigate} from 'react-router-dom'

const NoStyleButton = styled.button`
    background: inherit;
    color: inherit;
    border: none;

    &:focus {
        outline: none;
    }
`

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    const [isNewAccount, setIsNewAccount] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {
        mutateAsync: signUp,
        isError: signUpError,
        isLoading: signUpLoading,
        isSuccess: signedUp,
        error: signUpErrorMessage,
    } = useSignUp()

    const {
        mutateAsync: signIn,
        isError: signInError,
        isLoading: signInLoading,
        isSuccess: signedIn,
        error: signInErrorMessage,
    } = useSignIn()

    const {isAuthenticaded} = useProfile()
    useRedirectAfterCountdown('/groups', signedUp || signedIn)

    if (isAuthenticaded) {
        return <Navigate to={'/groups'}/>
    }

    let responseSuccess = null
    if (!(signUpLoading || signInLoading)) {
        if (signInError || signInError) {
            responseSuccess = false
        } else if (signedUp || signedIn) {
            responseSuccess = true
        }
    }

    const loginOrRegister: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault()
        const _loginOrRegister = async () => {
            if (isNewAccount) {
                await signUp({email, password, username})
            } else {
                await signIn({email, password})
            }
            if (!signUpError && !signInError) {
                setEmail('')
                setUsername('')
                setPassword('')
            }
        }
        _loginOrRegister()

    }

    const usernameForm = (
        <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" required value={email} onChange={evt => setUsername(evt.target.value)}
                          placeholder="Enter username"/>
        </Form.Group>
    )

    const successText = `You've successfully signed ${isNewAccount ? 'up' : 'in'}, you'll be redirected soon.`

    return (
        <Container className="d-flex flex-column vh-100">
            <Row className="justify-content-center pt-5">
                <Col xs={12} sm={8}>
                    <h1>Social network</h1>
                    <hr/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} sm={8}>

                    <Row className="mb-3">
                        <Col xs={6} className={!isNewAccount ? '' : 'text-secondary'}>
                            <NoStyleButton onClick={() => setIsNewAccount(false)}>
                                <h4>Sign in</h4>
                            </NoStyleButton>
                        </Col>
                        <Col xs={6} className={`${isNewAccount ? '' : 'text-secondary'} d-flex justify-content-end`}>
                            <NoStyleButton onClick={() => setIsNewAccount(true)}>
                                <h4>Create a new account</h4>
                            </NoStyleButton>
                        </Col>
                    </Row>

                    <Row>
                        <Form onSubmit={loginOrRegister}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required value={email}
                                              onChange={evt => setEmail(evt.target.value)}
                                              placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required
                                              value={email} onChange={evt => setPassword(evt.target.value)}
                                              placeholder="Enter password"/>
                            </Form.Group>

                            {isNewAccount && usernameForm}

                            <ResponseMessage success={responseSuccess}
                                             successText={successText}
                                             failureText={signUpErrorMessage?.message || signInErrorMessage?.message}/>

                            <FormSubmitButtonWithLoading
                                loadingText={isNewAccount ? 'Creating an account for you' : 'Logging in ...'}
                                loading={signUpLoading || signInLoading}
                                text={isNewAccount ? 'Register account' : 'Log in'}/>
                        </Form>

                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default Login
