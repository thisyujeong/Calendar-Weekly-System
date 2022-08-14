import styled from '@emotion/styled';

export const ToggleContainer = styled.div`
  border-radius: 40%;
  background: var(--toggle-icon-bg);
  transition: all 0.2s ease, transform 0.1s ease;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
export const ToggleButton = styled.div`
  width: 40px;
  height: 40px;
  background: var(--toggle-icon);
  mask-size: 20px 20px;
  mask-repeat: no-repeat;
  mask-position: center;

  &[data-theme='dark'] {
    animation: spin 0.3s ease;
    mask-image: url(/images/theme-dark.svg);
  }
  &[data-theme='light'] {
    animation: spin 0.3s ease;
    mask-image: url(/images/theme-light.svg);
  }

  &:hover {
    background: #ffbd0c;
  }

  &:active {
    background: #ffa600;
  }
`;
