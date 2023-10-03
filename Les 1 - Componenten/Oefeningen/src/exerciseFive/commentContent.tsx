import {FunctionComponent} from 'react'

interface CommentContentProps {
    content: string
}

const CommentContent: FunctionComponent<CommentContentProps> = ({content}) => {
    return (
        <div className="content">
            {content}
        </div>
    )
}

export default CommentContent