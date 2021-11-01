import React, { useState } from "react";
import "./ExerciseInputs.css";

interface LabelledInputProps {
    label: string;
    name: string;
    type: string;
    handleChange: (e: React.FormEvent) => void;
}

const LabelledInput = (props: LabelledInputProps) => {
    return (
        <div className="labelledInput">
            <label htmlFor={props.name}>{props.label}:</label>
            <input
                name={props.name}
                type={props.type}
                id={props.name}
                onChange={props.handleChange}
            ></input>
        </div>
    );
};

interface Exercise {
    ExerciseName: string;
    Sets: Set[];
}

interface Set {
    number: number;
    Reps: string;
    Weight: string;
}

interface ExerciseInputProps {
    Name: string;
    Index: number;
    Sets: Set[];
    addSet: (e: React.MouseEvent, indexOfSet: number) => void;
    updateExerciseName: (e: React.FormEvent, exerciseIndex: number) => void;
    updateReps: (
        e: React.FormEvent,
        exerciseIndex: number,
        indexOfSet: number
    ) => void;
    updateWeight: (
        e: React.FormEvent,
        exerciseIndex: number,
        indexOfSet: number
    ) => void;
}

const ExerciseInput = (props: ExerciseInputProps) => {
    return (
        <div>
            <LabelledInput
                label="Exercise"
                name={props.Name}
                type="text"
                handleChange={(e) => props.updateExerciseName(e, props.Index)}
            />
            <button
                name={props.Name}
                // key={`${v.name}SetButton`}
                onClick={(e) => {
                    props.addSet(e, props.Index);
                }}
            >
                Add Set
            </button>

            {props.Sets.map((v, i) => (
                <div key={`Sets`}>
                    <LabelledInput
                        label="Reps"
                        name={`S${i}Reps`}
                        type="text"
                        handleChange={(e) =>
                            props.updateReps(e, props.Index, i)
                        }
                    />
                    <LabelledInput
                        label="Weight (kg)"
                        name={`S${i}Weight`}
                        type="text"
                        handleChange={(e) =>
                            props.updateWeight(e, props.Index, i)
                        }
                    />
                </div>
            ))}
        </div>
    );
};

const WorkoutInputForm = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);

    const addExercise = (e: React.MouseEvent) => {
        e.preventDefault();
        const newExercise: Exercise = {
            ExerciseName: `E${exercises.length + 1}`,
            Sets: [],
        };
        console.log(`name: ${newExercise.ExerciseName}`);
        setExercises([...exercises, newExercise]);
    };

    const addSet = (e: React.MouseEvent, exerciseIndex: number) => {
        e.preventDefault();

        const indexOfSet = exercises[exerciseIndex].Sets.length;
        const newSet: Set = {
            number: indexOfSet + 1,
            Reps: "0",
            Weight: "0",
        };
        const exercisesCopy = [...exercises];
        exercisesCopy[exerciseIndex].Sets.push(newSet);
        setExercises(exercisesCopy);
        console.log(exercisesCopy[exerciseIndex].Sets[indexOfSet]);
    };

    const updateExerciseName = (e: React.FormEvent, exerciseIndex: number) => {
        // e.preventDefault();
        const target = e.target as HTMLInputElement;

        const exerciseName = target.value;

        const exercisesCopy = [...exercises];
        exercisesCopy[exerciseIndex].ExerciseName = exerciseName;
        setExercises(exercisesCopy);
    };

    const updateReps = (
        e: React.FormEvent,
        exerciseIndex: number,
        indexOfSet: number
    ) => {
        const target = e.target as HTMLInputElement;

        const reps = target.value;
        const exercisesCopy = [...exercises];

        exercisesCopy[exerciseIndex].Sets[indexOfSet].Reps = reps;
        setExercises(exercisesCopy);
    };

    const updateWeight = (
        e: React.FormEvent,
        exerciseIndex: number,
        indexOfSet: number
    ) => {
        const target = e.target as HTMLInputElement;

        const weight = target.value;
        const exercisesCopy = [...exercises];

        exercisesCopy[exerciseIndex].Sets[indexOfSet].Weight = weight;
    };

    const handleSubmit = () => {
        alert(JSON.stringify(exercises));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {exercises.map((v, i) => (
                    <div key={`E${i}`}>
                        <ExerciseInput
                            Name={v.ExerciseName}
                            Sets={v.Sets}
                            Index={i}
                            addSet={addSet}
                            updateExerciseName={updateExerciseName}
                            updateReps={updateReps}
                            updateWeight={updateWeight}
                        />
                    </div>
                ))}

                <button
                    onClick={(e) => {
                        addExercise(e);
                    }}
                >
                    Add Exercise
                </button>
                <input type="submit" value="Submit Workout" />
            </form>
        </div>
    );
};

export default WorkoutInputForm;
