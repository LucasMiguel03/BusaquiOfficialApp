import React, {useState} from 'react'
import { FlatList, ScrollView } from "react-native"

import { StackActions, NavigationActions } from 'react-navigation';

import {BusInfoCard} from '../../components/BusInfoCard'

import {
    Container,Header,ListContainer,ArrowButton,ArrowButtonImage,
    HeaderText
} from './styled.js'

const BusList = (props) => {

    const [myRoutes, setMyRoutes] = useState([]);

    return(
        <Container>
            <Header>
                <ArrowButton>
                    <ArrowButtonImage source={require('../../assets/Images/Icons/Arrow.png')}/>
                    {/*TRANSFORMAR EM SVG*/}
                </ArrowButton>

                <HeaderText>
                    Linhas disponíveis
                </HeaderText>
            </Header>

            <ListContainer>
                {/* <FlatList
                    renderItem={(item) => (
                        <BusInfoCard/>
                    )}/> */}
                <ScrollView style={{flex:1}}>
                    <BusInfoCard
                    BusID={177}
                    RouteName="Alegria X Campos Elísios"
                    Time="5 min"
                    />
                    <BusInfoCard
                    BusID={280}
                    RouteName="Bulhões X Campos Elísios"
                    Time="6 min"
                    />
                    <BusInfoCard
                    BusID={276}
                    RouteName="Campos Elísios X Alegria"
                    Time="10 min"
                    />
                    <BusInfoCard
                    BusID={275}
                    RouteName="Paraíso X Alegria"
                    Time="20 min"
                    />
                    <BusInfoCard
                    BusID={520}
                    RouteName="Alegria X Bulhões"
                    Time="15 min"
                    />
                    <BusInfoCard
                    BusID={274}
                    RouteName="Campos Elísios X Bulhões"
                    Time="12 min"
                    />
                </ScrollView>
            </ListContainer>
        </Container>
    )
}

export default BusList; 