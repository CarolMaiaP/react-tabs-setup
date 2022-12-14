import styled from "styled-components";

export const TabsContainer = styled.div`
  .jobs {
    width: 900px;
    display: flex;
    gap: 5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 4rem;
    position: relative;
  }

  h2::after {
    content: "";
    width: 80px;
    height: 35px;
    border-bottom: 3px solid #5f9bb1;
    position: absolute;
    top: 0;
    left: calc(50% - 50px);
    z-index: 1;
  }

  .duties-content {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .duties-content p {
    text-align: left;
  }

  .duties-content svg {
    width: 35px;
    color: #5f9bb1;
  }
`