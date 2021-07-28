import styled from 'styled-components/native';
import color from '../../assets/color';

export const Container = styled.SafeAreaView`
    flex:1; 
`;

export const Header = styled.View`
    height: 20%;
    flex-direction: row;
    /* background-color: green; */
    align-items: center;
    background-color: ${color.Branco};
`;

export const ListContainer = styled.View`
    height: 80%;
`;

export const ArrowButton = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    margin-left: 28px;
`;

export const ArrowButtonImage = styled.Image`
    width: 24px;
    height: 24px;
`;

export const HeaderText = styled.Text`
    color: ${color.Azul};
    font-family: 'Montserrat-Bold';
    font-size: 16px;
    margin-left: 11px;
`;

