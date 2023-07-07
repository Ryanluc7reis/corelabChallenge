import styled from 'styled-components'

const StyledInput = styled.input`
  width: 550px;
  height: 28px;
  border-radius: 3px;
  border: 1px solid rgba(217, 217, 217, 1);
  outline: none;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.backgroundInput};
  font-weight: 400;
  font-size: 11px;
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-position: right 1em bottom 5px;
  padding: 0 20px;
  margin-left: 10px;
  @media (max-width: 768px){
    width: 400px;
    position: relative;
}
@media (max-width: 576px){
    width: 300px;
    padding: 20px;
    align-items: center;
    background-position: right 1em bottom 10px;
}
@media (max-width: 428px){
    width: 250px;
    padding: 20px;
    align-items: center;
    background-position: right 1em bottom 10px;
}

`

export default function InputSearchNote( { image , ...props } ) {
  return (
    <StyledInput image={image} placeholder='Pesquisar notas'{...props} />
  )
}
InputSearchNote.defaultProps = {
  image:'/search.png'
}