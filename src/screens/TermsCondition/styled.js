import styled from 'styled-components/native';
import color from '../../assets/color.js';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:${color.Transparente};
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

export const Page = styled.View`
    height:79%;
    width:83%;
    background-color:${color.Branco};
    border-bottom-width:3px;
    border-color:${color.CinzaEscuro};
`;

export const Content = styled.View`
    height:78%;
    width:66%;
    margin-top:9.89%;
    margin-bottom:18.74%;
    margin-right:13%;
    margin-left:13%; 
    
`;

export const Text = styled.Text`
    font-size:15.31px;
    color:${color.AzulEscuro};
`;

export const ContainerButton = styled.View`
    margin-top:15px;
    justify-content:center;
    align-items:center;
`;


export const ButtonAgree = styled.TouchableOpacity`
    width:161px;
    height:56px;
    background-color:${color.Azul};
    border-radius:8px;
    
`;

export const ButtonText = styled.Text`
    font-size:18px;
    font-weight:bold;
    color:${color.Branco};
    padding:14px 18px;
    
`;

