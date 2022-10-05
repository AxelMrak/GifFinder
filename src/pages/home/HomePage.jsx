// Imports
import React from 'react'
import { Container } from '../../styledComponents/Container'
import { TitleMain } from '../../styledComponents/titlesMain'
import '../../styles/home/homeStyle.css'
import imageMain from '../../assets/Abstract_searching_transparent_by_Icons8.gif'
import { Paragraph } from '../../styledComponents/Paragraph'

/**
 * * Home Page
 * @returns Container with elements of Home page. First page what the user will view.
 */
function HomePage() {
  return (
    <Container className='container'>
      <img src={imageMain} width='300'></img>
      <TitleMain>Welcome to Gif Finder!</TitleMain>
      <Paragraph>You can find your favourites gifs. Go to search page and start your search.</Paragraph>
    </Container>
  )
}

export default HomePage