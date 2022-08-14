import { useEffect, useState } from 'react';
import * as S from './ThemeToggle.style';

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useState<string>(document.body.dataset.theme!);

  useEffect(() => {
    document.body.dataset.theme = themeMode;
    window.localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const themeModeHandle = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };
  return (
    <S.ToggleContainer>
      <S.ToggleButton
        className={themeMode}
        onClick={themeModeHandle}
        data-theme={themeMode}
      ></S.ToggleButton>
    </S.ToggleContainer>
  );
};

export default ThemeToggle;
