import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px 20px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }
`;

export const EmptyState = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  margin: 20px 0;
`;