import styled from 'styled-components';

export const TabsContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #e2e8f0;
  
  gap: 20px;
  padding: 0 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 36px;
    padding: 0;
    justify-content: flex-start;
  }
`;

interface TabButtonProps {
  $isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  background: none;
  border: none;
  padding: 12px 4px 14px 4px;
  
  font-size: 0.875rem;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  color: ${({ $isActive }) => ($isActive ? '#0f172a' : '#64748b')};
  cursor: pointer;
  position: relative;
  
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.2s ease;

  @media (min-width: 768px) {
    font-size: 0.9375rem;
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
    background-color: #00f090; /* Tom verde do design */
    border-radius: 2px 2px 0 0;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;