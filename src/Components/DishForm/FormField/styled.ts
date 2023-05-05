import styled from "styled-components";

export const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 4px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const Select = styled.select`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const Error = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.errorRed};
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin: -8px 0;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;
