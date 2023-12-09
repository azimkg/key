import { FC } from 'react';
import classes from 'classnames';
import Button from 'common/button/Button';
import Container from 'common/container/Container';
import Progress from 'common/progress/Progress';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';
import type { TFunction } from 'i18next';
import type { IMainProgressData } from 'types/commonTypes';
import CourseSelection from './courseSelection/CourseSelection';
import cls from './mainSectionProgress.module.css';


interface ICourseSelectionProps {
  t: TFunction
  activeCourse: string
  courseData: IMainProgressData
}
const MainSectionProgress: FC<ICourseSelectionProps> = ({ t, activeCourse, courseData }) => {
  return (
    <div className={cls.template}>
      <Container>
        <div className={cls.div}>
          <p className={cls.label}>{t('course-progress.label')}</p>
          <ClientProviders>
            <CourseSelection activeCourse={activeCourse}/>
          </ClientProviders>
        </div>
        <Progress className={cls.progress} percent={courseData.progress} height={40} withPercent/>
        <Button width={'fit-content'} className={classes(cls.btn, { [ cls.btn_hidden ]: courseData.progress !== 100 })}>{t('button.print')}</Button>
        <div className={cls.results}>
          <div>
            <p>{courseData.rate}wpm</p>
            <p>{t('course-progress.courses.result.rate')}</p>
          </div>
          <div>
            <p>{courseData.accuracy}%</p>
            <p>{t('course-progress.courses.result.accuracy')}</p>
          </div>
          <div>
            <p>{courseData.spendTime}</p>
            <p>{t('course-progress.courses.result.time')}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainSectionProgress;
