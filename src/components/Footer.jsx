import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
  padding: 3rem 0;
  text-align: center;
  font-size: 0.7em;
  .v {
    font-family: ${p => p.theme.fontFixed};
  }
  svg {
    height: 1em;
    color: crimson;
    margin: 0 0 -0.25rem 0;
  }
`;

const Footer = () => {
  return (
    <StyledContainer>
      <br />
      Made {' '}
      <span role="img" aria-label="love">
      </span>{' '}
      by{' '}
      <a href="https://joelb.dev" title="Joel Bartlett's portfolio">
        Ashwini Surve
      </a>
      <br />{' '}
      
    </StyledContainer>
  );
};

export default Footer;
