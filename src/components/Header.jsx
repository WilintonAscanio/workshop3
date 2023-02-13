import React from 'react'
import hamburguer from '../assets/images/icon-hamburger.svg'

const Header = (props) => {

    return (
        <>
        <header>
            <section>
                <small>loopstudios</small>
                <nav>
                    <ul>
                        {props.list.map((element, index) => (
                            <li key={index}>
                                {element.text}</li>

                        ))}
                    </ul>
                </nav>
                <figure className='hidden'>
                    <img src={hamburguer} alt="hamburguer" />
                </figure>
            </section>
            <div>
                <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
            </div>

        </header>
    </>
    )
}

export default Header