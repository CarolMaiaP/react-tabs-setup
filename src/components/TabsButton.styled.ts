import styled from "styled-components";

export const TabButton = styled.div`
  .tab-buttons {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  button {
    border-radius: 8px;
    border: none;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    background: #fff;
    position: relative;
  }

  button::before {
    content: "";
    width: 100px;
    height: 30px;
    border-left: 3px solid transparent;
    position: absolute;
    top: 0;
    left: 0;
  }

  button:hover {
    color: #5f9bb1;
  }

  button:hover:before {
    border-left: 3px solid #5f9bb1;
  }

  button:focus:before {
    border-left: 3px solid #5f9bb1;
  }

  button:focus,
  button:focus-visible {
    color: #5f9bb1;
  }

`