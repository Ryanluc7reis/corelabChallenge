import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
`

const Container = ({ children }) => <StyledContainer>{ children }</StyledContainer>

export default Container