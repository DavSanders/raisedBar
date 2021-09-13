import React from "react";
import "./App.css";

const ButtonTestComponent = () => {
    const [displayTest, setDisplayTest] = React.useState(false);

    const handleButtonClick = () => {
        setDisplayTest(!displayTest);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>test</button>

            {displayTest && (
                <h1 className="text">click button again to get rid</h1>
            )}
        </div>
    );
};

// eslint-disable-next-line valid-jsdoc
/** @return our top level app */
function App() {
    return (
        <div className="App">
            <ButtonTestComponent></ButtonTestComponent>
        </div>
    );
}

export default App;