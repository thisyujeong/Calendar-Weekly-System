import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamic = ({ isToday }: { isToday: boolean }) => {
  if (isToday) {
    return css`
      * {
        color: var(--accent);
      }
      border-color: var(--accent);
    `;
  }
};

export const WeeklyItemContainer = styled.div`
  position: relative;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const WeeklyItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--text);
  padding-left: 4px;

  ${dynamic}
`;

export const WeeklyItemDate = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const WeeklyItemDay = styled.span`
  opacity: 0.4;
  font-size: 14px;
`;

export const WeeklyItemBody = styled.div`
  position: relative;
  min-height: 304px;
  height: 100%;

  &:hover {
    input:not(:focus) {
      border-bottom: 1px solid var(--accent);
    }
  }
`;

export const WeeklyList = styled.div`
  position: relative;
  height: 100%;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    mask-size: 100% 38px;
    mask-repeat: repeat;
    mask-image: url('/images/underline.svg');
    background-color: var(--text);
  }
`;

export const WeeklyInputBox = styled.div`
  position: relative;
  width: 100%;
  height: 38px;
`;

export const TodoInputItem = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 38px;
  padding: 8px 18px;
  font-size: 14px;
  line-height: 22px;
  color: var(--text);
  border: 0;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.2s ease, box-shadow 0.2s ease;
  font-family: 'Ubuntu', 'GothicA1';
  transform: translate(-50%, -50%);

  &:hover {
    background: var(--input-hover-bg);
  }

  &:focus {
    width: calc(100% + 12px);
    height: 42px;
    background: var(--input-bg);
    box-shadow: var(--input-shadow);
    border-color: transparent;
    border-radius: 4px;
  }
`;

export const TodoItemBox = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 22px;
  border-bottom: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: var(--input-hover-bg);
  }
`;
