// Imports
import { Avatar, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { Children } from 'react';

/**
 * * This function takes the params passed in gifList and render them.
 * @param { Title of Gif, User who is uploaded the gif, Url of gif } param0 
 * @returns Title, User, and img with url. Title and user use conditional render.
 */
function Gif({ title, user, url}) {
  return (
    <Card variant='outlined' sx={{ maxWidth: 345 }}>
      <CardMedia height='400' component='img' image={url} alt={title} />
      <CardContent>
        {title === '' ?
          (<Typography variant='h5' style={{ color: 'tomato' }}>Title not found 😢</Typography>)
          :
          (<Typography variant='h5'>{title}</Typography>)
        }
        {user === '' ?
          (<Typography variant='subtitle1' style={{ color: 'tomato' }}>User without name 😐</Typography>)
          :
          (<Typography variant='subtitle1' style={{ color: '#EF233C' }}>{user}</Typography>)
        }
      </CardContent>
    </Card>

  );
};

export default Gif;