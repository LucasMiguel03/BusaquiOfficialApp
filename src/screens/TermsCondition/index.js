import React from 'react';
import {ScrollView} from 'react-native';
import { 
    Container,
    Page,
    Content,
    Text,
    ContainerButton,
    ButtonAgree,
    ButtonText 
} from './styled';


const Terms = () => {

    return(
        <Container>
            <Page>
                <Content>
                    <ScrollView style={{flex:1}}>
                        <Text>redes, sem autorização do time da Busaqui;</Text>
                        <Text> </Text>
                        <Text>- Autorizar a utilização de dados não sensíveis, </Text>
                        <Text>para análise e desenvolvimento </Text>
                        <Text>do app, além de divulgação em mídia,se necessário;</Text>
                        <Text>  </Text>
                        <Text>- Se compromenter a passar</Text>
                        <Text> para os desenvolvedores,</Text>
                        <Text>dicas e melhorias, quando questionadas.</Text>
                        <Text>questionadas.</Text>
                        <Text>  </Text>
                        <Text>Leia mais em: www.busaqui.com.br/condutadetestes</Text>
                        <Text> </Text>
                    </ScrollView>
                </Content>  
                <ContainerButton>     
                <ButtonAgree>
                    <ButtonText>Li e Concordo</ButtonText>
                </ButtonAgree>
                </ContainerButton>     
            </Page>
        </Container>

        );
    
    }


export default Terms;