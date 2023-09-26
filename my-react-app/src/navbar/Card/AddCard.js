import { useEffect, useState } from "react";
import Joi from 'joi';
import { JOI_HEBREW } from '../../joi-hebrew';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';




function AddCard({ cardNew }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        subtitle: '',
        phone: '',
        email: '',
        web: '',
        imgUrl: '',
        imgAlt: '',
        state: '',
        country: '',
        city: '',
        street: '',
        houseNumber: '',
        zip: '',
    });
    const [errors, setErrors] = useState({});
    const [isModal, setIsModal] = useState(false);



    const structureNewCard = [
        { name: 'title', type: 'text', label: 'שם פרטי', required: true, block: false, sm: '4' },
        { name: 'description', type: 'text', label: 'שם אמצעי', required: false, block: false, sm: '4' },
        { name: 'subtitle', type: 'text', label: 'שם משפחה', required: true, block: false, sm: '4' },
        { name: 'phone', type: 'tel', label: 'טלפון', required: true, block: false, sm: '6' },
        { name: 'email', type: 'email', label: 'אימייל', required: true, block: false, sm: '6' },
        { name: 'web', type: 'text', label: 'סיסמה', required: true, block: true, sm: '12' },
        { name: 'imgUrl', type: 'text', label: 'קישור לתמונה', required: false, block: false, sm: '6' },
        { name: 'imgAlt', type: 'text', label: 'תיאור תמונה', required: false, block: false, sm: '6' },
        { name: 'state', type: 'text', label: 'מחוז', required: false, block: false, sm: '6' },
        { name: 'country', type: 'text', label: 'מדינה', required: true, block: false, sm: '6' },
        { name: 'city', type: 'text', label: 'עיר', required: true, block: false, sm: '4' },
        { name: 'street', type: 'text', label: 'רחוב', required: true, block: false, sm: '2' },
        { name: 'houseNumber', type: 'number', label: 'מספר בית', required: true, block: false, sm: '2' },
        { name: 'zip', type: 'number', label: 'מיקוד', required: false, block: false, sm: '2' },
    ]

    const handleInputChange = (ev) => {
        const { id, value } = ev.target;

        const obj = {
            ...formData,
            [id]: value,
        };

        const productSchema = Joi.object({
            name: Joi.string().min(3).required(),
            price: Joi.number().required(),
            discount: Joi.number().required(),
        });

        const schema = productSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });
        const err = { ...errors, [id]: undefined };

        if (schema.error) {
            const error = schema.error.details.find(e => e.context.key === id);

            if (error) {
                err[id] = error.message;
            }
        }

        setFormData(obj);
        setErrors(err);
    };


    // function add(ev) {
    //     ev.preventDefault();

    //     fetch("https://api.shipap.co.il/products", {
    //         credentials: 'include',
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(formData),
    //     })
    //         .then(res => res.json())
    //         .then(item => {
    //             addedProduct(item);
    //             setIsModal(false);
    //         });
    // }

    return (
        <>
            {
                isModal ?
                    <div className="modal-frame">
                        <div className="modal">
                            <header>
                                <button className="close" onClick={() => setIsModal(false)}>x</button>
                                <h2>מוצר חדש</h2>
                            </header>

                            <Form >
                                {
                                    structureNewCard.map(snewcard => {
                                        <>
                                            <Col>
                                                <Form.Label key={snewcard.name}> {snewcard.label} </Form.Label>
                                                <Form.Control type={snewcard.type} value={formData.name} id={snewcard.name} className={snewcard.required ? (errors[snewcard.name] ? 'fieldError' : '') : ''} onChange={handleInputChange} />

                                            </Col>

                                            {snewcard.required ? (errors[snewcard.name] ? <div className='fieldErrorSignup'>{errors[snewcard.name]}</div> : '') : ''}
                                        </>
                                    })
                                }


                                <button>הוסף</button>
                            </Form>
                        </div>
                    </div> :
                    ''
            }
        </>
    );
}

export default AddCard;