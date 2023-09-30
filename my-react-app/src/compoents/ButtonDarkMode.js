import { useState } from "react";
import { Button } from "react-bootstrap";

function ButtonDarkMode() {
    const [btnOn, setBtnOne] = useState(false)

    const changeModeOn = () => {
        document.querySelector('html').style.filter = "invert(100%)";
        setBtnOne(true);
    }

    const changeModeOff = () => {
        document.querySelector('html').style.filter = "initial";
        setBtnOne(false);
    }

    return (
        <Button variant="secondary" onClick={btnOn ? changeModeOff : changeModeOn}>InvertMode</Button>
    )
}

export default ButtonDarkMode;