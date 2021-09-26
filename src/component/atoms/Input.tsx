import styled, { css } from 'styled-components';
import magnifierIcon from '../../assets/icons/magnifier.svg';

interface Props {
  search?: string;
}

export const Input = styled.input<Props>`
  padding: 1.6rem;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  background: #f4f4f4;
  mix-blend-mode: normal;
  border-radius: 16px;
  border: 1px solid transparent;
  height: 48px;

  ::placeholder {
    color: #7c7c7c;
  }

  ${({ search }) =>
    search &&
    css`
      padding: 1.6rem;
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 90% 50%;
      background-repeat: no-repeat;
    `}
`;
