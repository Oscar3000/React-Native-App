import { createContext } from "react";

type WorkoutDay = 'a' | 'b';

interface WorkoutHistory{
    [key: string]: Array<{
        excercise:string,
        value: number
    }>
}

class WorkoutStore{
    currentSpat: number;
    currentBenchPress: number;
    currentOverHeadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;

    lastWorkoutDay: WorkoutDay;

    history: WorkoutHistory

}


export const WorkoutStoreContext = createContext(new WorkoutStore());