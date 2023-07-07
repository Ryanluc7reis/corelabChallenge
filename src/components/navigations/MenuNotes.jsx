import styled from "styled-components"

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 75%;
  width: 100%;
  margin: 5px 7px;
`
const StyledClose = styled.div`
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-position: cover;
  padding: 15px;
  margin-left: 10px;
  cursor: pointer;
`
const StyledPoteTinta = styled.div`
  background-image: url('${props => props.image2}');
  background-repeat: no-repeat;
  background-position: cover;
  width: 20px;
  height: 20px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Tinta = styled.div`
  background-image: url('${props => props.imageTinta}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  margin-right: 15px;
  margin-bottom: 2px;
  padding: 6px 6px;
`
  
 
const StyledLapis = styled.div`
  background-image: url('${props => props.image3}');
  background-repeat: no-repeat;
  background-position: cover;
  padding: 15px;
  cursor: pointer;
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`

export default function MenuNotes({ children, image, image2, image3, imageTinta }) {
  return(
    <StyledFlex>
      {children}
      <StyledDiv>
        <StyledLapis image3={image3} />
        <StyledPoteTinta image2={image2}>
          <Tinta imageTinta={imageTinta}/>
        </StyledPoteTinta>
      </StyledDiv>
      <StyledClose image={image} />
    </StyledFlex>
  )
}
MenuNotes.defaultProps = {
  image:'/close.png',
  image2:'/potetinta.png',
  image3:'/lapis.png',
  imageTinta: '/tinta.png'
}