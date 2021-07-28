 import React from 'react';
import {Container,ViewImage,GpsImage,ViewText,
        Title,Subtitle,ViewButtom,
        ButtomGps,TextButtom } from './styled';
  /* TODOS OS ESTILOS ESTÃO SENDO PUXADOS DE STYLE.JS */

  export default function GPSScreen(){
    return(
      <Container>
          <ViewImage>
              <GpsImage source={require('../../assets/Images/GPS.png')}/>
          </ViewImage>
          <ViewText>
              <Title>
              Precisamos ter acesso a sua localização
              </Title>
              <Subtitle>
              Para que possamos te ajudar com informações em tempo real, precisamos que você ative seu GPS.
              </Subtitle>
          </ViewText>
          <ViewButtom>
              <TextButtom>Ativar Agora</TextButtom>
              <ButtomGps
              onpress={()=>{}}>
              </ButtomGps>
          </ViewButtom>
      </Container>
    );
  }

    