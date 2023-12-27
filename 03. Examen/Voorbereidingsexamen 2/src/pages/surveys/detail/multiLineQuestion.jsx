const MultiLineQuestion = ({title}) => {
    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <textarea disabled />
            </div>
            <div>
                <button>X</button>
            </div>
        </div>
    )
}

export default MultiLineQuestion
