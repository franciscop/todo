import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      background-image: linear-gradient(45deg, #a7f0ff, #e0beff);
      background-size: cover;
      background-attachment: fixed;
      min-height: 100%;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

// Where the title, items, etc. are hosted
export const Main = styled.div`
  background: #fff;
  width: calc(100% - 20px);
  max-width: 600px;
  margin: 60px auto;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 6px -6px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 20px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  line-height: 24px;

  border-top: 1px solid #eee;
`;

export const Form = styled(Item).attrs({ as: "form" })``;

export const Input = styled.input`
  padding: 20px 0 20px 20px;
  height: 60px;
  flex-grow: 1;
  font-size: 18px;
  border: none;
  width: calc(100% - 60px);
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  padding: 0;
`;

export const Box = styled(Button)`
  width: 60px;
  height: 60px;
  line-height: 60px;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
`;

export const Paragraph = styled.div`
  margin: 0;
  display: flex;
  flex-grow: 1;
  padding: 20px;
  font-size: 18px;
`;

export const Label = styled(Button)`
  display: flex;
  text-align: left;
  flex-grow: 1;
  line-height: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.04);
  box-shadow: inset 2px 2px 10px -10px;
  position: relative;
  transition: all 0.1s ease;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  ${({ checked }) =>
    checked &&
    `
    background: #1e71ff;
    &:after {
      display: block;
    }
  `}
`;

export const Text = styled.p`
  margin: 0 10px;
`;

export const TrashIcon = styled(Box)`
  cursor: pointer;
  &:hover,
  &:focus {
    color: red;
    background: #ffcfcf;
  }
`;

export const SendIcon = styled(Box)`
  color: #1e71ff;
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    background: #1e71ff;
  }
`;
