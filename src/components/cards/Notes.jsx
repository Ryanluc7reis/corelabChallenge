import styled from 'styled-components'
import CreateNote from './CreateNote'
import TitleNote from '../layout/titlenote/TitleNote'
import H3 from '../typography/H3'
import MenuNotes from '../navigations/MenuNotes'

const StyledNote = styled.div`
  width: 390px;
  height: 437.5882568359375px;
  top: 224.4471435546875px;
  left: 105.284423828125px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  padding: 15px;
  background-color: #06f37c;

`
const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 18px 60px;
  gap: 23px;
`
 export default function Notes({ image }){
    return(
      <>

        <CreateNote />
        <StyledFlex>          
          <StyledNote>
              <TitleNote />
              <H3>Clique ou arraste o arquivo para esta área para fazer o upload</H3>
              <MenuNotes />
          </StyledNote>
          <StyledNote>
              <TitleNote />
              <H3>Clique ou arraste o arquivo para esta área para fazer o upload</H3>
              <MenuNotes />
          </StyledNote>
          <StyledNote>
              <TitleNote />
              <H3>Clique ou arraste o arquivo para esta área para fazer o upload</H3>
              <MenuNotes />
          </StyledNote>
          <StyledNote>
              <TitleNote />
              <H3>Clique ou arraste o arquivo para esta área para fazer o upload</H3>
              <MenuNotes />
          </StyledNote>  
        </StyledFlex>
        
      </>
    )     
  }
