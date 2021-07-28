import React, {useState, useEffect} from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity,  } from 'react-native';
import { Modal } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { MapsAPI } from '../../../services/config';
import color from '../../../assets/color';

// import { Container } from './styled';
import { Container,
         TouchableCloseVertical,
         ViewCloseMiddle,
         TouchableCloseHorizontal,
         Content,
         BusStopImage,
         HeaderLine,
         Title,
         ButtonLike,
         IconLike,
         ButtonShare,
         IconShare,
         AddressText,
         Footer,
         ButtonBusLine,
         BusText,
         PearsonIcon,
         Time
        } from './styled';

// import color from '../assets/color';

export const ModalBusStopInfo = (props) => {

    let address = props.address;
    let time = props.time;
    let visible = props.visible;

    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [improvedTime, setImprovedTime] = useState("");
    // const [closeModal, setCloseModal] = useState(true);

    useEffect(()=>{
        if(time.toFixed(0) >= 60){
            let timeWrong = 0;
            timeWrong = time.toFixed(0);
            let hour = 0;

            for(hour; timeWrong >= 60;hour++){
                timeWrong = timeWrong - 60;
            }

            setMinutos(timeWrong);
            setHoras(hour);
        }
        else {
            setImprovedTime(time.toFixed(0) + " min")
        }

    },[time])

    useEffect(()=>{
        if(time > 60){
            setImprovedTime(horas + "h "+minutos+"min")
        }else if(time = 60){
            setImprovedTime(1+"h")
        }
    },[minutos, horas])

    const handleCloseModal = () => {   
        props.visibleAction(false);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            style={{flex:1}}
        > 
            <Container>
                <TouchableCloseVertical  
                    onPress={handleCloseModal}
                />
                <ViewCloseMiddle>
                    <TouchableCloseHorizontal
                        onPress={handleCloseModal}
                    />
                    <Content>
                        <BusStopImage></BusStopImage>
                        <HeaderLine>
                            <Title>
                                Ponto de embarque
                            </Title >
                            <ButtonLike>
                                <IconLike source={require('../../../assets/images/Icons/like.png')}></IconLike>
                            </ButtonLike>
                            <ButtonShare>
                                <IconShare source={require('../../../assets/images/Icons/share.png')}></IconShare>
                            </ButtonShare>
                        </HeaderLine>

                        <AddressText>
                            {address}
                        </AddressText>
                        <Footer>
                            <ButtonBusLine>
                                <BusText>Ver linhas</BusText>
                            </ButtonBusLine>
                            <PearsonIcon source={require('../../../assets/images/Icons/WalkingPerson.png')}></PearsonIcon>
                            <Time>
                            {improvedTime}
                            </Time>
                        </Footer>
                    </Content>

                    <TouchableCloseHorizontal
                        onPress={handleCloseModal}
                    />
                </ViewCloseMiddle>

                <TouchableCloseVertical
                    onPress={handleCloseModal}
                />
            </Container>

        </Modal>
    )
}