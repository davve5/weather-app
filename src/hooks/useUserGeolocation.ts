import {useState, useEffect} from 'react';

interface Location {
	latitude: number,
	longitude: number,
	accuracy: number,
	speed: number,
	heading: number,
	timestamp: number,
}

const useUserGeolocation = () => {
  const [position, setPosition] = useState<Location | {}>({});
  const [error, setError] = useState<string | null>(null);

  const onChange = ({coords, timestamp}: any) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      speed: coords.speed,
      heading: coords.heading,
      timestamp,
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(onChange, onError);
  }, []);

  return {...position, error};
};

export default useUserGeolocation;