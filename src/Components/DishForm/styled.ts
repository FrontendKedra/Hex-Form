import styled, { css } from "styled-components";
import { Remove } from "../../interfaces/interfaces";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-top: 0px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 20px;
  }
`;

export const FormContainer = styled.form`
  display: grid;
  gap: 18px;
  width: max-content;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 6px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 26px;
    gap: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 14px;
    gap: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 16px;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 12px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  width: fit-content;
  border: none;
  padding: 12px;
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 4px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
    padding: 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lighterGreen};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.lightestGreen};
  }

  ${({ remove }: Remove) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.colors.red};

      &:hover {
        background-color: ${({ theme }) => theme.colors.lighterRed};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.lightestRed};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.gray};
      cursor: not-allowed;

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    `}
`;
