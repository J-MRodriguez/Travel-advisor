import React from "react";
import GoogleMapReact from "google-map-react";

import useStyles from "./MapStyle";

const Map = () => {
  const classes = useStyles();

  const coordinates = { lat: -34.5, lng: -58.5 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCDt5VibxTGPhGcwStbOmQ7RKrY1UdAeqc" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
