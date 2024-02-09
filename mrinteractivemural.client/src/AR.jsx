import { useState, useEffect } from 'react';
import 'aframe';

const AR = () => {

    const cameraButton = {
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        fontSize: '18px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '5px',
    };

    const displayMessage = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontSize: '24px',
        color: 'black',
    };

    const [isSceneVisible, setIsSceneVisible] = useState(true);

    const toggleSceneVisibility = () => {
        setIsSceneVisible(prevState => !prevState);
    };

    const TextDisplay = ({ text, displayTime }) => {
        const [isVisible, setIsVisible] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, displayTime);

            return () => clearTimeout(timer);
        }, [displayTime]);

        return isVisible ? <div>{text}</div> : null;
    };

    return (
        <>
            

            <button style={cameraButton} onClick={toggleSceneVisibility}>
                
                {isSceneVisible ? 'Camera On' : 'Camera Off'}
            </button>

            {isSceneVisible && (
                <div style={displayMessage}>
                    <TextDisplay text="Point your phone's camera at one of the markers." displayTime={4000} />
                </div>
            )}


            {isSceneVisible && (
            <a-scene embedded vr-mode-ui="enabled: false">
                {/*<a-marker preset="hiro">
                    <a-entity
                        position="0 0 0"
                        scale="0.05 0.05 0.05"
                        gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                    ></a-entity>
                </a-marker>
                <a-entity camera></a-entity>*/}
            </a-scene>
            )}

        </>
    );
};

export default AR;