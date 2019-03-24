/// <reference types="react" />
declare type WorkoutDay = 'a' | 'b';
interface WorkoutHistory {
    [key: string]: Array<{
        excercise: string;
        value: number;
    }>;
}
declare class WorkoutStore {
    currentSpat: number;
    currentBenchPress: number;
    currentOverHeadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;
    lastWorkoutDay: WorkoutDay;
    history: WorkoutHistory;
}
export declare const WorkoutStoreContext: import("react").Context<WorkoutStore>;
export {};
