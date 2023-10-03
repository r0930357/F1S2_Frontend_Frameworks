import {FunctionComponent} from 'react'
import Avatar from './avatar.tsx'
import CommentSection from './commentSection.tsx'
import {IComment} from '../models/IComment.ts'

const CommentCard: FunctionComponent<IComment> = ({avatar, ...rest}) => {

    return (
        <div className="card">
            <Avatar avatarURL={avatar}/>
            <CommentSection {...rest}/>
        </div>
    )
}

export default CommentCard