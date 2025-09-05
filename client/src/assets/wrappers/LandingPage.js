import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 800;
    font-size: 3rem;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 1.8;
    color: var(--text-secondary-color);
    margin-bottom: 2rem;
    max-width: 40em;
    font-size: 1.1rem;
  }
  .btn-group {
    display: flex;
    gap: 1rem;
  }
  .btn {
    padding: 0.9rem 1.4rem;
    border-radius: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .primary-btn {
    background: var(--primary-500);
    color: white;
  }
  .primary-btn:hover {
    background: var(--primary-700);
    transform: translateY(-2px);
  }
  .secondary-btn {
    border: 2px solid var(--primary-500);
    color: var(--primary-500);
    background: white;
  }
  .secondary-btn:hover {
    background: var(--primary-100);
    transform: translateY(-2px);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
