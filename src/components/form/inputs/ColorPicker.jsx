

import styled from "styled-components"

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
  const StyledFlex = styled.div`
    width: 100%;
    height: 100%;
  `
  const StyledEclipse1 = styled.div`
   background-image: url('${props => props.image1}');
   background-repeat: no-repeat;
   padding: 20px;
   margin: 3px 3px;
   `
  const StyledEclipse2 = styled.div`
    background-image: url('${props => props.image2}');
    background-repeat: no-repeat;
    padding: 20px;
    margin: 3px 3px;
    `
  const StyledEclipse3 = styled.div`
     background-image: url('${props => props.image3}');
     background-repeat: no-repeat;
     padding: 20px;
     margin: 3px 3px;
     `
  const StyledEclipse4 = styled.div`
      background-image: url('${props => props.image4}');
      background-repeat: no-repeat;
      padding: 20px;
      margin: 3px 3px;
      `
  const StyledEclipse5 = styled.div`
       background-image: url('${props => props.image5}');
       background-repeat: no-repeat;
       padding: 20px;
       margin: 3px 3px;
       `
   const StyledEclipse6 = styled.div`
        background-image: url('${props => props.image6}');
        background-repeat: no-repeat;
        padding: 20px;
        margin: 3px 3px;
        `
    const StyledEclipse7 = styled.div`
         background-image: url('${props => props.image7}');
         background-repeat: no-repeat;
         padding: 20px;
         margin: 3px 3px;
         `
    const StyledEclipse8 = styled.div`
          background-image: url('${props => props.image8}');
          background-repeat: no-repeat;
          padding: 20px;
          margin: 3px 3px;
          `
    const StyledEclipse9 = styled.div`
           background-image: url('${props => props.image9}');
           background-repeat: no-repeat;
           padding: 20px;
           margin: 3px 3px;
           `
     const StyledEclipse10 = styled.div`
            background-image: url('${props => props.image10}');
            background-repeat: no-repeat;
            padding: 20px;
            margin: 3px 3px;
            `
      const StyledEclipse11 = styled.div`
             background-image: url('${props => props.image11}');
             background-repeat: no-repeat;
             padding: 20px;
             margin: 3px 3px;
             `
      const StyledEclipse12 = styled.div`
              background-image: url('${props => props.image12}');
              background-repeat: no-repeat;
              padding: 20px;
              margin: 3px 3px;
              `

export default function ColorPicker({ 
  children, image, image1,image2,image3,image4,image5,image6,image7
  ,image8,image9,image10,image11,image12, ...props }){
  return ( 
      <StyledFlex>
        {children}
        <StyledColorPicker  {...props}>
          <StyledEclipse1 image1={image1} />
          <StyledEclipse2 image2={image2} />
          <StyledEclipse3 image3={image3} />
          <StyledEclipse4 image4={image4} />
          <StyledEclipse5 image5={image5} />
          <StyledEclipse6 image6={image6} />
          <StyledEclipse7 image7={image7} />
          <StyledEclipse8 image8={image8} />
          <StyledEclipse9 image9={image9} />
          <StyledEclipse10 image10={image10} />
          <StyledEclipse11 image11={image11} />
          <StyledEclipse12 image12={image12} />
        </StyledColorPicker>
      </StyledFlex>
      

      
  )

}
ColorPicker.defaultProps = {
  image1:'/Ellipse 1.png',
  image2:'/Ellipse 2.png',
  image3:'/Ellipse 3.png',
  image4:'/Ellipse 4.png',
  image5:'/Ellipse 5.png',
  image6:'/Ellipse 6.png',
  image7:'/Ellipse 7.png',
  image8:'/Ellipse 8.png',
  image9:'/Ellipse 9.png',
  image10:'/Ellipse 10.png',
  image11:'/Ellipse 11.png',
  image12:'/Ellipse 12.png',

  
  
}