import styled from 'styled-components/native';
import color from '../../assets/color';

/*Estilização da Splash azul com logo busaqui (tela1)*/
export const PageSplash = styled.SafeAreaView`
   flex:1;
   background-color:${color.Azul};
   justify-content:center;
   align-items:center;
`;
 /*Estilização do Logo Busaqui*/
 export const LogoBusaqui = styled.Image`
   display:flex;
   width:243px;
   height:78.96px;
`;