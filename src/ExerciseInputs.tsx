import React, { useState } from "react";
import "./ExerciseInputs.css";

interface LabelledInputProps {
    name: string;
    type: string;
}

const LabelledInput = (props: LabelledInputProps) => {
    return (
        <div className="labelledInput">
            <label htmlFor={props.name}>{props.name}:</label>
            <input type={props.type} id={props.name}></input>
        </div>
    );
};

const SetInputForm = () => {
    return (
        <div>
            <form>
                {/* <LabelledInput name="Sets" type="number"></LabelledInput> */}
                <LabelledInput name="Reps" type="number"></LabelledInput>
                <LabelledInput name="Weight (kg)" type="number"></LabelledInput>
            </form>
        </div>
    );
};

const ExerciseInputForm = () => {
    const emptySets: JSX.Element[] = [];

    const [sets, setSets] = useState(emptySets);

    const addSet = (e: React.MouseEvent) => {
        event?.preventDefault();
        setSets([...sets, <SetInputForm key={sets.length}></SetInputForm>]);
    };

    return (
        <div>
            <form>
                <LabelledInput name="Exercise" type="text"></LabelledInput>
                <button onClick={(e) => addSet(e)}>Add Set</button>
            </form>
            {sets}
        </div>
    );
};

const ExerciseInputFormTable = () => {
    // TODO: see if we can replace this state with a prop (eg make it more easily configurable by input when called)
    const emptyExercises: JSX.Element[] = [];

    const [exercises, setExercises] = useState(emptyExercises);

    const addExercise = (e: React.MouseEvent) => {
        e.preventDefault();
        setExercises([
            ...exercises,
            <ExerciseInputForm key={exercises.length}></ExerciseInputForm>,
        ]);
    };

    return (
        <div>
            {exercises}
            <button onClick={(e) => addExercise(e)}>Add Exercise</button>
        </div>
    );
};

export default ExerciseInputFormTable;
