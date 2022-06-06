//import {AsyncStorage} from "react-native";

import {AsyncStorage, PermissionsAndroid, Platform, ToastAndroid} from "react-native";

export async function get_remote_data(url, dataa) {
    let data = '';
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(JSON.parse(userToken));

    await fetch(url, {
        method: 'POST',
        headers: {
            'jwt': JSON.parse(userToken),
            'Access-Control-Allow-Methods': 'POST',
        },
        body: dataa,
    })
        .then((response) => response.json())
        .then((responseData) => {
            //console.warn(responseData);
            data = responseData;
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
    return await data;
}

export async function get_remote_data_get_req(url) {
    let data = '';
    const userToken = await AsyncStorage.getItem('userToken');
    let headers = {
        'jwt': JSON.parse(userToken),
    };
    //console.warn(headers);
    await fetch(url, {
        method: 'GET',
        headers: headers
    })
        .then((response) => response.json())
        .then((responseData) => {
            //console.warn(responseData);
            data = responseData;
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
    return await data;
}

export async function hasLocationPermission() {
    if (Platform.OS === 'ios' ||
        (Platform.OS === 'android' && Platform.Version < 23)) {
        return true;
    }

    const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission){
        return true;
    }

    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED){
        data = true;
    } else if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }
}

export async function google_map_data(keywords, sessiontoken) {
    /**
     let data = {
        "predictions" : [
            {
                "description" : "Hisar Bus Stand, Sector 14, Hisar, Haryana, India",
                "id" : "110737e816216900b0164975c5eaf202844303ed",
                "matched_substrings" : [
                    {
                        "length" : 5,
                        "offset" : 0
                    },
                    {
                        "length" : 9,
                        "offset" : 17
                    }
                ],
                "place_id" : "ChIJXQ8NOdIyEjkRIzKe5DlGQQ0",
                "reference" : "ChIJXQ8NOdIyEjkRIzKe5DlGQQ0",
                "structured_formatting" : {
                    "main_text" : "Hisar Bus Stand",
                    "main_text_matched_substrings" : [
                        {
                            "length" : 5,
                            "offset" : 0
                        }
                    ],
                    "secondary_text" : "Sector 14, Hisar, Haryana, India",
                    "secondary_text_matched_substrings" : [
                        {
                            "length" : 9,
                            "offset" : 0
                        }
                    ]
                },
                "terms" : [
                    {
                        "offset" : 0,
                        "value" : "Hisar Bus Stand"
                    },
                    {
                        "offset" : 17,
                        "value" : "Sector 14"
                    },
                    {
                        "offset" : 28,
                        "value" : "Hisar"
                    },
                    {
                        "offset" : 35,
                        "value" : "Haryana"
                    },
                    {
                        "offset" : 44,
                        "value" : "India"
                    }
                ],
                "types" : [ "point_of_interest", "establishment" ]
            },
            {
                "description" : "Sector 14, Hisar, Haryana, India",
                "id" : "a46a83d0d4d6d22ddebf9d815855b25f8973d9b5",
                "matched_substrings" : [
                    {
                        "length" : 9,
                        "offset" : 0
                    },
                    {
                        "length" : 5,
                        "offset" : 11
                    }
                ],
                "place_id" : "ChIJXwTXCjTNEzkRhysB2IeTC50",
                "reference" : "ChIJXwTXCjTNEzkRhysB2IeTC50",
                "structured_formatting" : {
                    "main_text" : "Sector 14",
                    "main_text_matched_substrings" : [
                        {
                            "length" : 9,
                            "offset" : 0
                        }
                    ],
                    "secondary_text" : "Hisar, Haryana, India",
                    "secondary_text_matched_substrings" : [
                        {
                            "length" : 5,
                            "offset" : 0
                        }
                    ]
                },
                "terms" : [
                    {
                        "offset" : 0,
                        "value" : "Sector 14"
                    },
                    {
                        "offset" : 11,
                        "value" : "Hisar"
                    },
                    {
                        "offset" : 18,
                        "value" : "Haryana"
                    },
                    {
                        "offset" : 27,
                        "value" : "India"
                    }
                ],
                "types" : [ "sublocality_level_1", "sublocality", "political", "geocode" ]
            },
            {
                "description" : "Hisar - Tohana Road, Sector 14, Hisar, Haryana, India",
                "id" : "0800839ea4860a036b56a32713a4c359d191527e",
                "matched_substrings" : [
                    {
                        "length" : 5,
                        "offset" : 0
                    },
                    {
                        "length" : 9,
                        "offset" : 21
                    }
                ],
                "place_id" : "EjVIaXNhciAtIFRvaGFuYSBSb2FkLCBTZWN0b3IgMTQsIEhpc2FyLCBIYXJ5YW5hLCBJbmRpYSIuKiwKFAoSCZOqHkumjxE5Ef4scJkk93F3EhQKEglfBNcKNM0TORGHKwHYh5MLnQ",
                "reference" : "EjVIaXNhciAtIFRvaGFuYSBSb2FkLCBTZWN0b3IgMTQsIEhpc2FyLCBIYXJ5YW5hLCBJbmRpYSIuKiwKFAoSCZOqHkumjxE5Ef4scJkk93F3EhQKEglfBNcKNM0TORGHKwHYh5MLnQ",
                "structured_formatting" : {
                    "main_text" : "Hisar - Tohana Road",
                    "main_text_matched_substrings" : [
                        {
                            "length" : 5,
                            "offset" : 0
                        }
                    ],
                    "secondary_text" : "Sector 14, Hisar, Haryana, India",
                    "secondary_text_matched_substrings" : [
                        {
                            "length" : 9,
                            "offset" : 0
                        }
                    ]
                },
                "terms" : [
                    {
                        "offset" : 0,
                        "value" : "Hisar - Tohana Road"
                    },
                    {
                        "offset" : 21,
                        "value" : "Sector 14"
                    },
                    {
                        "offset" : 32,
                        "value" : "Hisar"
                    },
                    {
                        "offset" : 39,
                        "value" : "Haryana"
                    },
                    {
                        "offset" : 48,
                        "value" : "India"
                    }
                ],
                "types" : [ "route", "geocode" ]
            },
            {
                "description" : "Hisar Bus Stand, Sector 14, Hisar, Haryana, India",
                "id" : "b71ecd26474950f6b81d6b967f654734d8a18ba6",
                "matched_substrings" : [
                    {
                        "length" : 5,
                        "offset" : 0
                    },
                    {
                        "length" : 9,
                        "offset" : 17
                    }
                ],
                "place_id" : "ChIJT2fBWdIyEjkRLwwxzHNBBTE",
                "reference" : "ChIJT2fBWdIyEjkRLwwxzHNBBTE",
                "structured_formatting" : {
                    "main_text" : "Hisar Bus Stand",
                    "main_text_matched_substrings" : [
                        {
                            "length" : 5,
                            "offset" : 0
                        }
                    ],
                    "secondary_text" : "Sector 14, Hisar, Haryana, India",
                    "secondary_text_matched_substrings" : [
                        {
                            "length" : 9,
                            "offset" : 0
                        }
                    ]
                },
                "terms" : [
                    {
                        "offset" : 0,
                        "value" : "Hisar Bus Stand"
                    },
                    {
                        "offset" : 17,
                        "value" : "Sector 14"
                    },
                    {
                        "offset" : 28,
                        "value" : "Hisar"
                    },
                    {
                        "offset" : 35,
                        "value" : "Haryana"
                    },
                    {
                        "offset" : 44,
                        "value" : "India"
                    }
                ],
                "types" : [
                    "bus_station",
                    "transit_station",
                    "point_of_interest",
                    "establishment"
                ]
            },
            {
                "description" : "Hisar, Sector 14, Hisar, Haryana",
                "id" : "60e1d0fe0937e931f62000698be47f2fe413cf55",
                "matched_substrings" : [
                    {
                        "length" : 5,
                        "offset" : 0
                    },
                    {
                        "length" : 9,
                        "offset" : 7
                    }
                ],
                "place_id" : "ChIJzxOQINIyEjkRjWiHpMo0V1s",
                "reference" : "ChIJzxOQINIyEjkRjWiHpMo0V1s",
                "structured_formatting" : {
                    "main_text" : "Hisar",
                    "main_text_matched_substrings" : [
                        {
                            "length" : 5,
                            "offset" : 0
                        }
                    ],
                    "secondary_text" : "Sector 14, Hisar, Haryana",
                    "secondary_text_matched_substrings" : [
                        {
                            "length" : 9,
                            "offset" : 0
                        }
                    ]
                },
                "terms" : [
                    {
                        "offset" : 0,
                        "value" : "Hisar"
                    },
                    {
                        "offset" : 7,
                        "value" : "Sector 14"
                    },
                    {
                        "offset" : 18,
                        "value" : "Hisar"
                    },
                    {
                        "offset" : 25,
                        "value" : "Haryana"
                    }
                ],
                "types" : [
                    "bus_station",
                    "transit_station",
                    "point_of_interest",
                    "establishment"
                ]
            }
        ],
        "status" : "OK"
    };
     **/
        //**
    let data = '';
    let api_key = 'AIzaSyB5LI2BXPeYg1UGRjJBaLeOzIUD6Mrpef4';
    let url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + keywords + '&key=' + api_key + '&sessiontoken=' + sessiontoken;
    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((responseData) => {
            //console.warn(responseData);
            data = responseData;
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
    //**/
    return await data;
}

export async function place_id_detal(place_id) {

    /**
     let data = {
        "html_attributions": [],
        "result": {
            "geometry": {
                "location": {
                    "lat": 29.1656002,
                    "lng": 75.71854619999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 29.1672000802915,
                        "lng": 75.7198674302915
                    },
                    "southwest": {
                        "lat": 29.16450211970851,
                        "lng": 75.71716946970848
                    }
                }
            }
        },
        "status": "OK"
    };
     **/

    let data = '';
    let api_key = 'AIzaSyB5LI2BXPeYg1UGRjJBaLeOzIUD6Mrpef4';
    let url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + place_id + '&fields=geometry&key=' + api_key;
    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((responseData) => {
            //console.warn(responseData);
            data = responseData;
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
    return await data;
}

export async function place_id_detail_cordinates(lat, lng) {


    let data = '';
    let api_key = 'AIzaSyB5LI2BXPeYg1UGRjJBaLeOzIUD6Mrpef4';
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + api_key;
    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((responseData) => {
            //console.warn(responseData);
            data = responseData;
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
    return await data;
}

export async function cordinate_distance(from_location, to_location) {

    /**
     let data = {
        "destination_addresses": ["336, Sector 15 A, Hisar, Haryana 125001, India"],
        "origin_addresses": ["Unnamed Road, Sector 14, Hisar, Haryana 125001, India"],
        "rows": [
            {
                "elements": [
                    {
                        "distance": {
                            "text": "3.6 km",
                            "value": 3593
                        },
                        "duration": {
                            "text": "12 mins",
                            "value": 742
                        },
                        "status": "OK"
                    }
                ]
            }
        ],
        "status": "OK"
    };
     **/
    let data = '';
    let api_key = 'AIzaSyB5LI2BXPeYg1UGRjJBaLeOzIUD6Mrpef4';
    let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + JSON.stringify(from_location.lat) + ',' + JSON.stringify(from_location.lng) + '&destinations=' + JSON.stringify(to_location.lat) + ',' + JSON.stringify(to_location.lng) + '&mode=driving&key=' + api_key;
    //console.warn(url);
    await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((responseData) => {
            //console.warn(responseData);
            data = responseData;
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
    return await data;
}
