import { css } from 'styled-components';

const CustomScrollbar = css`
  /* Width and height */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: background 0.3s ease;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #764ba2, #667eea);
  }

  /* Corner */
  ::-webkit-scrollbar-corner {
    background: rgba(255, 255, 255, 0.05);
  }

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(255, 255, 255, 0.05);
`;

export default CustomScrollbar;