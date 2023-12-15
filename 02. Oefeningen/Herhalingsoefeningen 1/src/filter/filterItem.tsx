import {FunctionComponent} from 'react'
import IOption from '../models/IOption.ts'

interface FilterItemProps extends IOption {
    handleToggleOption: () => void
}

const FilterItem: FunctionComponent<FilterItemProps> = ({name, isChecked, isRecommended, id, handleToggleOption}) => {
    return (
        <div>
            <input type={'checkbox'} checked={isChecked} id={id} onChange={handleToggleOption}/>
            <label htmlFor={id}>{name}</label>
            {isRecommended && <span>&nbsp; Aanbevolen</span>}
        </div>
    )
}

export default FilterItem