import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

const ModalView = styled.View`
    flex:1;
    background-color:#ffffff;
`;

const ModalHeader = styled.View`
    flex-direction:row;
    padding:20px;
    align-items:center;
`;

const ModalClose = styled.TouchableHighlight`
    width:40px;
    height:40px;
    justify-content:center;
    align-items:center;
    background-color:#aaa;
    border-radius:20px;
`;

const ModalCloseIcon = styled.Text`
    
`;

const ModalInput = styled.TextInput`
    margin-left:20px;
    font-size:18px;
    color:#aaa;
`;

const ModalResults = styled.View`
    

`;

const ModalResult = styled.View`
    

`;

const ModalResultsText = styled.Text`
    
`;

export default (props) => {
    
    const handleClose = () => {
        props.visibleAction(false);
    }
     
    return (
        
       <Modal
        animationType="Slyde"
        transparent={false}
        visible={props.visible}
        >
            <ModalView>
                <ModalHeader>
                    <ModalClose onPress={handleClose} >
                        <ModalCloseIcon>X</ModalCloseIcon>
                    </ModalClose>
                    <ModalInput autoFocus={true} placeholder={props.title} placeholderTextColor="#aaaa"/>
                    
                </ModalHeader>
                <ModalResults>
                    
                        <ModalResultsText>

                        </ModalResultsText>
                    
                </ModalResults>
            </ModalView>

        </Modal>

    );
}