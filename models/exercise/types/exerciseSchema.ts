export enum StageExercise {
  DESCRIPTION,
  START,
  RESULT,
  CERTIFICATE
}

export enum ExerciseType {
  NEW_LETTER_START ='new-letter-start',
  NEW_LETTER = 'new-letter',
  STANDARD = 'standard',
  CODING = 'coding',
  TEST = 'test',
  DROP_LETTER = 'drop-letter'
}

export interface IExerciseSchema {
  stage: StageExercise,
  exerciseType: ExerciseType
}
