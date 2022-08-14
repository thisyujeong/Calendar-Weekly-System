import dynamic from 'next/dynamic';
import Calendar from '../Calendar/Calendar';
import Aside from './Aside';
import * as S from './Container.style';

type LayoutProps = {
  children: React.ReactNode | undefined;
};

const Header = dynamic(() => import('./Header'), {
  ssr: false,
});

const LayoutContianer = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Aside>
        <Calendar />
      </Aside>
      <S.Content>
        <Header />
        <S.Main>{children}</S.Main>
      </S.Content>
    </S.Container>
  );
};

export default LayoutContianer;
