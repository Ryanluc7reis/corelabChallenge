import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 0 ;
  margin: 0 auto;
  width: 100%;
`

const Container = ({ children }) => <StyledContainer>{ children }</StyledContainer>

export default Container