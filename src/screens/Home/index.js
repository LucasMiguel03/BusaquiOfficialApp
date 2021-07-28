

// import React, { Component, useRef, useState, useEffect } from 'react';
// import { StatusBar, Image, Animated, Modal,TouchableHighlight, Text } from 'react-native';
// import  MapView, { Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import Geocoder from 'react-native-geocoding';
// import MapViewDirections from 'react-native-maps-directions';
// import { MapsAPI } from '../../services/config';
// import color from '../../assets/color.js';
// import { 
//     Container,
//     SearchArea,
//     Area,
//     SearchInput,
//     ModalResult,
//     Result,
//     ResultText,
//     Scroll


//     } from './styled';
// import { SearchBar } from 'react-native-screens';
// import {HomeDrawer} from '../../navigators/HomeDrawer'
// import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import { SearchBox } from '../../components/Home/SearchBox';


// const Page = (props) => {

//     let timer;

//     const map = useRef();
//     const [maploc, setMapLoc] = useState({
//         center:{
//             latitude:37.78825,
//             longitude:-122.4322,
//         },
//         zoom:16,
//         pitch:0,
//         altitude:0,
//         heading:0
//     });

//     const [fromLoc, setFromLoc] = useState({});
//     const [toLoc, setToLoc] = useState({});
//     const [showDirections, setShowDirections] = useState(false);
//     const [requestDistance, setRequestDistance] = useState(0);
//     const [resquestTime, setRequestTime] = useState(0);
//     const [timeDuration, setTimeDuration] = useState(0);
//     const [isReady, setIsReady] = useState(false);
//     const [angleCar, setAngleCar] = useState(false);

//     const [results, setResults ] = useState([]);
//     const [searchText, setSearchText] = useState('');

//      useEffect(()=>{
//         Geocoder.init(MapsAPI, {language:'pt-br'});
//         getMyCurrentPosition();
//     }, []);

//      useEffect(()=>{
//         if(fromLoc.center && toLoc.center) {
//             setShowDirections(true);
//         }
//     },[toLoc]);

//     useEffect(()=>{
//         if(searchText){
//             if(timer){
//                 clearTimeout(timer);
//             }
//             timer = setTimeout(async()=>{
//                 console.log("Efetuando a pesquisa");

//                 const geo = await Geocoder.from(searchText);
//                     console.log("Resultado:", geo.results.length);

                    
//                     if(geo.results.length > 0) {
//                         let tmResults = [];
//                         for(let i in geo.results){
//                             tmResults.push({
//                                 address:geo.results[i].formatted_address,
//                                 latitude:geo.results[i].geometry.location.lat,
//                                 longitude:geo.results[i].geometry.location.lng
//                             });
//                         }
//                         setResults(tmResults);
//                     } else {
//                         setResults([]);
//                     }
//             }, 1000);
                    
//         }
//     }, [searchText]);
            

    
//     const getMyCurrentPosition = (props) => {
//             Geolocation.watchPosition(async (info)=>{
//                 console.log("COORDENADAS: ",info.coords);
//                 const geo = await Geocoder.from(info.coords.latitude, info.coords.longitude);

//                 if(geo.results.length > 0){
//                    const loc = {
//                         name:geo.results[0].formatted_address,
//                         center:{
//                             latitude:info.coords.latitude,
//                             longitude:info.coords.longitude
//                         },
                        
//                         zoom:16,
//                         pitch:0,
//                         altitude:0,
//                         heading:0
//                 };
//                 setMapLoc(loc);
//                 setFromLoc(loc);
//             }
//             console.log(geo.results[0]);  


//             },(error)=>{
                
//             });
//     }

//     const handleFromClic = () => {
//         alert("Você clicou aqui!");
//     }

//     const handleToClic = async () => {
//         const geo = await Geocoder.from('Montana, EUA');
//         if(geo.results.length > 0) {
//             const loc = {
//                 name:geo.results[0].formatted_address,
//                 center:{
//                     latitude:geo.results[0].geometry.location.lat,
//                     longitude:geo.results[0].geometry.location.lng
//                 },
//                 zoom:16,
//                 pitch:0,
//                 altitude:0,
//                 heading:0
//             };
//             setToLoc(loc);
//         }
        
//     }

//     function calculateAngle(coordinates) {
//             let startLat = coordinates[0]["latitude"]
//             let startLng = coordinates[0]["longitude"]
//             let endLat = coordinates[1]["latitude"]
//             let endLng = coordinates[1]["longitude"]
//             let dx = endLat - startLat
//             let dy = endLng - startLng

//             return Math.atan2(dy, dx) * 180 / Math.PI
//     }
    
//     function searchBoxClick(searchRes) {
//         setToLoc({
//           center: {
//             latitude: searchRes.latitude,
//             longitude: searchRes.longitude
//           },
//           zoom: 16,
//           pitch: 0,
//           altitude: 0,
//           heading: 0
//         });
//     }


//     return (

//         <Container>
//             <StatusBar barStyle="dark-content"/>
//             <MapView
//                 ref={map}
//                 style={{flex:1}}
//                 provider="google"
//                 camera={maploc}
//             >
//                 {fromLoc.center &&
//                     <MapView.Marker pinColor="black" coordinate={fromLoc.center} />
//                 }
                
//                 {toLoc.center &&
                    
//                     <Marker 
//                         coordinate={toLoc.center} 
//                         anchor={{x: 0.5, y: 0.5}}
//                         flat={true}
//                         rotation={angleCar}
//                     >
//                         <Image 
//                             source={require('../../assets/images/Icons/Bus.png')}
//                             style={{
//                                 width: 40,
//                                 height: 40,

//                             }}
//                         />
//                     </Marker>
//                 }

//                 {showDirections && 
//                     <MapViewDirections 
//                         origin={fromLoc.center}
//                         destination={toLoc.center}
//                         strokeWidth={5}
//                         strokeColor={color.Azul}
//                         apikey={MapsAPI}
//                         onReady={r => {
//                             console.log("FUNCIONALIDADES: ", r); 
//                             setRequestDistance( r.distance );
//                             setRequestTime( r.time );
//                             setTimeDuration( r.duration );
//                             if(!isReady){
//                                 map.current.fitToCoordinates(r.coordinates, {
//                                     edgePadding:{
//                                         left:50,
//                                         right:50,
//                                         bottom:50,
//                                         top:400
//                                     }
//                             });
//                             if(r.coordinates.length >= 2) {
//                                 let angle = calculateAngle(r.coordinates)
//                                 setAngleCar(angle)
//                             }
//                             setIsReady(true)
//                            }
//                         }}
//                     />
//                 } 
                
                
//             </MapView>
//             {/* <SearchBox dataClick={searchBoxClick} /> */}
            
            
              
//                 <SearchArea>
//                     <Area>
//                         <SearchInput value={searchText} onChangeText={t=>setSearchText(t)} placeholder="Encontre o seu destino" placeholderTextColor="#777" >

//                         </SearchInput>
//                     </Area>
                
                    
//                     {results.length > 0 &&
//                     <Scroll style={{
//                     width:'90%',
//                     marginBottom:80,
//                     backgroundColor:'#FFFFFF',
//                     borderRadius:6,
//                     borderWidth:1.5,
//                     borderColor:'#acffff'
//                     }}>
//                         {results.map((i)=>{
//                             return(
//                                 <TouchableHighlight 
//                                     key={i.address}
//                                     onPress={()=>searchBoxClick(searchRes)} 
//                                     underlayColor="#CCCCCC"
//                                 >
//                                     <ResultText>{i.address}</ResultText>
//                                 </TouchableHighlight>
                                
//                             );
//                         })}    
//                         </Scroll>
//                     }
                
//                 </SearchArea>
            
//         </Container>
//     );
// }

// export default Page;




//PEDRO





import React, { useRef, useState, useEffect  } from 'react';
import { StatusBar, Image, Text, TouchableHighlight, Button, TouchableWithoutFeedback } from 'react-native';
import  MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import MapViewDirections from 'react-native-maps-directions';
import { MapsAPI } from '../../services/config.js';
import color from '../../assets/color.js';
import { 
    Container,
    SearchArea,
    Area,
    Menu,
    MenuIcon,
    SearchInput,
    Result,
    ResultText,
    Scroll
    } from './styled';


import {HomeDrawer} from '../../navigators/HomeDrawer';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { DATA_BUSLIST } from './BUSSTOP_DATA';
import BusStopIcon from '../../assets/images/Icons/BusStop.png';
import { ModalBusStopInfo } from '../../components/Home/ModalBusStopInfo/index.js';
import { ReactButton } from 'react-native-gesture-handler';


const Home = (props) => {
    let timer;
    const map = useRef();

    const [maploc, setMapLoc] = useState({
        center:{
            latitude:57.78825,
            longitude:-122.4322,
        },
        zoom:18,
        pitch:0,
        altitude:0,
        heading:0
    });
    const [fromLoc, setFromLoc] = useState({});
    const [toLoc, setToLoc] = useState({});
    const [showDirections, setShowDirections] = useState(false);
    const [requestDistance, setRequestDistance] = useState(0);
    const [requestTime, setRequestTime] = useState(0);
    const [requestPrice, setRequestPrice] = useState(0);
    const [timeDuration, setTimeDuration] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [angleCar, setAngleCar] = useState(0);

    const [busStopAddress,setBusStopAddress] = useState('');
    const [busStopImage,setBusStopImage] = useState('');
    const [busStopTime,setBusStopTime] = useState(0);
    const [busStopModal,setBusStopModal] = useState(false);
    const [toBusStop,setToBusStop] = useState({});
    const [showBusStopDirection, setShowBusStopDirection] = useState(false);
    const [busStopVisible, setBusStopVisible] = useState(false);

    const [results, setResults ] = useState([]);
    const [searchText, setSearchText] = useState('');

    
     useEffect(()=>{
        Geocoder.init(MapsAPI, {language:'pt-br'});
        getMyCurrentPosition();
    }, []);

     useEffect(()=>{
        if(fromLoc.center && toLoc.center) {
            setShowDirections(true);
        }
    },[toLoc]);

    useEffect(()=>{
        if(fromLoc.center && toBusStop.center) {
            setShowBusStopDirection(true);
        }
    },[toBusStop]);

    useEffect(()=>{
    
                if(searchText){
                    if(timer){
                        clearTimeout(timer);
                    }
                    timer = setTimeout(async()=>{
                        console.log("Efetuando a pesquisa");
        
                        const geo = await Geocoder.from(searchText);
                            console.log("Resultado:", geo.results.length);
        
                            
                            if(geo.results.length > 0) {
                                let tmResults = [];
                                for(let i in geo.results){
                                    tmResults.push({
                                        address:geo.results[i].formatted_address,
                                        latitude:geo.results[i].geometry.location.lat,
                                        longitude:geo.results[i].geometry.location.lng
                                    });
                                }
                                setResults(tmResults);
                            } else {
                                setResults([]);
                            }
                    }, 1000);
                            
                }
            }, [searchText]);
                    

    function calculateAngle(coordinates) {
        let startLat = coordinates[0]["latitude"]
        let startLng = coordinates[0]["longitude"]
        let endLat = coordinates[1]["latitude"]
        let endLng = coordinates[1]["longitude"]
        let dx = endLat - startLat
        let dy = endLng - startLng

        return Math.atan2(dy, dx) * 180 / Math.PI
    }
    const getMyCurrentPosition = (props) => {
            Geolocation.watchPosition(async (info)=>{
                console.log("COORDENADAS: ",info.coords);
                const geo = await Geocoder.from(info.coords.latitude, info.coords.longitude);

                if(geo.results.length > 0){
                   const loc = {
                        name:geo.results[0].formatted_address,
                        center:{
                            latitude:info.coords.latitude,
                            longitude:info.coords.longitude
                        },
                        
                        zoom:18,
                        pitch:0,
                        altitude:0,
                        heading:0
                };
                setMapLoc(loc);
                setFromLoc(loc);

                
            }
            console.log(geo.results[0]);  


            },(error)=>{
                
            });
    }
    // const handleFromClic = () => {
    //     alert("Você clicou aqui!");
    // }
    // const handleToClic = async () => {
    //     const geo = await Geocoder.from('Resende, RJ');
    //     if(geo.results.length > 0) {
    //         const loc = {
    //             name:geo.results[0].formatted_address,
    //             center:{
    //                 latitude:geo.results[0].geometry.location.lat,
    //                 longitude:geo.results[0] .geometry.location.lng
    //             },
    //             zoom:18,
    //             pitch:0,
    //             altitude:0,
    //             heading:0
    //         };
    //         setToLoc(loc);
    //     }
        
    // }

    const handleDirectionsReady = (r) => {
        console.log("FUNCIONALIDADES: ", r.coordinates); 
        setRequestDistance( r.distance );
        setRequestTime( r.time );
        setTimeDuration( r.duration );

        if(!isReady){
            map.current.fitToCoordinates(r.coordinates, {
                edgePadding:{
                    left:50,
                    right:50,
                    bottom:50,
                    top:100
                }
        });
          setIsReady(true)
        }

        console.log("Resultado: ", r);

        if(r.coordinates.length >= 2) {
          let angle = calculateAngle(r.coordinates)
          setAngleCar(angle)
        }
      }

    const searchBoxClick = (toLoc)=>{
       
        const toLocation = {
            center:{
                latitude:toLoc.latitude,
                longitude:toLoc.longitude
            },
            
            zoom:16,
            pitch:0,
            altitude:0,
            heading:0
        };
        console.log(toLocation);
        setMapLoc(toLocation);
        setToLoc(toLocation);
    
        }

    const handleBusStop = (busStopInfo) => {

        setBusStopAddress(busStopInfo.address);
        
        setToBusStop({
            center: {
                latitude: busStopInfo.center.latitude,
                longitude: busStopInfo.center.longitude
            },
            zoom: 18,
            pitch: 0,
            altitude: 0,
            heading: 0
        });

        setBusStopModal(true);
        setBusStopVisible(true);
    }


    // const handleModalBusStop = (busStopInfo) => {
    //     // console.log(busStopInfo.address)

    //     return(
    //         <ModalBusStopInfo
    //             time={time}
    //             address={busStopInfo.address}
    //             visible={closeModal}
    //             transparent={closeModal}
    //             // busStop={busStopInfo.ID}
    //             // image={busStopInfo.image}
    //         />
    //     )
    // }

    // const handleCloseModal = () => {
        
    //     setCloseModal(true);
    // }

    return (
        <Container>
            <StatusBar barStyle="light-content"/>
            <MapView
                ref={map}
                style={{flex:1}}
                provider="google"
                camera={maploc}
            >
                {fromLoc.center && !toLoc.center &&
                    <MapView.Marker 
                    pinColor='black' 
                    coordinate={fromLoc.center}

                    />
                }
                
                {toLoc.center &&
                    
                    <Marker 
                        coordinate={fromLoc.center} 
                        anchor={{x: 0.5, y: 0.4}}
                        flat={true}
                        rotation={angleCar}
                    >
                        <Image   
                            source={require('../../assets/images/Icons/Bus.png')}
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        />
                    </Marker>
                }
                {showDirections && 
                    <MapViewDirections 
                        origin={fromLoc.center}
                        destination={toLoc.center}
                        strokeWidth={5}
                        strokeColor={color.Azul}
                        apikey={MapsAPI}
                        onReady={handleDirectionsReady}
                    />
                }

                {showBusStopDirection && 
                    <MapViewDirections 
                        apikey={MapsAPI}
                        origin={fromLoc.center}
                        destination={toBusStop.center}
                        strokeWidth={5}
                        strokeColor='black'
                        // apikey={MapsAPI}
                        onReady={r => {
                            setBusStopTime(r.duration)
                        }}
                        mode="WALKING"
                    />
                }

                {
                    DATA_BUSLIST.map((busStop) => (

                            <Marker
                            coordinate={busStop.center} 
                            anchor={{x: 0.4, y: 0.3}}
                            flat={true}
                            key={"" + busStop.ID}
                            identifier={"" + busStop.ID}
                            onPress={() => handleBusStop(busStop)}
                            image={BusStopIcon}
                            // style={{height: 100, width: 100}}
                            // stopPropagation={true}
                            />

                            
                            ))
                        }



            </MapView>

            {/* <SearchBox dataClick={searchBoxClick} /> */}

            <SearchArea>
                <Area>
                    <Menu>
                        <MenuIcon></MenuIcon>
                    </Menu>
                    <SearchInput 
                    value={searchText} 
                    onChangeText={t=>setSearchText(t)} 
                    placeholder="Encontre o seu destino" 
                    placeholderTextColor="#777" 
                    >
                    </SearchInput>
                </Area>
                
                    
                    {results.length > 0 &&
                        <TouchableWithoutFeedback>
                            <Scroll style={{
                            width:'90%',
                            marginBottom:80,
                            backgroundColor:'#FFFFFF',
                            borderRadius:6,
                            borderWidth:1.5,
                            borderColor:'#acffff'
                            }}>
                                {results.map((toLoc)=>{
                                    return(
                                        <Result
                                            key={toLoc.address}
                                            onPress={()=>searchBoxClick(toLoc)} 
                                            underlayColor="#CCCCCC"
                                        >
                                            <ResultText>{toLoc.address}</ResultText>
                                        </Result>
                                        
                                    );
                                })}    
                            </Scroll>
                        </TouchableWithoutFeedback>
                    }
                
                </SearchArea>

            {busStopModal &&
            
                <ModalBusStopInfo

                address={busStopAddress}
                time={busStopTime}
                visible={busStopVisible}
                visibleAction={setBusStopVisible}
                />
            
            }
            
        </Container>
    );
}

export default Home;
