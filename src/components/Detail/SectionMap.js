import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

import data from '../DB/GeoData.geojson';
import ComsData from '../DB/ComsData.json';
import GeoEnd from '../DB/GeoEnd.js';

mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrZXNoaW4iLCJhIjoiY2s4ZzI4bXo1MGFiODNscGVobHlid2o5eCJ9.YOpXSgIoMqcH-Kj8coRi5g';

function SectionMap({ id }) {
    const mapContainer = useRef(null);

    useEffect(() => {
        let name;
        const start_coords = [-114.07, 51.02];
        let end_coords;
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: start_coords,
            zoom: 9.4,
        });

        map.on('load', function () {
            map.addSource('Calgary', {
                type: 'geojson',
                data: data,
            });

            try {
                for (let i = 0; i < ComsData.length; i++) {
                    if (ComsData[i].id === id) {
                        name = ComsData[i].name;
                    }
                }
            } finally {
                for (let i = 0; i < GeoEnd.length; i++) {
                    if (GeoEnd[i].name === name) {
                        end_coords = GeoEnd[i].coordinates;
                    }
                }
            }

            map.addLayer({
                id: 'Calgary',
                type: 'fill',
                source: 'Calgary',
                filter: ['==', 'name', name],
                layout: {},
                paint: {
                    'fill-color': '#f9ca24',
                    'fill-opacity': 0.6,
                },
            });

            map.flyTo({
                center: end_coords,
                zoom: 12.4,
                speed: 0.6,
                curve: 1,
                easing: function (t) {
                    return t;
                },
                essential: true,
            });
        });
    });

    return (
        <Container>
            <MapContainer ref={(el) => (mapContainer.current = el)} />
            <p style={{ float: 'left' }}>
                The Source of GeoData is from{' '}
                <a
                    href='https://data.calgary.ca/Base-Maps/City-Boundary/7t9h-2z9s'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Open Calgary
                </a>
            </p>
            <br />
            <br />
        </Container>
    );
}

export default SectionMap;

const MapContainer = styled.div`
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    height: 500px;
`;
