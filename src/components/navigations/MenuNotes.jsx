import styled from "styled-components"
import { useState, useEffect, useRef } from "react"
import ColorPicker from "../form/inputs/ColorPicker"

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
 const [show, setShow] = useState(false)
 const menuRef = useRef(null)
 const [backgroundColor, setBackgroundColor] = useState('transparent');

 const handleclick = () => {
   setBackgroundColor('red');
 };
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)){
        setShow(false)
      }
    }
    document.addEventListener('click',handleClickOutSide,true)

    return () => {
      document.removeEventListener('click', handleClickOutSide,true)
    }
  },[menuRef])
  useEffect(()=> {
    const button = document.getElementById('color');
    button?.addEventListener('click', handleclick())
  },[])


  return(
    <StyledFlex>
      {children}
      <StyledDiv>
        <StyledLapis image3={image3} />
        <StyledPoteTinta id='color' onClick={() => setShow(!show) } ref={menuRef} image2={image2}>
           <ColorPicker show={show}   /> 
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