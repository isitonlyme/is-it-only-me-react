import React from 'react';
import { animated, to as interpolate } from '@react-spring/web';

const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function CardComponent({ card, zIndex, index, props, bind }) {
  const { x, y, rot, scale } = props;

  return (
    <animated.div
      className="absolute w-[300px] h-[200px] will-change-transform flex items-center justify-center touch-none"
      style={{ 
        zIndex: zIndex,
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}
    >
      <animated.div
        {...bind(index)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
        className="flex flex-col bg-white/0 backdrop-blur-2xl w-[80vh] max-w-[300px] h-[85vh] max-h-[510px] will-change-transform border border-slate-700 rounded-[40px] shadow-2xl touch-none p-6"
      >
        <p className='text-indigo-700 uppercase pb-20 text-2xl'>{card.category} EDITION</p>
        <h3 className="font-bold text-white text-4xl pb-20">IS IT ONLY ME...</h3>
        <p className='text-white text-3xl'>{card.question}</p>
      </animated.div>
    </animated.div>
  );
}

export default CardComponent;
