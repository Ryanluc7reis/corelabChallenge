import styled from "styled-components"

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin: 9px 20px;

`
const StyledLinha = styled.div`
  width: auto;
  top: 121.78662109375px;
  left: 443.29541015625px;
  border: 1px solid rgba(217, 217, 217, 1);
  background: rgba(217, 217, 217, 1);
`
const StyledStar = styled.div`
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-position: cover;
  width: 20px;
  height: 20px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px 15px;
  cursor: pointer;
`
const TintaStar = styled.div`
  background-image: url('${props => props.imageTintaStar}');
  background-repeat: no-repeat;
  background-size: contain;
  padding: 7px;
`
export default function TitleNote({ children, image, imageTintaStar }) {
  return (
    <>
     <StyledTitle>
      {children}
        <Title>Título</Title>
        <StyledStar image={image}>
          <TintaStar imageTintaStar={imageTintaStar} />
        </StyledStar>
      </StyledTitle>
        <StyledLinha />
          
    </>
         
  )
}
TitleNote.defaultProps = {
  image:'/star.png',
  imageTintaStar:'/tintastar.png'
}
