import { StateSchema } from 'configs/store/stateSchema';


export const getStageExercise = (state: StateSchema) => state.exercise.stage;
export const getExerciseType = (state: StateSchema) => state.exercise.exerciseType;
