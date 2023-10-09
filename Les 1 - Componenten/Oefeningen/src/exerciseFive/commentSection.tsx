import {FunctionComponent} from 'react'
import Author from './author.tsx'
import CommentContent from './commentContent.tsx'

interface CommentSectionProps {
    firstName: string
    lastName: string
    content: string
}

const CommentSection: FunctionComponent<CommentSectionProps> = ({firstName, lastName, content}) => {
    return (
        <div className={'commentSection'}>
            <Author firstName={firstName} lastName={lastName}/>
            <CommentContent content={content}/>
        </div>
    )
}

export default CommentSection