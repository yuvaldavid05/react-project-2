import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { LuMousePointerClick } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';



function VisitMe({ nav }) {
    const navigate = useNavigate();

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
            <Button variant="success" onClick={() => navigate(nav)}>

                <LuMousePointerClick />
                ...מי אנחנו

            </Button>
        </OverlayTrigger>
    );
}

export default VisitMe;