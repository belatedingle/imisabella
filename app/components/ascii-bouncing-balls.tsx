import type { CSSProperties } from 'react'

const balls = [
  {
    color: '#ff2d8b',
    delay: '-0.6s',
    duration: '8.6s',
    left: '6%',
    radius: '58% 42% 52% 48% / 48% 55% 45% 52%',
    size: 'clamp(3.4rem, 8vw, 6.4rem)',
    top: '18%',
    x1: '24vw',
    x2: '52vw',
    x3: '76vw',
    x4: '34vw',
    y1: '58vh',
    y2: '12vh',
    y3: '62vh',
    y4: '34vh',
  },
  {
    color: '#f5f1f4',
    delay: '-2.8s',
    duration: '10.2s',
    left: '74%',
    radius: '46% 54% 49% 51% / 56% 44% 54% 46%',
    size: 'clamp(2.8rem, 6.6vw, 5.2rem)',
    top: '10%',
    x1: '-24vw',
    x2: '-58vw',
    x3: '-20vw',
    x4: '8vw',
    y1: '62vh',
    y2: '22vh',
    y3: '70vh',
    y4: '40vh',
  },
  {
    color: '#ff8fca',
    delay: '-4.4s',
    duration: '9.4s',
    left: '22%',
    radius: '51% 49% 57% 43% / 45% 52% 48% 55%',
    size: 'clamp(2.6rem, 5.8vw, 4.7rem)',
    top: '70%',
    x1: '38vw',
    x2: '66vw',
    x3: '18vw',
    x4: '54vw',
    y1: '-52vh',
    y2: '-18vh',
    y3: '-64vh',
    y4: '-30vh',
  },
  {
    color: '#c9ffed',
    delay: '-1.7s',
    duration: '7.8s',
    left: '58%',
    radius: '53% 47% 44% 56% / 50% 57% 43% 50%',
    size: 'clamp(3.8rem, 8.8vw, 7rem)',
    top: '54%',
    x1: '-42vw',
    x2: '-12vw',
    x3: '24vw',
    x4: '-30vw',
    y1: '26vh',
    y2: '-44vh',
    y3: '20vh',
    y4: '-12vh',
  },
  {
    color: '#ffe5f2',
    delay: '-5.5s',
    duration: '11.4s',
    left: '86%',
    radius: '48% 52% 55% 45% / 54% 46% 51% 49%',
    size: 'clamp(2.4rem, 5.2vw, 4.2rem)',
    top: '34%',
    x1: '-32vw',
    x2: '-70vw',
    x3: '-46vw',
    x4: '-14vw',
    y1: '42vh',
    y2: '8vh',
    y3: '54vh',
    y4: '-10vh',
  },
]

export function AsciiBouncingBalls() {
  return (
    <div aria-hidden className="ascii-bouncing-balls">
      {balls.map((ball, index) => (
        <span
          key={`${ball.left}-${index}`}
          className="ascii-ball"
          style={
            {
              '--ball-color': ball.color,
              '--ball-delay': ball.delay,
              '--ball-duration': ball.duration,
              '--ball-left': ball.left,
              '--ball-radius': ball.radius,
              '--ball-size': ball.size,
              '--ball-top': ball.top,
              '--x1': ball.x1,
              '--x2': ball.x2,
              '--x3': ball.x3,
              '--x4': ball.x4,
              '--y1': ball.y1,
              '--y2': ball.y2,
              '--y3': ball.y3,
              '--y4': ball.y4,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
