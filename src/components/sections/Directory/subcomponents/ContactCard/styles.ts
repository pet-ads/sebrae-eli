import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 18px;
  margin-bottom: 16px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  letter-spacing: -0.01em;
`;

export const Role = styled.span`
  font-size: 0.785rem;
  color: #64748b;
  line-height: 1.3;
`;

export const Bio = styled.p`
  font-size: 0.84rem;
  color: #475569;
  line-height: 1.55;
  margin: 0 0 20px 0;
  flex-grow: 1; /* Garante que o rodapé alinhe perfeitamente na base */
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f1f5f9;
  padding-top: 14px;
`;

export const Organization = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #334155;
  position: relative;
  display: inline-block;
  padding-bottom: 3px;

  /* Linha verde característica do design */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #00f090;
    border-radius: 2px;
  }
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;