import React from 'react'
import Creations from './Creations'
import Header from './Header'
import headerMobile from './headerMobile'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  const menu = [
    {
      id : 1,
      text : 'About'},
    {
      id : 2,
      text : 'Careers'},
    {
      id : 3,
      text : 'Events'},
    { 
      id : 4,
      text : 'Products'},
    {
      id : 5,
      text : 'Support'},

  ]
  return (
    <>
    <Header list = {menu}/>
    <headerMobile/>
    <Main/>
    <Creations/>
    <Footer list = {menu}/>
    
    </>
  )
}

export default App