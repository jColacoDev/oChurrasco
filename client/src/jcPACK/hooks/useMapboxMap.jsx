
// import useMapboxMap from "./hooks/useMapboxMap";
// useMapboxMap("map")

import {useLayoutEffect} from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"

export default function useMapboxMap(options) {
    mapboxgl.accessToken = "pk.eyJ1IjoiamNvbGFjbyIsImEiOiJja3F5Zm45ZnIwNjZjMnVtbjhuMzY5ZHIzIn0.cfQ28DqxB2YeqAklEfMF4A";
    
    const defaultOptions = {
        container: "map",
        style: 'mapbox://styles/mapbox/dark-v10',
        center:  [ 12.567898, 55.67583 ],
        zoom: 9
    };

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            ...defaultOptions,
            ...options
        });
    }, []);
}