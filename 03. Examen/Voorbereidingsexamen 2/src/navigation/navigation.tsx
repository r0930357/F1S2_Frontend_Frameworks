import {FunctionComponent, useContext} from 'react'
import {Link} from 'react-router-dom'
import LanguageContext from '../context/languageContext.tsx'

interface NavigationProps {

}

const Navigation: FunctionComponent<NavigationProps> = () => {
    const {language, setLanguage} = useContext(LanguageContext)

    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to={'/'}>{language === 'en' ? 'My surveys' : 'Mijn vragenlijsten'}</Link>
                </li>
                <li>
                <select value={language} onChange={evt => setLanguage(evt.target.value as 'en' | 'nl')}>
                    <option value={'en'}>English</option>
                    <option value={'nl'}>Nederlands</option>
                </select>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
