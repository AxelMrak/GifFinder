// Imports
import React from 'react';
import { Container } from '../../styledComponents/Container';
import imageError from '../../assets/Abstract_fatal_error_transparent_by_Icons8.gif';

/**
 * * 404 Page not found PAGE
 * @returns Container with page 404
 */
function ErrorPage() {
  return (
    <Container>
      <h1>Error 404 Page Not Found</h1>
      <img src={imageError} width='400'></img>
    </Container>
  );
};

export default ErrorPage;