import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipPositionedExample({ icon, text }) {
    return (
        <>
            {['top'].map((placement) => (
                <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                            {text}
                        </Tooltip>

                    }
                >
                    <Button variant="secondary">{icon}</Button>
                </OverlayTrigger>
            ))}
        </>
    );
}

export default TooltipPositionedExample;