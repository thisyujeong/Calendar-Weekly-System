import CalendarHeading from '../Calendar/CalendarHeading';
import ThemeToggle from '../ThemeToggle';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderToolbar>
        <CalendarHeading />
        <S.HeaderGroup>
          <ThemeToggle />
        </S.HeaderGroup>
      </S.HeaderToolbar>
    </S.HeaderContainer>
  );
};

export default Header;
