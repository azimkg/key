import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LessonProgressSteps from '../lessonProgressSteps/LessonProgressSteps';
import cls from './resultLesson.module.css';


interface ProgressResultProps{
  totalTask: number
  currentTask: number
}

const ProgressResult: FC<ProgressResultProps> = ({ totalTask, currentTask }) => {
  const { t } = useTranslation();
  return (
    <div className={cls.result_progress}>
      <div>
        <h2>Клавиши А и О</h2>
        <p>{currentTask} / {totalTask} {t('result.task-result')}</p>
      </div>
      <LessonProgressSteps totalTask={totalTask} currentTask={currentTask}></LessonProgressSteps>
    </div>
  );
};

export default ProgressResult;