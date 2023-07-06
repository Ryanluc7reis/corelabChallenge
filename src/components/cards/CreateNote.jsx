import styled from 'styled-components'
import Textarea from '../form/inputs/TextArea'

const NoteContainer = styled.div`
  background-color: ${props => props.theme.white};
  width: 530.166259765625px;
  height: 110.364501953125px;
  top: 81.8118896484375px;
  left: 443.647705078125px;
  border-radius: 3px;
  margin-top: 20px;
  border: 1px solid rgba(217, 217, 217, 1);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);


  @media (max-width: 500px) {
    padding: 20px;
  }
`

const TextContainer = styled.div`
  width: 100%;
  margin: 15px 15px;
`
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin: 15px 20px;

`
const StyledLinha = styled.div`
  width: 530.5185546875px;
  top: 121.78662109375px;
  left: 443.29541015625px;
  border: 1px solid rgba(217, 217, 217, 1);
  background: rgba(217, 217, 217, 1);
`
const StyledStar = styled.img`
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
  margin: 3px 15px;
  cursor: pointer;
`
  function CreateNote({ children, image }) {
    return(
      <NoteContainer >
        {children}
        <StyledTitle>
            <Title>Título</Title>
            <StyledStar image={image} />
          </StyledTitle>
          <StyledLinha />
        <TextContainer>
          <Textarea placeholder='Criar nota..' />
        </TextContainer>
      </NoteContainer>
    )
  }
  CreateNote.defaultProps = {
    image:'/star.png'
  }

  export default CreateNote