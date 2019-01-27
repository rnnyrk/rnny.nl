import { useState, useEffect } from 'react';

const useWindowScrollPosition = () => {
  const [position, setPosition] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return position;
}

export default useWindowScrollPosition;
