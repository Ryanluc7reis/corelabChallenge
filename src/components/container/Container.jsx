import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (max-width: 380px){
    margin-left: 20px;
  }
  @media (max-width: 362px){
    margin-left: 60px;
  }

`

const Container = ({ children }) => <StyledContainer >{ children }</StyledContainer>

export default Container