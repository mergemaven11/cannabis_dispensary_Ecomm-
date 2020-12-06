import { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 320,
};

const media = Object.keys(sizes).reduce((object, label) => {
  object[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return object;
}, {});

export default media;
