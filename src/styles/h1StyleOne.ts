import styled from "styled-components";

export const StyleH1 = styled.h1`
  padding: 30px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 70px 0px 0px 0px;
`;

export const StyleSpanH1One = styled.span`
  background-color: var(--primary-color);
  padding: 10px 15px 10px 10px;
  font-weight: bold;
  font-size: 2.2rem;

  width: 140px;

  z-index: 1;

  @media (min-width: 900px) {
    font-size: 2.5rem;
    width: 160px;
  }
`;

export const StyleSpanH1Two = styled.span`
  background-color: var(--text-dark);
  color: var(--primary-color);
  padding: 10px;
  font-weight: bold;
  font-size: 2.2rem;

  width: 140px;

  z-index: 1;
  @media (min-width: 900px) {
    font-size: 2.5rem;
    width: 160px;
  }
`;
