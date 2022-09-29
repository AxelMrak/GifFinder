// Imports
import React from 'react';
import { H3Gif } from '../../styledComponents/H3Gif';
import { Paragraph } from '../../styledComponents/Paragraph';
import '../../styles/gif/gifStyle.css';

/**
 * * This function takes the params passed in gifList and render them.
 * @param { Title of Gif, User who is uploaded the gif, Url of gif } param0 
 * @returns Title, User, and img with url. Title and user use conditional render.
 */
function Gif({ title, user, url }) {
  return (
    <div className='gif-container'>
      <H3Gif>
        {title === '' ?
          (<H3Gif style={{ color: 'tomato' }}>Title not found 😢</H3Gif>)
          :
          title
        }
      </H3Gif>
      <H3Gif> User
        {user === '' ?
          (<Paragraph style={{ color: 'tomato' }}>User without name 😐</Paragraph>)
          :
          (<Paragraph style={{ color: '#EF233C' }}>{user}</Paragraph>)
        }
      </H3Gif>
      <img src={url} width='400'></img>
    </div>
  );
};

export default Gif;