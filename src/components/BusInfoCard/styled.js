import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    height:105px;
    align-items: center;
`;

export const TextContainer = styled.View`
    justify-content:space-around;
    height:60px;
    margin-left:29px;
`;

export const LogoRoute = styled.Image`
    width:41px;
    height:60px;
`;

export const LogoContainer = styled.View`
    width:42px;
    height:61px;
    align-items: center;
    margin-left:31px;
`;

export const BusNumber = styled.Text`
    width:36px;
    font-family: 'Montserrat-SemiBold';
    text-align: center;
    font-size: 16px;
    top: -29px;
`;

export const RouteTitle = styled.Text`
    font-family: 'Montserrat-Bold';
    font-size: 16px;
`;

export const InfoContainer = styled.View`
    flex-direction:row;
    /* background-color:yellow; */
`;

export const DurationText = styled.Text`
    font-family: 'Montserrat-Medium';
    font-size: 14px;
`;

export const DurationInfo = styled.Text`
    font-family: 'Montserrat-SemiBold';
    font-size: 14px;
`;