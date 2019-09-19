import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../style/style.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Card() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 170, friction: 26 } }))
    return (
        <animated.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        />
    )
}

