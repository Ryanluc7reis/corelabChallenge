import styled from "styled-components"
import InputSearchNote from "../form/inputSearchNote/InputSearchNote.jsx"

const StyledFlex = styled.div`
  display: flex;
  margin-left: 25px;
  gap: 17px;
  align-items: center;

`
const StyledImage = styled.div`
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-size: contain;
  padding: 18px;
  top: 11.9407958984375px;
  left: 35.865478515625px;

`
const StyledCoreNotes = styled.h3`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: ${(props) => props.theme.logo};
`
function Logo({ children, image }) {
  return (
    <StyledFlex>
      {children} 
      <StyledImage image={image}/>
      <StyledCoreNotes>CoreNotes</StyledCoreNotes> 
      <InputSearchNote /> 
    </StyledFlex>
    
  )
}
Logo.defaultProps ={
  image:'/logo.png'
}
export default Logo