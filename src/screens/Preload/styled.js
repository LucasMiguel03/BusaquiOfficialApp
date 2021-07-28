import styled from 'styled-components/native';
import color from '../../assets/color';

 /* --------- Estilização e criação de components (tela do Login Inical)--------*/

     /* Estilização do Container */
export const ScreenInitialLogin = styled.KeyboardAvoidingView`
   flex:1;
   justify-content:center;
   align-items:center;
   display:flex;
`;
    /* Estilização da imagem */
export const Image = styled.ImageBackground`
   width: 100%;
   height: 100%;
`;
   /* Estilização do container do conteúdo */
export const ViewStylePage = styled.View`
   flex-direction:column;
   justify-content:space-evenly;
   align-items:center;
   display:flex;
   height: 100%;
`;
   /* Estilização do Logo Busaqui */
export const LogoBusaqui = styled.Image`
   width:189.5px;
   height:61.9px;
`;
   /* Estilização do Container dos Títulos */
export const ContainerText = styled.View`
   height:50%;
`;
   /* Estilização do container do título */
export const ViewStyleTitle = styled.View`
   height:70%;
   justify-content:center;
   align-items:center;
`;                         
   /* Estilização do título */
export const Title = styled.Text`
   font-family: 'Montserrat-Medium';
   font-size:44px;
   color:${color.Branco};
   text-shadow: 1px 1px 1px ${color.CinzaEscuro};
   text-align: center;
`;
   /* Estilização do container do subtítulo */
export const ViewStyleSubtitle = styled.View`
   height:30%;
   justify-content:center;
   align-items:center;
`;
        /* Estilização do subtítulo */
export const Subtitle = styled.Text`
   font-family: 'Montserrat-Regular';
   font-size:15px;
   color:${color.Branco}; 
   text-shadow: 1px 1px 1px ${color.Cinza};
   text-align: center;
`;
       /*Estilização do botão de Entrar em Login */
export const ButtomSubscribe = styled.TouchableHighlight`
   width: 169px;
   height: 56px;
   border: 2px solid ${color.Branco};
   border-radius: 8px;
   justify-content:center; 
   align-items: center; 
   background-color: ${color.CinzaSemiTransparente};
`;
       /*Estilização do texto do botão de Entrar em Login */
export const ButtomSubscribeText = styled.Text`
   color: ${color.Branco};
   font-size: 15px;
   font-family: 'Montserrat-Medium';
`;

 