import React from 'react'
import hamburguer from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'

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
                        <input type="checkbox" className='checkbox' />
                            <i className="icons fi fi-br-menu-burger"></i>
                            <i className="icons fi fi-br-cross"></i>
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