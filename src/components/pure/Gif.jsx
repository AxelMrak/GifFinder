// Imports
import React from 'react';
import '../../styles/gif/gifStyle.css';

/**
 * * This function takes the params passed in gifList and render them.
 * @param { Title of Gif, User who is uploaded the gif, Url of gif } param0 
 * @returns Title, User, and img with url. Title and user use conditional render.
 */
function Gif({ title, user, url }) {
  return (
    <div className='gif-container'>
      <h3>
        {title === '' ?
          (<h3 style={{ color: 'tomato' }}>Title not found 😢</h3>)
          :
          title
        }
      </h3>
      <h4> User:
        {user === '' ?
          (<p style={{ color: 'tomato' }}>User without name 😐</p>)
          :
          (<p style={{ color: '#EF233C' }}>{user}</p>)
        }
      </h4>
      <img src={url} width='400'></img>
    </div>
  );
};

export default Gif;