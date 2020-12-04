import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    Platform,
    Dimensions
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle }
    from 'react-native-maps';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';

export default class CarouselMap extends Component {

    static navigationOptions = {
        title: 'San Francisco',
    };

    state = {
        markers: [],
        coordinates: [
            { name: 'Burger', latitude: 37.8025259, longitude: -122.4351431, image: "https://raw.githubusercontent.com/JulianCurrie/CwC_React_Native/react-native-maps_example/src/img/burger.jpg" },
            { name: 'Pizza', latitude: 37.7946386, longitude: -122.421646, image: "https://raw.githubusercontent.com/JulianCurrie/CwC_React_Native/react-native-maps_example/src/img/curry.jpg" },
            { name: 'Soup', latitude: 37.7665248, longitude: -122.4165628, image: "https://raw.githubusercontent.com/JulianCurrie/CwC_React_Native/react-native-maps_example/src/img/pizza.jpg" },
            { name: 'Sushi', latitude: 37.7834153, longitude: -122.4527787, image: "https://raw.githubusercontent.com/JulianCurrie/CwC_React_Native/react-native-maps_example/src/img/soup.jpg" },
            { name: 'Curry', latitude: 37.7948105, longitude: -122.4596065, image: "https://raw.githubusercontent.com/JulianCurrie/CwC_React_Native/react-native-maps_example/src/img/sushi.jpg" },
        ],
        initialPosition: null
    }

    componentDidMount() {
        this.requestLocationPermission();
    }

    showWelcomeMessage = () =>
        Alert.alert(
            'Welcome to San Francisco',
            'The food is amazing',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Ok'
                }
            ]
        )

    requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            console.log('iPhone: ' + response);

            if (response === 'granted') {
                this.locateCurrentPosition();
            }
        } else {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log('Android: ' + response);

            if (response === 'granted') {
                this.locateCurrentPosition();
            }
        }
    }

    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position));

                let initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035,
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }

                this.setState({ initialPosition });
            },
            error => Alert.alert(error.message),
            { timeout: 20000 }
        )
    }

    onCarouselItemChange = (index) => {
        let location = this.state.coordinates[index];

        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        })

        this.state.markers[index].showCallout()
    }

    onMarkerPressed = (location, index) => {
        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        });

        this._carousel.snapToItem(index);
    }

    renderCarouselItem = ({ item }) =>
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Image style={styles.cardImage} source={{ uri: item.image }} />
        </View>

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => this._map = map}
                    showsUserLocation={true}
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                ></MapView>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => this._map = map}
                    showsUserLocation={true}
                    style={styles.map}
                    initialRegion={this.state.initialPosition}
                >
                    <Polygon
                        coordinates={this.state.coordinates}
                        fillColor={'rgba(100, 100, 200, 0.3)'}
                    />
                    <Circle
                        center={{ latitude: 37.8025259, longitude: -122.4351431 }}
                        radius={1000}
                        fillColor={'rgba(200, 300, 200, 0.5)'}
                    />
                    <Marker
                        draggable
                        coordinate={{ latitude: 37.7825259, longitude: -122.4351431 }}
                        image={{ uri: "https://raw.githubusercontent.com/JulianCurrie/CwC_React_Native/react-native-maps_example/src/img/sushi.jpg" }}>
                        <Callout onPress={this.showWelcomeMessage}>
                            <Text>An Interesting city</Text>
                        </Callout>
                    </Marker>
                    {
                        this.state.coordinates.map((marker, index) => (
                            <Marker
                                key={marker.name}
                                ref={ref => this.state.markers[index] = ref}
                                onPress={() => this.onMarkerPressed(marker, index)}
                                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            >
                                <Callout>
                                    <Text>{marker.name}</Text>
                                </Callout>
                            </Marker>
                        ))
                    }
                </MapView>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.coordinates}
                    containerCustomStyle={styles.carousel}
                    renderItem={this.renderCarouselItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={300}
                    removeClippedSubviews={false}
                    onSnapToItem={(index) => this.onCarouselItemChange(index)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    carousel: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 48
    },
    cardContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: 200,
        width: 300,
        padding: 24,
        borderRadius: 24
    },
    cardImage: {
        height: 120,
        width: 300,
        bottom: 0,
        position: 'absolute',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    },
    cardTitle: {
        color: 'white',
        fontSize: 22,
        alignSelf: 'center'
    }
});
// import React, { Component } from 'react';
// import {
//     Text,
//     StyleSheet
// } from 'react-native';
// import MapView from 'react-native-maps';
// //import ClusteredMapView from 'react-native-maps-super-cluster';
// import image from './flag-pink.png';

// export default class App extends Component<{}> {
//     render() {

//         const coordinates = [];

//         coordinates.push({
//             key: 0,
//             location: {
//                 longitude: -70.23,
//                 latitude: -33.23
//             }
//         });

//         for (let i = 1; i < 100; i++) {

//             const location = {
//                 longitude: coordinates[i - 1].location.longitude + (Math.random() * (i % 2 === 0 ? -1 : 1)),
//                 latitude: coordinates[i - 1].location.latitude + (Math.random() * (i % 2 === 0 ? -1 : 1)),
//             };

//             coordinates.push({ key: i, location });

//         }

//         return (
//             <MapView
//                 renderMarker={renderMarker}
//                 initialRegion={{
//                     longitude: -70.23,
//                     latitude: -33.23,
//                     latitudeDelta: 9.22,
//                     longitudeDelta: 4.21,
//                 }}
//                 style={StyleSheet.absoluteFillObject}>

//                 { coordinates.map(({ key, location }) => <MapView.Marker key={key} image={image} coordinate={location} />)}

//             </MapView>
//         );
//     }
// }

// function renderMarker({ location }) {
//     return (
//         <MapView.Marker
//             image={image}
//             coordinate={location}
//         >
//             <MapView.Callout>
//                 <Text>BiG BiG Callout</Text>
//             </MapView.Callout>
//         </MapView.Marker>
//     );
// }