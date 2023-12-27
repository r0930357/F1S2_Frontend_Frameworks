const MultipleSelectQuestion = ({title, options}) => {

    return (
        <div className={'question'}>
            <div>
                <h3>{title}</h3>
                <fieldset disabled={true}>
                    <legend>Choose all that apply</legend>
                    {options.map(o => (
                        <div key={o.id}>
                            <input type="checkbox" id={o.id}/>
                            <label>{o.name}</label>
                        </div>
                    ))}
                </fieldset>
            </div>
            <div>
                <button>
                    X
                </button>
            </div>
        </div>
    )
}

export default MultipleSelectQuestion
