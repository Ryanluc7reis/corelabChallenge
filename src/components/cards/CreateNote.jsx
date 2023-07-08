import styled from 'styled-components'
import Textarea from '../form/inputs/TextArea'
import TitleNote from '../layout/titlenote/TitleNote'

const NoteContainer = styled.div`
  background-color: ${props => props.theme.white};
  width: 530.166259765625px;
  height: 115.364501953125px;
  top: 81.8118896484375px;
  left: 443.647705078125px;
  border-radius: 3px;
  margin-top: 20px;
  border: 1px solid rgba(217, 217, 217, 1);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);


  @media (max-width: 768px) {
    width: 389.74078369140625px;
  height: 103.364501953125px;
  top: 82.0592041015625px;
  left: 92.96435546875px;
  border-radius: 25px;
  border: 1px;

  }

`

const TextContainer = styled.div`
  width: 100%;
  margin: 15px 15px;
`

export default function CreateNote({ children, image }) {
    return(
      <NoteContainer >
        {children}
        <TitleNote />
        <TextContainer>
          <Textarea placeholder='Criar nota..' />
        </TextContainer>
      </NoteContainer>
    )
  }