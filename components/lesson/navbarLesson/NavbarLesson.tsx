'use client';
import { ReactNode } from 'react';
import Close from '@icons/close.svg';
import Repeat from '@icons/remember.svg';
import Container from 'common/container/Container';
import ProgressLineSteps from 'common/progressLineSteps/ProgressLineSteps';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { keyboardActions } from 'models/keyboard/slice/keyboardSlice';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import cls from './navbarLesson.module.css';


interface NavbarLessonProps {
  title?: string;
  children?: ReactNode
}

const NavbarLesson = ({ title = 'xnj', children }: NavbarLessonProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const route = useRouter();
  const { locale, type } = useParams<{locale: string, type: string}>();
  const handleReset = () => {
    dispatch(keyboardActions.handleReset());
  };
  const handleReturn = () => {
    const href = `/${locale}/lessons/${type}`;
    route.push(href);
    dispatch(keyboardActions.handleReset());
  };
  return (
    <>
      <div className={cls.navbar}>
        <Container>
          <div className={cls.navbar_lesson}>
            <div className={cls.navbar_block}>
              <h2>{title}</h2>
              <div className={cls.navbar_btn}>
                {children}
                <div onClick={handleReset}>
                  <Repeat />
                  <span>{ t('button.remember') }</span>
                </div>
                <div onClick={handleReturn}>
                  <Close />
                  <span>{ t('button.close') }</span>
                </div>
              </div>
            </div>
            <ProgressLineSteps progress={24} numSegments={10}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavbarLesson;
