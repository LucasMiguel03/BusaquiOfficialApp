import React, {useState, useCallback} from 'react'
import { TouchableHighlight } from 'react-native'
import color from '../../assets/color';

import {Container,TextContainer,LogoRoute,RouteTitle,InfoContainer,
        DurationText,DurationInfo,LogoContainer,BusNumber} from './styled.js'

//CARTÃO CONTENDO AS INFORMAÇÕES DE UMA LINHA

export const BusInfoCard = (props) => {
    let BusID = props.BusID
    let RouteName = props.RouteName
    let Time = props.Time

    const [IsPressed, setIsPressed] = useState(false);

    const handlePressed = useCallback(() => {
        setIsPressed(true);
    }, []);

    const handleUnpressed = useCallback(() => {
        setIsPressed(false);
    }, []);

    return(
        <TouchableHighlight
        onPressIn={handlePressed}
        onPressOut={handleUnpressed}
        activeOpacity={100}
        >
        <Container 
        style={IsPressed ?  
            {backgroundColor: color.Azul} : 
            {backgroundColor: color.Branco}}>

            <LogoContainer>
                <LogoRoute
                source={IsPressed ? require('../../assets/Images/Icons/WhiteBusNumber.png')
                        : require('../../assets/Images/Icons/BlackBusNumber.png')}
                />

                <BusNumber 
                style={IsPressed ?  
                        {color: color.Branco,
                        backgroundColor: color.Azul} : 
                        {color: color.PretoBusaqui,
                        backgroundColor: color.Branco}}>
                    {BusID}
                </BusNumber>
            </LogoContainer>

            <TextContainer>
                <RouteTitle
                style={IsPressed ?  
                    {color: color.Branco} : 
                    {color: color.PretoBusaqui}}>

                    {RouteName}
                </RouteTitle>

                <InfoContainer>
                    <DurationText
                    style={IsPressed ?  
                    {color: color.Branco} : 
                    {color: color.Cinza}}>
                    
                        Chegada em
                    </DurationText>

                    <DurationInfo
                    style={IsPressed ?  
                    {color: color.Branco} : 
                    {color: color.PretoBusaqui}}>

                        {` ${Time}`}
                    </DurationInfo>
                </InfoContainer>
            </TextContainer>
        </Container>
        </TouchableHighlight>
    )
}