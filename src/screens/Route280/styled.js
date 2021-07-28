import styled from 'styled-components/native';
import color from '../../assets/color';
import fonts, { assets } from '../../../react-native.config';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${color.Branco};
`;

export const HeaderContainer = styled.View`
    height:30%;
    background-color: ${color.Azul};
    justify-content: space-between;
`;

export const Header = styled.SafeAreaView`
    justify-content:flex-end;
    height: 50%;
`;

export const HeaderTitle = styled.Text`
    color: ${color.Branco};
    font-size: 27px;
    left: 20px;
    font-family: 'Montserrat-SemiBold';
`;

export const Menu = styled.View`
    background-color: ${color.Azul};
    flex-direction: row;
    padding-left: 20px;
`;
export const MenuItem = styled.TouchableHighlight`
    padding: 20px;
    border-bottom-width:5px;
    border-bottom-color: ${props=>props.active? color.Branco : color.Azul};
`;

export const MenuItemText = styled.Text`
    color: ${color.Branco};
    font-size: 16px;
`;
export const Form = styled.View`
    height:70%;
`;

export const InputArea = styled.View`
    padding: 20px;
`;

export const InputContainer = styled.View`
    padding: 10px;
`;

export const Input = styled.TextInput`
    height: 48px;
    margin-top: -10px;
    border-radius: 8px;
    align-self: stretch;
    border: 1px solid ${color.Azul};
    padding: 0px 16px 0px 16px;
    font-family: 'Montserrat-Medium';
`;

export const InputLabel = styled.Text`
    width: 60px;
    height: 20px;
    left: -20px;
    background-color: ${color.Branco};
    text-align: center;
    margin-left: 40px;
    z-index: 1;
    color: ${color.Azul};
    font-family: 'Montserrat-Medium';
`;

export const ActionButton = styled.TouchableHighlight`
    width: 153px;
    height: 56px;
    background-color: ${color.Azul};
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 28px;
    box-shadow: 0px 2px 2px ${color.Branco};
`;

export const ActionButtonText = styled.Text`
    color: ${color.Branco};
    font-size: 16px;
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





