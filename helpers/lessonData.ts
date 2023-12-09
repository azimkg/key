import { Lesson } from 'common/lessonCard/LessonCard';
import { IMainProgressData } from '../types/commonTypes';


export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'Слепая печать',
    lessonNumber: 1,
    progress: 100,
    stars: 32,
    totalStars: 23,
    activeExercise: 1,
    exercisesCount: 4,
    results: {
      speed: 0,
      accuracy: 0,
      spendTime: '',
    }
  },
  {
    id: 2,
    title: 'Слепая печать',
    lessonNumber: 1,
    progress: 0,
    activeExercise: 2,
    exercisesCount: 4,
    results: {
      speed: 0,
      accuracy: 0,
      spendTime: '',
    }
  },
  {
    id: 3,
    title: 'Стандартный урок',
    lessonNumber: 1,
    progress: 50,
    stars: 2,
    totalStars: 32,
    activeExercise: 3,
    exercisesCount: 4,
    results: {
      speed: 0,
      accuracy: 0,
      spendTime: '',
    }
  },{
    id: 4,
    title: 'Урок кодинга',
    lessonNumber: 1,
    progress: 70,
    stars: 2,
    totalStars: 32,
    activeExercise: 4,
    exercisesCount: 4,
    results: {
      speed: 0,
      accuracy: 0,
      spendTime: '',
    }
  },
  {
    id: 5,
    title: 'Тестовый урок',
    lessonNumber: 1,
    progress: 0,
    type: 'test',
    timeTest: '1:00',
    activeExercise: 5,
    exercisesCount: 4,
    results: {
      speed: 56,
      accuracy: 90,
      spendTime: '90',
    }
  }
];

export type Block = {
  id: number,
  name: string,
  lessons: Lesson[]
}

export type Education = {
  basic: {
    progress: number
    blocks: Block[]
  }
}
export interface ICourse {
  result: IMainProgressData
  education: Education
}

export const course: ICourse = {
  result: {
    progress: 0,
    rate: 0,
    accuracy: 0,
    spendTime: '0',
  },
  education: {
    basic: {
      progress: 0,
      blocks: [
        {
          id: 1,
          name: 'Блок',
          lessons: LESSONS,
        }
      ],
    }
  }
};
const exercises = [
  {
    id: 1,
    title: 'Название задания',
    exerciseType: 'new letter',
    exerciseLetter: 'a'
  },
  {
    id: 2,
    title: 'Название задания',
    exerciseType: 'new letter',
    exerciseLetter: 'b'
  }
];
