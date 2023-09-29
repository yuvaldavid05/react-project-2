import './Snackbar.css';
import Alert from 'react-bootstrap/Alert';

function Snackbar({ text }) {
    return (
        <div id='frameSnackbar'>
            {[
                'dark',
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    {text}
                </Alert>
            ))}
        </div>
    );
}

export default Snackbar;