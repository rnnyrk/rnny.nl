import React, { FC, useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { checkMobileSize } from 'services/devices';
import { Header, MobileMenu, Social } from './components';
import { Canvas, Content, PageContainer } from './styled';

const Page:FC<PageProps> = ({
  className, children, useCanvas, useGrid, ...props
}) => {
  const canvasEl = useRef(null);
  const [isMobile, setIsMobile] = useState(checkMobileSize());

  useEffect(() => {
    scaleGrid();
    window.addEventListener('resize', scaleGrid);

    if (isMobile) {
      document.addEventListener('touchmove', moveGrid, true);
    } else {
      document.addEventListener('mousemove', moveGrid, true);
    }

    return () => {
      if (isMobile) {
        document.addEventListener('touchmove', moveGrid, true);
      } else {
        document.addEventListener('mousemove', moveGrid, true);
      }

      window.addEventListener('resize', scaleGrid);
    }
  }, [props.location]);

  const scaleGrid = () => {
    const canvas = canvasEl.current;
    if (!canvas) return;

    setIsMobile(checkMobileSize());

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  const moveGrid = (event) => {
    const canvas = canvasEl.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const circleSize = 200;
    const gridSize = 100;

    const itemOffset = 10;
    const itemWidth = 100;
    const itemHeight = 50;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    // Create the circular mask
    ctx.beginPath();
    ctx.arc(event.clientX, event.clientY, circleSize, 0, Math.PI * 2, false);
    ctx.clip();
    ctx.closePath();

    // Draw the grid
    ctx.beginPath();

    for (let i = 0; i <= canvas.width; i += gridSize) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
    }

    for (let i = 0; i <= canvas.height; i += gridSize) {
      ctx.moveTo(0, 0.5 + i + 0);
      ctx.lineTo(canvas.width + 0, 0.5 + i + 0);
    }

    ctx.closePath();

    ctx.strokeStyle = 'rgba(255, 255, 255, .5)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw navigation shapes
    if (!isMobile) {
      ctx.beginPath();
      ctx.rect(
        itemOffset,
        canvas.height - (itemHeight + itemOffset),
        itemWidth,
        itemHeight,
      );
      ctx.fillStyle = '#9991bc';
      ctx.fill();
    }

    ctx.restore();
  }

  return (
    <PageContainer className={className}>
      <Header>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <Social />
        )}
      </Header>
      <Content useGrid={useGrid}>
        {children}
      </Content>
      {useCanvas && <Canvas ref={canvasEl} />}
    </PageContainer>
  );
}

export type PageProps = {
  className: string,
  children: Node,
  location: object,
  useCanvas?: boolean,
  useGrid?: boolean,
}

export default withRouter(Page);