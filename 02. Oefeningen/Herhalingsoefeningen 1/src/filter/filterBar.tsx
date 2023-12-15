import {FunctionComponent, useState} from 'react'
import ICategory from '../models/ICategory.ts'
import {getCategories, toggleOptionSelected} from '../api/dataApi.ts'
import Filter from './filter.tsx'

interface FilterBarProps {

}

const FilterBar: FunctionComponent<FilterBarProps> = () => {
    const [categories, setCategories] = useState<ICategory[]>(getCategories())
    const handleToggleOption = (categorieId: string, optionId: string) => {
        toggleOptionSelected(categorieId, optionId)
        setCategories(getCategories())
    }
    return (
        <>
            {categories.map(c => <Filter {...c} key={c.id} handleToggleOption={handleToggleOption}/>)}
        </>
    )
}

export default FilterBar