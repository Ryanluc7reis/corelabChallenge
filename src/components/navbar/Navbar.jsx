import styled from 'styled-components'
import Logo from '../logo/Logo.jsx'


const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 57px;
  width: 100%;
  background-color: ${props => props.theme.white};
  gap: 24px;
`
const StyledVector = styled.img`
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 6px;
  margin-right: 20px;
`


const NavBar = ({ children, image }) => {
  return(
    <StyledNav >
      { children }
      <Logo />
      <StyledVector image={image}/>
    </StyledNav>

  )
  
} 
NavBar.defaultProps = {
  image:'/Vector.png'
}
export default NavBar