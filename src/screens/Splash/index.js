import React from 'react';
import {PageSplash,LogoBusaqui} from '../Splash/styled'


export default ()=>{
  return (
      /* Container da Primeira tela (Page) */
    <PageSplash>      
      {/* Logo centralizada em linha e coluna */}
        <LogoBusaqui source={require('../../assets/Images/Icons/logoBusaqui.png')} resizeMode="contain"/>
    </PageSplash>  
  );
}