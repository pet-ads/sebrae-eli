import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    width: 100%;
    max-width: 340px;
    min-height: 230px;
    padding: 24px 28px;
    
    display: flex;
    flex-direction: column;

    border-radius: 16px;
    border: 1px solid #eef2f6;

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }
    
`;