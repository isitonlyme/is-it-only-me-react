import { useSpring, animated, to as interpolate} from "@react-spring/web";
import { useDrag } from '@use-gesture/react';

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})

const trans = (r, s) =>
  `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Card({ question, category, rot, scale }) {

const [{ x, y}, api] = useSpring(() => ({ x: 0, y: 0 }))
  // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ down, movement: [mx, my] }) => {
      api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
    })

// {...bind()}  style={{x, y}}


  return (
    <animated.div {...bind()}  className="bg-slate-300 text-black px-2 py-2 border border-black w-40 h-40 absolute top-20 left-20"             style={{
      transform: interpolate([rot, scale], trans),
    }} >
      <p>{category}</p>
      <h3 className="font-bold">Is it only me...</h3>
      <p>{question}</p>
    </animated.div>
  )
}



