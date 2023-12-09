'use client';
import React, { FC, useEffect } from 'react';
import classes from 'classnames';
import { useTranslation } from 'react-i18next';
import Button from '../button/Button';
import Container from '../container/Container';
// eslint-disable-next-line import/no-named-as-default
import ProgressInfo from '../resultLesson/ProgressInfo';
import SmallContainer from '../smallContainer/SmallContainer';
import TooltipContent from '../tooltip/Tooltip';
import cls from './testResult.module.css';
import TimeCertificate from './TimeCertificate';
import WordCertificate from './WordCertificate';


interface TestResultProps {
  accuracy: number
  time: number
  speed: number
  title: string
  type?: 'word' | 'time'
}

const TestResult: FC<TestResultProps> = (props) => {
  const {
    accuracy = 50,
    time = 95,
    speed = 50,
    title = 'Новая буква',
    type = 'word'
  } = props;

  const { t } = useTranslation();

  const handleRepeatAction = () => {
    // eslint-disable-next-line no-console
    console.log('Repeat action');
  };

  const handleEnterAction = () => {
    // eslint-disable-next-line no-console
    console.log('Enter action');
  };

  const handleEscAction = () => {
    // eslint-disable-next-line no-console
    console.log('Esc action');
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();

    switch (key) {
      case 'r':
        handleRepeatAction();
        break;
      case 'enter':
        handleEnterAction();
        break;
      case 'escape':
        handleEscAction();
        break;
      default:
        break;
    }
  };



  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <SmallContainer>
        <h2 className={cls.result_title}>Тест <span>{title}</span> завершен</h2>
        <div className={cls.result_block}>
          <div className={cls.block_right}>
            <div className={cls.result}>
              <p className={cls.test_text}>Издержки фирмы, <span>завуалированные</span> в виде всевозможных пожертвований, <span>финансовой</span> помощи, безвозвратных ссуд, <span>необходимых</span> для обеспечения производства и сбыта продукции. Чаще всего они финансируются за счет `черных касс`. <span>Современный</span> экономический словарь.</p>
            </div>
          </div>
          <div>
            <ProgressInfo time={time} accuracy={accuracy} speed={speed} />
          </div>
          <div>
            <WordCertificate title={title} />
          </div>
          <div className={classes(cls.jkasdkja, { [cls.btn_hidden]: type === 'time' })}>
            <TimeCertificate />
          </div>
        </div>
        <div className={cls.btn_blocks}>
          <Button className={classes(cls.btn_exit, 'exit')} onClick={handleEscAction}>
            {t('button.exit')}
            <span>(esc)</span>
          </Button>
          <TooltipContent anchorSelect='.exit' content={t('tooltip.esc')} />
          <div className={cls.btn_block}>
            <Button className={classes(cls.btn_exit, 'repeat')} onClick={handleRepeatAction}>
              {t('button.repeat')}
              <span>(R)</span>
            </Button>
            <TooltipContent anchorSelect='.repeat' content={t('tooltip.r')} />
            <Button className={classes(cls.btn_continue, 'continue', { [cls.btn_hidden]: type === 'word' })} onClick={handleEnterAction}>
              {t('button.continue')}
              <span>(enter)</span>
            </Button>
            <TooltipContent anchorSelect='.continue' content={t('tooltip.enter')} />
          </div>
        </div>
      </SmallContainer>
    </Container>
  );
};

export default TestResult;