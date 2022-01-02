import React, { useRef, useEffect } from "react";

const UserLocationItem = ({ location }) => {
  const {
    coordinates: { latitude: lat, longitude: lng },
  } = location;

  const center = { lat: +lat, lng: +lng };

  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 4,
    });

    new window.google.maps.Marker({ position: center, map });
  }, [center]);

  return <div ref={mapRef} style={{ width: "400px", height: "400px" }}></div>;
};

export default UserLocationItem;
