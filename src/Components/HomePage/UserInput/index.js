import React,{useState} from 'react';
import styles from './styles.module.css';

const UserInput = ({addCoordinate, coordinates}) => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const handleAddCoordinate = () => {
        if(lng && lat) addCoordinate({lat: parseFloat(lat) ,lng: parseFloat(lng)})
    };
    return (
        <div className={styles.container}>
            <h1>Coordinates Form</h1>
            <input value={lat} type={'number'} placeholder={'insert latitude'} onChange={(e) => setLat(e.target.value)}/>
            <input value={lng} type={'number'} placeholder={'insert longitude'} onChange={(e) => setLng(e.target.value)}/>
            <button onClick={handleAddCoordinate}>Add coordinate</button>
            <span className={'coordsWrapper'}>
                {coordinates.length > 0 ?coordinates.map((coord) => <span>{`{lat: ${coord.lat}, lng:${coord.lng}}`}</span>)
                    : <span>please add at least 2 coordinates</span>}
            </span>
        </div>
    );
};

export default UserInput;