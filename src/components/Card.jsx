import React from 'react';
import { animated, to as interpolate } from '@react-spring/web';

const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function CardComponent({ card, zIndex, index, props, bind }) {
  const { x, y, rot, scale } = props;

  return (
    <animated.div
      className="absolute w-[300px] h-[200px] will-change-transform flex items-center justify-center touch-none top-[300px]"
      style={{ 
        zIndex: zIndex,
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}
    >
      <animated.div
        {...bind(index)} // Apply bind here
        style={{
          transform: interpolate([rot, scale], trans),
        }}
        className="flex flex-col bg-gradient-to-b from-[rgba(245,245,245,0.10)] via-transparent to-[rgba(245,245,245,0.10)] backdrop-blur-[30px] bg-auto bg-no-repeat bg-center w-[80vh] max-w-[351px] h-[85vh] max-h-[563px] will-change-transform border-[1.5px] border-black rounded-[40px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.25)] touch-none p-6"
      >
        <p className='text-indigo-700 uppercase pb-20 text-2xl'>{card.category} EDITION</p>
        <h3 className="font-bold text-white text-4xl pb-20">IS IT ONLY ME...</h3>
        <p className='text-white text-3xl'>{card.question}</p>
      </animated.div>
    </animated.div>
  );
}

export default CardComponent;
