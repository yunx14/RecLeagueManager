import { useState } from "react";
import { Container } from "@mui/system";

const Accordian = (props) => {
    const {
        title,
        body
    } = props;

    const [toggle, setToggle] = useState('closed');

    function handleToggle() {
        setToggle(toggle==="open" ? 'closed' : 'open');
    }
    return (
        <Container maxWidth="xl">
            <div className="accordian">
                <div className="accordian_title">
                    {title}
                    <button onClick={handleToggle} className="accordian_toggle">{toggle === 'open' ? "-" : "+"}</button>
                </div>
                <div className={`accordian_body ${toggle}`}>
                    {body}
                </div>
            </div>
        </Container>
    )
}

export default Accordian;