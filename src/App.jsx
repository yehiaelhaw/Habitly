import './App.css'
import Habit from "./components/Habit.jsx";


function App() {

    return (
        <>
            <Habit
                id="1"
                title="Morning Jog"
                description="Go for a 20-minute run"
                checked={false}
                streak={5}
                handleChange={() => console.log("Toggled habit")}
                handleRemove={() => console.log("Removed habit")}
            />
        </>
    )
}

export default App
