import React, { useState, useRef, useCallback, useEffect } from "react";
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import './styles.css'
const App = ({coordinates}) => {
    const [path, setPath] = useState(coordinates)
    useEffect(()=> setPath(coordinates), [coordinates])
    // Define refs for Polygon instance and listeners
    const polygonRef = useRef(null);
    const listenersRef = useRef([]);

    const onEdit = useCallback(() => {
        if (polygonRef.current) {
            const nextPath = polygonRef.current
                .getPath()
                .getArray()
                .map(latLng => {
                    return { lat: latLng.lat(), lng: latLng.lng() };
                });
            setPath(nextPath);
        }
    }, [setPath]);

    const onLoad = useCallback(
        polygon => {
            polygonRef.current = polygon;
            const path = polygon.getPath();
            listenersRef.current.push(
                path.addListener("set_at", onEdit),
                path.addListener("insert_at", onEdit),
                path.addListener("remove_at", onEdit)
            );
        },
        [onEdit]
    );

    // Clean up refs
    const onUnmount = useCallback(() => {
        listenersRef.current.forEach(lis => lis.remove());
        polygonRef.current = null;
    }, []);


    return (
        <div className="App">
            {coordinates.length === 0 && <span>please add at least 2 coordinates</span>}

            <LoadScript
                id="script-loader"
                googleMapsApiKey=""
                language="en"
                region="us"
            >
                <GoogleMap
                    mapContainerClassName="App-map"
                    center={coordinates[0]}
                    zoom={12}
                    version="weekly"
                    on
                >
                    <Polygon
                        path={path}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};
export default App;

