import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { LuMousePointerClick } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';



function VisitMe() {
    // const navigate = useNavigate();

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            בקרו אותנו
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Button variant="success">

                <LuMousePointerClick />
                ...מי אנחנו

            </Button>

        </OverlayTrigger>
    );
}

export default VisitMe;