import Button from "./components/Button/Button";
import Input from "./components/Input/Input";



function App() {
    return (
        <>
            <Button>Применить</Button>
            <Button appearance="big">
                <img src="exit-icon.svg"></img>
                Выход
            </Button>
            <Button appearance="big">
                <img src="cart-icon.svg"></img>
                Выход
            </Button>
            <Input placeholder="Email" />
        </>
    );
}

export default App;
