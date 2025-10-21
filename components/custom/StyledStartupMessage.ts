import styled from "styled-components";

const StyledStartupMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(28, 28, 28, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05);
  z-index: 10000;
  max-width: 520px;
  width: 90%;
  font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #ffffff;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  h2 {
    margin-top: 0;
    color: #0078d7;
    padding-bottom: 16px;
    font-weight: 300;
    font-size: 24px;
    letter-spacing: -0.02em;
  }

  p {
    margin: 16px 0;
    line-height: 1.6;
    font-size: 15px;
    color: #e1e1e1;
  }

  .highlight {
    color: #00a4ef;
    font-weight: 500;
  }

  a {
    color: #4fc1ff;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #00a4ef;
      text-decoration: underline;
    }
  }

  ul {
    padding-left: 24px;
    margin: 16px 0;
  }

  li {
    margin: 10px 0;
    line-height: 1.5;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 28px;
    gap: 12px;
  }

  button {
    background: #0078d7;
    color: white;
    border: none;
    padding: 10px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    font-size: 14px;

    &:hover {
      background: #005a9e;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    &#close-message {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ccc;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  .engineering-note {
    background: rgba(0, 120, 215, 0.15);
    border-left: 3px solid #0078d7;
    padding: 18px;
    margin: 24px 0;
    border-radius: 0 4px 4px 0;

    p {
      margin: 0;
      font-size: 14px;
      color: #d1d1d1;
    }

    .quote {
      font-style: italic;
      color: #b1b1b1;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px dashed rgba(255, 255, 255, 0.1);
    }
  }

  .credits {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    padding-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 13px;
    color: #a0a0a0;

    .original-author {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .your-modifications {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #00a4ef;
    }
  }
`;

export default StyledStartupMessage;