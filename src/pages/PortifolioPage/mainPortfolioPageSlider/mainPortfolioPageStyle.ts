import styled from "styled-components";

export const MainPortfolioPageStyleUlOne = styled.ul`
  .swiper-wrapper {
    display: flex;
    gap: 20px;
  }

  .swiper-button-prev {
    color: var(--title-nav);
    z-index: 10;
  }

  .swiper-button-next {
    color: var(--title-nav);
    z-index: 10;
  }

  .swiper-pagination-bullet {
    color: var(--title-nav);
    background-color: var(--title-nav);
  }
  .swiper-pagination-horizontal {
    z-index: 0;
  }
  @media (max-width: 700px) {
    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      display: none;
    }
  }
`;

export const MainPortfolioPageStyleUlTwo = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
