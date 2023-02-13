import React from 'react'

const Creations = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const minWidth = 819;
  const handleChangeWidth = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleChangeWidth);

}

const Main = () => {
  return (
<>
    <article className='body'>
      <section>
          <div className='body__imgAbout'>
          </div>
          <article>
            <p className='titleAbout'>THE LEADER IN INTERACTIVE VR</p>
            <p className='pAbout'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
          </article>
      </section>
    </article>
    </>
  )
}

export default Main