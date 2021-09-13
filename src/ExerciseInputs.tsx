import React from "react";
import "./ExerciseInputs.css";

const labelledInput = (name: string, type: string) => {
    return (
        <div className="labelledInput">
            <label htmlFor={name}>{name}:</label>
            <input type={type} id={name}></input>
        </div>
    );
};

const ExerciseInputForm = () => {
    return (
        <div>
            <form>
                {labelledInput("Exercise", "text")}
                {labelledInput("Sets", "number")}
                {labelledInput("Reps per set", "number")}
                {labelledInput("Weight (kg)", "number")}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ExerciseInputForm;
