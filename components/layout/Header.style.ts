import styled from '@emotion/styled';
import { Common } from '../../styles/common';

export const HeaderContainer = styled.div`
  position: relative;
  height: ${Common.layout.headerHeight};
  width: 100%;
  padding: 0 40px;
  display: grid;
  align-items: center;
`;

export const HeaderToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
`;
