import { render } from '@testing-library/react';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBg};
    background: ${theme.colors.mainBg};
  `}
`;


