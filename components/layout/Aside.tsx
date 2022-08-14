import { useState } from 'react';
import * as S from './Aside.style';

type AsideProps = {
  children: React.ReactNode | undefined;
};

const Aside = ({ children }: AsideProps) => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(true);

  return (
    <S.AsideContainer open={isAsideOpen}>
      <S.AsideToggle
        open={isAsideOpen}
        onClick={() => {
          setIsAsideOpen(!isAsideOpen);
        }}
      ></S.AsideToggle>
      <S.AsideInner open={isAsideOpen}>
        <S.AsideTitle>Weekply</S.AsideTitle>
        <S.AsideContent>{children}</S.AsideContent>
      </S.AsideInner>
    </S.AsideContainer>
  );
};

export default Aside;
