import { createGlobalStyle } from "styled-components";

export const createGlobalStyle = createGlobalStyle`
*{
margin: 0; 
padding: 0; 
box-sizing: border-box;

    :focus{
        outline: 0; 
        box-shadow: 0 0 0 2px ${prps =>props.theme['green-500']}

    }


}

`
  