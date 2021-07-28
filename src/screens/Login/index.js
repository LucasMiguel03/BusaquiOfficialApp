import React, { useState } from 'react';


import { StatusBar, Platform, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import useAppBusaquiApi from '../../services/useAppBusaquiApi';
import color from '../../assets/color';
import { 
  Container, 
  HeaderContainer,
  Header,  
  HeaderTitle, 
  Menu, 
  MenuItem, 
  MenuItemText,
  Form,
  InputArea,
  InputContainer, 
  Input, 
  InputLabel, 
  ActionButton, 
  ActionButtonText, 
  LoadingArea  
} from './styled';

const Page = (props) => {
    const  api = useAppBusaquiApi();
    const [activeMenu, setActiveMenu] = useState('signin');
    const [name, setName] =  useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
      if(email && password) {
        setLoading(true);
        const res = await api.signin(email, password);
        setLoading(false);
        if(res.error) {
          alert(res.error);
        } else {
          // 1. Guarda token no reducer
          // 2.  Redirecionar para o home, no caso a rota principal
          props.setToken(res.token);
          props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'HomeDrawer'})
            ]
        }));
        }

      }
    }
    const handleSignUp = async () => {
        if(name && email && password) {
          setLoading(true);
          const res = await api.signup(name, email, password);
          setLoading(false); 
          if(res.error) {
            alert(res.error);
          } else {
            // 1. Guarda token no reducer
            // 2.  Redirecionar para o home, no caso a rota principal
            props.setToken(res.token);
            props.navigation.dispatch(StackActions.reset({
              index:0,
              actions:[
                  NavigationActions.navigate({routeName:'HomeDrawer'})
              ]
          })); 
          }
  
        }
    }

    return (
      <Container behavior={Platform.OS === 'ios'?'padding':null}>
        <StatusBar barStyle="light-content" />

        {/* CONTAINER DE TODOS O CABEÇALHO: TÍTULO + MENU */}
        <HeaderContainer>

          <Header>
            {/* QUEBRA DE LINHA NO TÍTULO \n */}
            <HeaderTitle>
              Bem-vindo ao {'\n'}
              Busaqui!!!
            </HeaderTitle>
          </Header>

          <Menu>
              <MenuItem 
                active={activeMenu == 'signin'} 
                onPress={()=>setActiveMenu('signin')} 
                underlayColor="transparent">

                <MenuItemText>Login</MenuItemText>
              </MenuItem>
              <MenuItem 
                active={activeMenu == 'signup'} 
                onPress={()=>setActiveMenu('signup')} 
                underlayColor="transparent">
                  
                <MenuItemText>Cadastrar</MenuItemText>
              </MenuItem>
          </Menu>

        </HeaderContainer>

        {/* AREA DO FORMULÁRIO: INPUTS + BOTÃO */}
        <Form>

          {/* AREA DOS INPUTS*/}
          <InputArea>

            {/* CONTAINER DO INPUT: LABEL + TEXT INPUT*/}
            <InputContainer>

              {activeMenu == 'signup' &&
                <InputLabel>Nome</InputLabel>
              }
              {activeMenu == 'signup' &&
                <Input 
                  editable={!loading} 
                  value={name} 
                  onChangeText={t=>setName(t)} 
                  placeholder="Digite seu nome" 
                  placeholderTextColor = {color.Cinza}/>
              }

            </InputContainer>

            {/* CONTAINER DO INPUT: LABEL + TEXT INPUT*/}
            <InputContainer>

              <InputLabel>E-mail</InputLabel>
              <Input 
                editable={!loading} 
                value={email} 
                onChangeText={t=>setEmail(t)} 
                keyboardType="email-address" 
                autoCapitalize="none" 
                placeholder="Digite seu e-mail" 
                placeholderTextColor = {color.Cinza} />

            </InputContainer>

            {/* CONTAINER DO INPUT: LABEL + TEXT INPUT*/}
            <InputContainer>

              <InputLabel>Senha</InputLabel>
              <Input 
                editable={!loading} 
                value={password} 
                onChangeText={t=>setPassword(t)} 
                placeholder="Digite sua senha"  
                placeholderTextColor = {color.Cinza}
                secureTextEntry={true}
                style={{fontFamily: 'Montserrat-Medium'}}/>


            </InputContainer>
          </InputArea>
            
          {activeMenu == 'signin' &&
            <ActionButton disabled={loading} onPress={handleSignIn}>
              <ActionButtonText>Login</ActionButtonText>
            </ActionButton>
          }
          {activeMenu == 'signup' &&
            <ActionButton disabled={loading} onPress={handleSignUp}>
              <ActionButtonText>Cadastrar </ActionButtonText>
            </ActionButton>
          }

          
          {loading &&
            <LoadingArea>
              <ActivityIndicator size="large" color={color.Branco} />
            </LoadingArea>
          }

        </Form>

      </Container>
    ); 
  }

const mapStateToProps = (state) => {
    return{
        token:state.userReducer.token
    };
}
const mapDispathToProps = (dispath) => {
  return {
    setToken:(token) => dispath({type:'SET_TOKEN', payload:{token}})
  };
}
export default connect(mapStateToProps, mapDispathToProps)(Page); 