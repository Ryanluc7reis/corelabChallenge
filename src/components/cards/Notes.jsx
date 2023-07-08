
import styled from 'styled-components'
import CreateNote from './CreateNote'
import TitleNote from '../layout/titlenote/TitleNote'
import H3 from '../typography/H3'
import { useState, useEffect, useRef } from 'react'
import ColorPicker from '../form/inputs/ColorPicker'

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width:350px) {
      margin-left: 40px;
    }
    @media (max-width:430px) {
      margin-left: 50px;
    }
`

const StyledNote = styled.div`
  width: 390px;
  height: 437.5882568359375px;
  top: 224.4471435546875px;
  left: 105.284423828125px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  padding: 15px;
  background-color: #04db6f;

`
const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 18px 65px;
  gap: 23px;
  @media (max-width: 768px){
    justify-content: center;
  }   
`
const StyledFlexMenuNote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 77%;
  width: 100%;
  margin: 5px 7px;
`
const MenuNotes = styled.div`
   display: flex;
  align-items: center;
`
const StyledPoteTinta = styled.div`
  background-image: url('${props => props.imagePoteTinta}');
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
  background-image: url('${props => props.imageLapis}');
  background-repeat: no-repeat;
  background-position: cover;
  padding: 15px;
  cursor: pointer;
`
const StyledClose = styled.div`
background-image: url('${props => props.imageExcluir}');
background-repeat: no-repeat;
background-position: cover;
padding: 15px;
margin-left: 10px;
cursor: pointer;
`
const StyledColorPicker = styled.div`
  width: 555px;
  height: 46.46482849121094px;
  border: 1px solid rgba(217, 217, 217, 1);
  background-color: ${props => props.theme.white};
  position: absolute;
  display: ${props => props.show ? 'flex' : "none"};
  margin-top: 10px;
  border-radius: 10px;
   @media (max-width: 768px){
    flex-wrap: wrap;
    width: 286.93896484375px;
    height: 96.579345703125px;
    border-radius: 9px;
    border: 1px;
    margin-top: 10px;

    }
`
const StyledFlexColorPicker = styled.div`
    width: 100%;
    height: 100%;
  `
 export default function Notes({ children, imageTinta, imageLapis, imagePoteTinta, imageExcluir  }){
  const [show, setShow] = useState(false)
 const menuRef = useRef(null)

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


  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  const appStyle = {
  backgroundColor: selectedColor,
  }

    return(
      <>
        <StyledContainer>
          {children}
          <CreateNote />
          <StyledFlex>          
            <StyledNote style={appStyle} >
                <TitleNote />
                <H3>Clique ou arraste o arquivo para esta área para fazer o upload</H3>
                <StyledFlexMenuNote >
                  <MenuNotes>
                    <StyledLapis imageLapis={imageLapis} />
                      <StyledPoteTinta onClick={() => setShow(!show) } ref={menuRef} imagePoteTinta={imagePoteTinta}>
                        <StyledFlexColorPicker>
                            <StyledColorPicker show={show} >
                              <ColorPicker style= {{backgroundColor:"#BAE2FF "}}color="#BAE2FF" onClick={handleColorClick} />
                              <ColorPicker style= {{backgroundColor:"#B9FFDD "}}color="#B9FFDD" onClick={handleColorClick} />
                              <ColorPicker style= {{backgroundColor:"#FFE8AC"}}color="#FFE8AC" onClick={handleColorClick} /> 
                              <ColorPicker style= {{backgroundColor:"#FFCAB9"}}color="#FFCAB9" onClick={handleColorClick} />
                              <ColorPicker style= {{backgroundColor:"#F99494"}}color="#F99494" onClick={handleColorClick} /> 
                              <ColorPicker style= {{backgroundColor:"#9DD6FF"}}color="#9DD6FF" onClick={handleColorClick} /> 
                              <ColorPicker style= {{backgroundColor:"#ECA1FF"}}color="#ECA1FF" onClick={handleColorClick} /> 
                              <ColorPicker style= {{backgroundColor:"#DAFF8B"}}color="#DAFF8B" onClick={handleColorClick} /> 
                              <ColorPicker style= {{backgroundColor:"#FFA285"}}color="#FFA285" onClick={handleColorClick} /> 
                              <ColorPicker style= {{backgroundColor:"#CDCDCD"}}color="#CDCDCD" onClick={handleColorClick} /> 
                              <ColorPicker style= {{backgroundColor:"#979797"}}color="#979797" onClick={handleColorClick} /> 
                              <ColorPicker style= {{backgroundColor:"#A99A7C"}}color="#A99A7C" onClick={handleColorClick} /> 

                            </StyledColorPicker>
                        </StyledFlexColorPicker>                       
                        <Tinta imageTinta={imageTinta}/>
                      </StyledPoteTinta>
                  </MenuNotes>
                  <StyledClose imageExcluir={imageExcluir} />
                </StyledFlexMenuNote>
            </StyledNote>
            <StyledNote>
                <TitleNote />
                <H3>Clique ou arraste o arquivo para esta área para fazer o upload</H3>
                <MenuNotes />
            </StyledNote>
            <StyledNote>
                <TitleNote />
                <H3>Clique ou arraste o arquivo para esta área para fazer o upload</H3>
                <MenuNotes />
            </StyledNote>
            <StyledNote>
                <TitleNote />
                <H3>Clique ou arraste o arquivo para esta área para fazer o upload</H3>
                <MenuNotes />
            </StyledNote>  
          </StyledFlex>
        </StyledContainer>
        
      </>
    )     
  }
  Notes.defaultProps = {
    imageExcluir:'/close.png',
    imagePoteTinta:'/potetinta.png',
    imageLapis:'/lapis.png',
    imageTinta: '/tinta.png'
  }
