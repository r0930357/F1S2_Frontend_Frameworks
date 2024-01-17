import {FunctionComponent, useContext} from 'react'
import styled from 'styled-components'
import LanguageContext from '../context/languageContext.tsx'
import {useNavigate} from 'react-router-dom'

interface SurveyProps {
    name: string,
    id: string,
}

const SurveyContainer = styled.div`
  background-color: #f6f6f6;
  border-radius: 5px;
  padding: 1em;
  margin: 1em 0;
`

const SurveyButton = styled.button`
  width: 100%;
  box-shadow: 7px 2px 8px 1px rgba(18,89,46,0.67);
  background: #3a5d9b;
  color: #f5f5f5;
  height: 2em;
  margin: .5em .5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover {
    &:hover {
      cursor: pointer;
    }

    &:active {
      box-shadow: 7px 2px 8px 1px #eeeeee;
    }
  }
  
  &:disabled {
    &:hover {
      cursor: default;
    }
    &:active {
      box-shadow: 7px 2px 8px 1px rgba(18,89,46,0.67);
    }
    background: #AAAAAA;
  }
`
const Survey: FunctionComponent<SurveyProps> = ({name, id}) => {
    const {language} = useContext(LanguageContext)
    const navigate = useNavigate()

    return (
        <SurveyContainer>
            <h3>{name}</h3>

            <SurveyButton onClick={() => navigate(`${id}`)}>
                {language === 'en' ? 'Edit' : 'Bewerk'}
            </SurveyButton>

        </SurveyContainer>
    )
}

export default Survey
