import React, { useState, useRef } from 'react';
import { useSpring } from 'react-spring';

import data from './data';
import { checkTabletSize } from 'services/devices';
import { InterestsContainer, InterestBox, HoverImage, List, Title } from './styled';

const Interests = () => {
  const [visible, setVisible] = useState(false);
  const imageEl = useRef(null);
  const interestsEl = useRef(null);

  const { transform, opacity } = useSpring({
    opacity: visible ? 1 : 0,
    transform: `scale(${visible ? 1 : 1.2}`,
  });

  const hoverImage = (image) => {
    if (image) {
      setVisible(true);
      imageEl.current.src = image;
    } else {
      setVisible(false);
    }
  };

  const followMouse = (event) => {
    if (checkTabletSize()) return false;

    const interestsRect = interestsEl.current.getBoundingClientRect();

    Object.assign(imageEl.current.style, {
      left: `${(event.pageX - interestsRect.left) + 15}px`,
      top: `${(event.pageY - document.documentElement.scrollTop - interestsRect.top) + 15}px`,
    });
  };

  return (
    <InterestsContainer ref={interestsEl}>
      {!checkTabletSize() && (
        <HoverImage
          ref={imageEl}
          style={{ opacity, transform }}
        />
      )}

      {data.map((category: CategoryProps) => (
        <InterestBox>
          <Title>{category.title}</Title>
          <List>
            {category.items.map((item: ItemProps) =>  {
              if (item.url) {
                return (
                  <li key={item.id}>
                    <a href={item.url} target="_blank" title={item.title}>
                      {item.title}
                    </a>
                  </li>
                );
              }

              return (
                <li
                  key={item.id}
                  onMouseEnter={() => hoverImage(item.image)}
                  onMouseLeave={() => hoverImage(false)}
                  onMouseMove={(event) => followMouse(event)}
                >
                  {item.title}
                </li>
              );
            })}
          </List>
        </InterestBox>
      ))}
    </InterestsContainer>
  );
}

type ItemProps = {
  id: number;
  title: string;
  image?: string;
  url?: string;
}

type CategoryProps = {
  title: string;
  items: Array<ItemProps>;
}

export default Interests;
