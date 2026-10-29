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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  margin: 20px 0;
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 24px;
    border-bottom: 1px solid #f1f5f9;
  }

`;

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 9999px;
  padding: 8px 16px;
  width: 100%;
  max-width: 280px;
  gap: 10px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus-within {
    border-color: #10b981;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.1);
  }

  svg {
    color: #94a3b8;
    flex-shrink: 0;
  }

  @media (max-width: 640px) {
    max-width: 65%;
  }

`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.875rem;
  color: #334155;
  background: transparent;

  &::placeholder {
    color: #94a3b8;
  }

`;