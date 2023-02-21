import styled from 'styled-components'
// Define our button
export const Button = styled.button`
  width:5em;
  height:5em;
  font-size: 1em;
  margin: 4em;
  padding: 0.25em 1em;
  border-radius: 3px;

//    Color the border and text with theme.main 
  background: ${props => props.color};
  color:white;
  border: 2px solid ${props => props.color};
`;

export const ColorNotify = styled.h1`
    justify-content : center;
    align-content : center;
    
    font-size : 8em;
    color:${props => props.color}
   
`