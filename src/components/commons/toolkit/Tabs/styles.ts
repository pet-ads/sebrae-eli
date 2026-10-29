import styled from 'styled-components';

export const TabsContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  flex-wrap: wrap;
  gap: 12px 15px;
  padding: 0;
  border-bottom: none;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 36px;
    border-bottom: 2px solid #e2e8f0;
    justify-content: flex-start;
  }
`;

interface TabButtonProps {
  $isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  background: none;
  border: none;
  padding: 6px 0 10px 0;

  font-size: 0.95rem;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  color: ${({ $isActive }) => ($isActive ? '#0f172a' : '#64748b')};
  cursor: pointer;
  position: relative;

  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.2s ease;

  @media (min-width: 768px) {
    font-size: 0.9375rem;
    padding: 12px 4px 14px 4px;
  }

  &:hover {
    color: #0f172a;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #00f090;
    border-radius: 2px;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;