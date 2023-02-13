import React from 'react'
import deep from '../assets/images/desktop/image-deep-earth.jpg';
import curiosity from '../assets/images/desktop/image-curiosity.jpg';
import fisheye from '../assets/images/desktop/image-fisheye.jpg';
import fromAbove from '../assets/images/desktop/image-from-above.jpg';
import grid from '../assets/images/desktop/image-grid.jpg';
import soccer from '../assets/images/desktop/image-soccer-team.jpg';
import night from '../assets/images/desktop/image-night-arcade.jpg';
import pocket from '../assets/images/desktop/image-pocket-borealis.jpg';
import deepMobile from '../assets/images/mobile/image-deep-earth.jpg';
import curiosityMobile from '../assets/images/mobile/image-curiosity.jpg';
import fisheyeMobile from '../assets/images/mobile/image-fisheye.jpg';
import fromAboveMobile from '../assets/images/mobile/image-from-above.jpg';
import gridMobile from '../assets/images/mobile/image-grid.jpg';
import soccerMobile from '../assets/images/mobile/image-soccer-team.jpg';
import nightMobile from '../assets/images/mobile/image-night-arcade.jpg';
import pocketMobile from '../assets/images/mobile/image-pocket-borealis.jpg';

const Creations = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const minWidth = 819;
  const handleChangeWidth = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleChangeWidth);

  const creations = [
    {
      image: deep,
      title: 'DEEP EARTH',
      imageMobile: deepMobile
    },
    {
      image: night,
      title: 'NIGHT ARCADE',
      imageMobile: nightMobile

    },
    {
      image: soccer,
      title: 'SOCCER TEAM VR',
      imageMobile: soccerMobile

    },
    {
      image: grid,
      title: 'THE GRID',
      imageMobile: gridMobile

    },
    {
      image: fromAbove,
      title: 'FROM UP ABOVE VR',
      imageMobile: fromAboveMobile

    },
    {
      image: pocket,
      title: 'POCKET BOREALIS',
      imageMobile: pocketMobile

    },
    {
      image: curiosity,
      title: 'THE CURIOSITY',
      imageMobile: curiosityMobile

    },
    {
      image: fisheye,
      title: 'MAKE IT FISHEYE',
      imageMobile: fisheyeMobile

    }
  ]

  if (width > minWidth) {
    return (
      <article className='creations'>
        <div className='creations__title'>
          <small>OUR CREATIONS</small>
          <button className='creations__button'>SEE ALL</button>
        </div>
        <section className='creations__cards'>
          {creations.map((element, index) => (
            <div key={index} style={{
              backgroundImage: `url("${element.image}")`
            }}>
              <small>{element.title}</small>
            </div>

          ))}


        </section>
      </article>
    )

  }
  else {
    return (
      <article className='creations'>
        <div className='creations__title'>
          <small>OUR CREATIONS</small>

        </div>
        <section className='creations__cards'>
          {creations.map((element, index) => (
            <div key={index} style={{
              backgroundImage: `url("${element.imageMobile}")`
            }}>
              <small>{element.title}</small>
            </div>

          ))}


        </section>
        <button className='creations__button'>SEE ALL</button>
      </article>
    )

  }


}

export default Creations