import React from "react";
import "./App.css";
import ExerciseInputForm from "./ExerciseInputs";

// eslint-disable-next-line valid-jsdoc
/** @return our top level app */
function App() {
    // const emptyExercises: JSX.Element[] = [];

    return (
        <div className="App">
            <ExerciseInputForm
            // initialExercises={emptyExercises}
            ></ExerciseInputForm>
        </div>
    );
}

export default App;
