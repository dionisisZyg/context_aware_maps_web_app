import React, { useState  } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from "react-google-maps"
import _ from "lodash";
import {getRandomColor} from "../../utils/functions";

const RoutesMap = (props) => {
    const {routes} = props;
    const [selectedRoute, setSelectedRoute] = useState({});
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 38.2466395, lng: 21.734574000000066 }}
        >
            {/*{(selectedRoute) && (*/}
            {/*    <InfoWindow onCloseClick={() => setSelectedRoute({})}>*/}
            {/*        <div>{`Id: ${selectedRoute.id}`}</div>*/}
            {/*    </InfoWindow>*/}
            {/*)}*/}
            {routes.map(route => (
                <React.Fragment key={route.id}>
                    {(route.points && route.points.length > 1) && (
                       <React.Fragment>
                           <Marker
                               onClick={() => setSelectedRoute(route)}
                               position={{lat: route.points[0].latitude, lng: route.points[0].longitude}}
                           >
                               {(selectedRoute.id && selectedRoute.id === route.id) && (
                                   <InfoWindow onCloseClick={() => setSelectedRoute({})}>
                                       <div>
                                           <div>{`Id: ${selectedRoute.id}`}</div>
                                           <div>{`Type: ${selectedRoute.type ? selectedRoute.type.name : ''}`}</div>
                                           <div>{`Weather Type: ${selectedRoute.weatherType ? selectedRoute.weatherType.name : ''}`}</div>
                                           <div>{`Recoreded during: ${selectedRoute.isDuringDay ? 'Day' : 'Night'}`}</div>
                                           <div>{`Purpose: ${selectedRoute.purposeCode}`}</div>
                                       </div>
                                   </InfoWindow>
                               )}

                           </Marker>
                           {/*<Marker*/}
                           {/*    color={"blue"}*/}
                           {/*    position={{lat: _.last(route.points).latitude, lng: _.last(route.points).longitude}}*/}
                           {/*/>*/}
                       </React.Fragment>
                    )}

                    <Polyline
                        key={route.id}
                        options={
                            {
                                strokeColor: '#FF0000',
                                strokeOpacity: 1.0,
                                strokeWeight: 2
                            }
                        }
                        path={route.points.map(point => ({
                            lat: point.latitude,
                            lng: point.longitude
                        }))}
                    />
                </React.Fragment>
            ))}
        </GoogleMap>
    )
};

export default compose(
    withProps({
        googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyC2HVuMFUP1m-0YxdgCHZE70CYAzVFXBIs&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `500px` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(RoutesMap);