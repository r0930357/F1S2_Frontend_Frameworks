import {ChangeEventHandler, FormEventHandler, FunctionComponent, useState} from 'react'
import {Button, Col, Form, Row} from 'react-bootstrap'
import ResponseMessage from '../../utils/responseMessage.tsx'
import Avatar from '../../utils/avatar.tsx'
import FormSubmitButtonWithLoading from '../../utils/formSubmitButtonWithLoading.tsx'
import BootstrapIcon from '../../utils/bootstrapIcon.tsx'
import useProfile from '../../hooks/useProfile.ts'
import {Navigate} from 'react-router-dom'
import {useSignOut, useUpsertProfile} from '../../api/users.ts'

interface UserProps {

}

const User: FunctionComponent<UserProps> = () => {
    const {mutate: signOut} = useSignOut()
    const {isAuthenticaded, profile} = useProfile()

    const [userName, setUserName] = useState<string>(profile?.username ?? '')
    const [firstName, setFirstName] = useState<string>(profile?.firstName ?? '')
    const [name, setName] = useState<string>(profile?.name ?? '')
    const [avatar, setAvatar] = useState<File | null>(null)

    const {mutate: upsertProfile} = useUpsertProfile()

    if (isAuthenticaded) {
        return <Navigate to={'/groups'}/>
    }

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault()
        upsertProfile({
            name: name === '' ? undefined : name,
            firstName: firstName === '' ? undefined : firstName,
            avatar: avatar ? avatar : profile?.avatar,
            username: userName,
        })
    }

    const avatarChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
        const avatar = evt.target.files?.item(0)

        if (avatar) {
            setAvatar(avatar)
        }
    }

    const avatarUrl = avatar ? URL.createObjectURL(avatar) : profile?.avatar

    return (
        <Row className="mt-4">
            <Col>
                <h2>Welcome {profile?.username}</h2>
                <ResponseMessage success={null}
                                 successText={'Profile updated'}
                                 failureText={'TO COMPLETE'}/>
            </Col>

            <Form onSubmit={handleFormSubmit}>
                <Row className="mt-4">
                    <Col xs={6} className="d-flex align-items-center justify-content-center">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label><Avatar src={avatarUrl}/></Form.Label>
                            <Form.Control type="file" className="d-none"
                                          onChange={avatarChange}/>
                        </Form.Group>

                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={userName} onChange={evt => setUserName(evt.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control type="text"
                                          value={firstName} onChange={evt => setFirstName(evt.target.value)}
                                          placeholder="First name"/>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                          value={name} onChange={evt => setName(evt.target.value)}
                                          placeholder="Name"/>
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <FormSubmitButtonWithLoading loading={false} text={'Save changes'}
                                                     loadingText={'Saving changes'}/>
                    </Col>

                    <Col xs={12} className="mt-4">
                        <div className="d-grid">
                            <Button variant="danger" onClick={() => (signOut)}>
                                <BootstrapIcon iconName={'box-arrow-right'}/>Log out
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Row>
    )
}

export default User
