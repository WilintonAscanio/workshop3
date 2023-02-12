import React from 'react'

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
                </section>
                <div>
                    <small>IMMERSIVE <br />
                        EXPERIENCES <br />
                        THAT DELIVER</small>
                </div>

            </header>
        </>
    )
}

export default Header