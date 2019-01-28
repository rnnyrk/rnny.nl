import { useState, useEffect } from 'react';
import _ from 'lodash';

const useWindowScrollPosition = () => {
  const options = {
    throttle: 100,
  };

  let [position, setPosition] = useState(window.pageYOffset);

  useEffect(() => {
    let handleScroll = _.throttle(() => {
      setPosition(window.pageYOffset);
    }, options.throttle);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return position;
}

export default useWindowScrollPosition;
