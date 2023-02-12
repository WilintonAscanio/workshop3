import React from 'react'
import fb from '../assets/images/icon-facebook.svg'
import tw from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import ig from '../assets/images/icon-instagram.svg'

const Footer = (props) => {

  const logos = [
    {
      id: 1,
      logo: fb
    },
    {
      id : 2,
      logo: tw,
    },
    {
      id : 3,
      logo : pinterest
    },
    {
      id : 4,
      logo : ig
    },






  ]
  return (
    <article className='footer'>
      <div className='footer__nav'>
        <small>loopstudios</small>
        <ul>
        {props.list.map((element, index) => (
          <li key={index}>{element.text}</li>
        ))}
      </ul>
      </div>
      <div className='footer__logo'>
        <section className='footer__logo__images'>
        {logos.map((element, index) => (
          <figure key={index}>
            <img src={element.logo} />
          </figure>
        ))}
        </section>
        <small>© 2021 Loopstudios. All rights reserved.</small>

      </div>
      

    </article>
  )
}

export default Footer