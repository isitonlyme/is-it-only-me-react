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
        className="flex flex-col bg-gradient-to-b from-[#D0EE1A]/40 to-[#7D53FF] backdrop-blur-2xl w-[80vh] max-w-[300px] h-[85vh] max-h-[510px] will-change-transform border border-slate-700 rounded-[40px] shadow-2xl touch-none p-6"
      >
        <p className='text-2xl flex justify-center pb-20'>
          <span className='bg-[#7D53FF] text-[#D0EE1A] px-2 rounded-full mt-6'>{card.category} edition</span>
        </p>
        <h3 className="font-bold text-[#D0EE1A] text-5xl pb-20 text-center -mt-4">Is it only me...</h3>
        <p className='text-[#D0EE1A] text-3xl'>{card.question}</p>
      </animated.div>
    </animated.div>
  );
}

export default CardComponent;
