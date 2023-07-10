
import styled from "styled-components"
import Title from "../../typography/Title"
import { useFavoriteContext } from "../../../contexts/Favorites";
import { useState } from "react";



const StyledLinha = styled.div`
  width: auto;
  top: 121.78662109375px;
  left: 443.29541015625px;
  border: 1px solid rgba(217, 217, 217, 1);
  background: rgba(217, 217, 217, 1);
`
const StyledFlex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  align-items: center;
  justify-content: center;
  
  
`
const StyledTintaStar = styled.div`
  background-image: url('${props => props.imageTintaStar}');
  background-repeat: no-repeat;
  background-size: cover;
 padding: 8px;
 display: ${props => props.show ? 'flex' : "none"};
`




export default function TitleNote({ children,  id, image,imageTintaStar }) {
  const { favorite, addFavorite } = useFavoriteContext()
  const isFavorite = favorite.some((fav) => fav.id === id)
  const [ star , setStar ] = useState(false)
  //const icone = !isFavorite ? iconFavorite : iconUnFavorite
  const handleClick = () => {
   if(setStar(!star) === !isFavorite){  
    return addFavorite({id})

   }
  }
  return (
    <>
    <StyledFlex >
        {children}
        <Title>Título</Title>
        <StyledStar   image={image } onClick={handleClick} >
          <StyledTintaStar show={star} imageTintaStar={imageTintaStar}   />
        </StyledStar>
    </StyledFlex>
    <StyledLinha />
     
          
    </>
         
  )
}
TitleNote.defaultProps ={
  image: '/iconUnFavorite.png',
  imageTintaStar: '/iconFavorite.png'
}