

import styled from "styled-components"

const StyledColorPicker = styled.div`
  width: 36.7080078125px;
  height: 36.7080078125px;
  top: 662.5063400268555px;
  left: 389.32763671875px;
  border-radius: 25px;
  margin: 4px 5px;
  cursor: pointer;
  `
 
export default function ColorPicker({ color, onClick, ...props }){
  return ( 

        <StyledColorPicker  onClick={() => onClick(color)} {...props}/>
  
  )

}
