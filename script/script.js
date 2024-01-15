const header = document.querySelector('.navbar')

window.onscroll = function () {
    const top = document.documentElement.scrollTop;
    if (top >= 100) {
        header.classList.add("navbarDark");
    } else {
        header.classList.remove("navbarDark");
    }
};
import DiceRoll from "./DiceRoll";
export default function App() {
    return (
        <div className="App">
            <DiceRoll />
            <DiceRoll />
        </div>
    );
}
import Die from "./Die";
export default function DiceRoll() {
    return (
        <div>
            <h1>Dice Roll</h1>
            <Die />
            <Die />
            <Die />
        </div>
    );
}
export default function Die() {
    const roll = Math.floor(Math.random() * 6) + 1;
    return <h2>Die Roll: {roll}</h2>;
}
