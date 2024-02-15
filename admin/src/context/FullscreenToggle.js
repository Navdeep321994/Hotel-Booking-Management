import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import screenfull from 'screenfull';

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenChange = () => {
    setIsFullscreen(screenfull.isFullscreen);
  };

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };

  useEffect(() => {
    // Add fullscreenchange event listener
    screenfull.on('change', handleFullscreenChange);

    // Remove event listener on component unmount
    return () => {
      screenfull.off('change', handleFullscreenChange);
    };
  }, []);

  return (
    <div>
      <button onClick={toggleFullscreen}>
        <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
        {isFullscreen ? ' ' : ' '}
      </button>
    </div>
  );
};

export default FullscreenToggle;
