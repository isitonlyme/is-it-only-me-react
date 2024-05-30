import React from 'react';
import { animated, to as interpolate } from '@react-spring/web';
import styles from './styles.module.css';

const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function CardComponent({ card, zIndex, index, props, bind }) {
  const { x, y, rot, scale } = props;
  
  return (
    <animated.div
      className={styles.deck}
      key={index}
      style={{ 
        zIndex: zIndex,
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}
    >
      <animated.div
        {...bind(index)} // Apply bind here
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        <p>{card.category}</p>
        <h3 className="font-bold">Is it only me...</h3>
        <p>{card.question}</p>
      </animated.div>
    </animated.div>
  );
}

export default CardComponent;
