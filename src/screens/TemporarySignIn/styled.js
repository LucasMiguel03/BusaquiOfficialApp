import styled from 'styled-components/native';
import color from '../../assets/color';

export const Container = styled.View`
    height:100%;
    width:100%;
    background-color: ${color.Branco};
    flex-direction:column;
    justify-content:center;
`;

export const Header = styled.View`
    z-index: 3;
    width:100%;
`;

export const HeaderTitle = styled.Text`
    color: ${color.PretoOriginal};
    font-size: 27px;
    /* left: 20px; */
    font-family: 'Montserrat-SemiBold';
`;

export const HeaderTitleBlue = styled.Text`
    color: ${color.Azul};
    font-size: 27px;
    /* left: 20px; */
    font-family: 'Montserrat-SemiBold';
`;

export const Form = styled.View`
    height:40%;
    justify-content:space-evenly;
    align-items:center;
`;


export const Underside = styled.View`
    height:40%;
    justify-content:space-around;
    align-items:center;  
`;


export const ActionButton = styled.TouchableHighlight`
    width: 153px;
    height: 56px;
    background-color: ${color.Azul};
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 8px;
    box-shadow: 0px 2px 2px ${color.Branco};
`;

export const ActionButtonGray = styled.TouchableHighlight`
    width: 153px;
    height: 56px;
    background-color: ${color.Cinza};
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 8px;
    box-shadow: 0px 2px 2px ${color.Branco};
`;

export const ActionButtonText = styled.Text`
    color: ${color.Branco};
    font-size: 16px;
`;

export const Icon = styled.View`
    height:55px;
    padding:10px;
    flex-direction:row;
    justify-content:center;
`;

export const ButtonFacebook = styled.TouchableOpacity`
    height:50px;
    width:50px;
    margin-right:18px;
`;
export const ImageFacebook = styled.Image`
    height:50px;
    width:50px;
`;
export const ButtonGoogle = styled.TouchableOpacity`
    height:50px;
    width:50px;
`;
export const ImageGoogle = styled.Image`
    height:50px;
    width:50px;
`;

export const Redirect = styled.View`
    height:10%;
    width:212px;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`;

export const RedirectText = styled.Text`
    font-size:15.21px;
    font-family:'Montserrat';
`;

export const RedirectButton = styled.TouchableOpacity`
    height:24px;
    width:92px;
`;

export const TextButton = styled.Text`
    font-size:15.21px;
    font-family:'Montserrat';
    color:${color.Azul};
`;

export const LoadingArea = styled.View`
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color: ${color.Preto};
    z-index: 1;
    justify-content: center;
    align-items: center;
`;