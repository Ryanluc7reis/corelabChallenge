import styled from 'styled-components'
import Logo from '../../layout/logo/Logo.jsx'


const StyledNav = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 57px;
  width: 100%;
  background-color: ${props => props.theme.white};
  gap: 24px;
  @media (min-width: 1440px){
    width: 100%;
}
@media (max-width: 535px){
    width: 105%;
}
@media (max-width: 482px){
    width: 115%;
}
@media (max-width: 435px){
    width: 130%;
}
@media (max-width: 412px){
    width: 510px;
}
@media (max-width: 358px){
    width: 527px;
}

`
const StyledClose = styled.img`
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 6px;
  margin-right: 20px;
`



function NavBar ({ children, image }) {
  return(
    <StyledNav >
      { children }
      <Logo />
      <StyledClose image={image}/>
    </StyledNav>

  )
  
} 
NavBar.defaultProps = {
  image:'/close.png'
}
export default NavBar