import React,{ useState, useEffect, Component } from 'react';
import { StatusBar, Platform, ActivityIndicator, View, Animated, Keyboard, StyleSheet} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import useAppBusaquiApi from '../../services/useAppBusaquiApi';
import color from '../../assets/color';
import { 
    Container, 
    Header,  
    HeaderTitle,
    HeaderTitleBlue,  
    Form,
    Underside,
    ActionButton, 
    ActionButtonGray,
    ActionButtonText,
    Icon,
    ButtonFacebook,
    ImageFacebook,
    ButtonGoogle,
    ImageGoogle,
    Redirect,
    RedirectText,
    RedirectButton,
    TextButton,
    LoadingArea  
  } from './styled';
import { InputCard } from '../../components/InputCard';


const SignIn = (props) => {

    const  api = useAppBusaquiApi();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [loading, setLoading] = useState();
    const [sensorKeyboard, setSensorKeyboard] = useState(false);

    //Sensor de teclado
    useEffect(() => {
        //Adicionando sensores
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        //Removendo sensores
        return () => {
        Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => setSensorKeyboard(true);
    const _keyboardDidHide = () => setSensorKeyboard(false);



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

      const Valid = () => {
          
            if(email && password){
                return(
                <ActionButton disabled={loading} onPress={handleSignIn}>
                    <ActionButtonText>Entrar agora</ActionButtonText>
                </ActionButton>
                );
            }else{
                return(
                <ActionButtonGray disabled={loading} onPress={handleSignIn}>
                    <ActionButtonText>Entrar agora</ActionButtonText>
                </ActionButtonGray>
                );
            }  
      }


    return(

        <Container behavior={Platform.OS === 'ios'?'padding':null}>
            <StatusBar barStyle="light-content" />
                <Header style={sensorKeyboard ? {
                    flexDirection:'row',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: '30%'} : {
                        flexDirection:'column', 
                        justifyContent: 'center',
                        left: 20,
                        height: '20%'}}>
                    <HeaderTitle>Bem-vindo ao </HeaderTitle>
                    <HeaderTitleBlue>Busaqui!!!</HeaderTitleBlue>
                </Header>
                <Form>
                    <InputCard
                    InputTitle="E-mail"
                    Placeholder="Digite seu e-mail"
                    editable={!loading}
                    value={email} 
                    onChangeText={t=>setEmail(t)}
                    autoCapitalize="none" 
                    keyboardType="email-address"
                    secureTextEntry={false}
                    AutoCorrect={true}
                    />

                    <InputCard
                    InputTitle="Senha"
                    Placeholder="Digite sua senha"
                    editable={!loading}
                    value={password} 
                    onChangeText={t=>setPassword(t)}
                    autoCapitalize="none"
                    keyboardType="default"  
                    secureTextEntry={true}
                    autoCorrect={false}
                    />

                    {loading &&
                        <LoadingArea>
                            <ActivityIndicator size="large" color={color.Branco} />
                        </LoadingArea>
                    }

                </Form>
                
                <Underside>
                    <Valid/>
                     <Icon style={sensorKeyboard ? {display: 'none'} : {display: 'flex'}}>
                        <ButtonFacebook onPress={''}>
                            <ImageFacebook source={require("../../assets/Images/Icons/Facebook.png")}/>
                        </ButtonFacebook>
                        <ButtonGoogle onPress={''}>
                            <ImageGoogle source={require("../../assets/Images/Icons/Google.png")}/>
                        </ButtonGoogle>
                    </Icon>
                    <Redirect style={sensorKeyboard ? {display: 'none'} : {display: 'flex'}}>
                        <RedirectText>Não tem Conta? </RedirectText>
                            <RedirectButton onPress={''}>
                                <TextButton>Clique aqui</TextButton>
                            </RedirectButton>
                    </Redirect>
                </Underside>
                
        </Container>
    );
}

// const StyleS = StyleSheet.create({

//     TitleS: {
//         ...StyleSheet.absoluteFillObject,
//         flexDirection:'row'
        

//     }

// });

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


export default connect( mapStateToProps, mapDispathToProps ) (SignIn);