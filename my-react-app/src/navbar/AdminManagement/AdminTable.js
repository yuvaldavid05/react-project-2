import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './AdminManagement.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';




function AdminTable() {
    const [clients, setClients] = useState([]);



    const structureAdmin = [
        { name: 'firstName', type: 'text', label: 'שם פרטי', business: true, block: false, sm: '4' },
        { name: 'middleName', type: 'text', label: 'שם אמצעי', business: false, block: false, sm: '4' },
        { name: 'lastName', type: 'text', label: 'שם משפחה', business: true, block: false, sm: '4' },
        { name: 'phone', type: 'tel', label: 'טלפון', business: true, block: false, sm: '6' },
        { name: 'email', type: 'email', label: 'אימייל', business: true, block: false, sm: '6' },
        { name: 'imgUrl', type: 'text', label: 'קישור לתמונה', business: false, block: false, sm: '6' },
        { name: 'imgAlt', type: 'text', label: 'תיאור תמונה', business: false, block: false, sm: '6' },
        { name: 'state', type: 'text', label: 'מחוז', business: false, block: false, sm: '6' },
        { name: 'country', type: 'text', label: 'מדינה', business: true, block: false, sm: '6' },
        { name: 'city', type: 'text', label: 'עיר', business: true, block: false, sm: '4' },
        { name: 'street', type: 'text', label: 'רחוב', business: true, block: false, sm: '2' },
        { name: 'houseNumber', type: 'number', label: 'מספר בית', business: true, block: false, sm: '2' },
        { name: 'zip', type: 'number', label: 'מיקוד', business: false, block: false, sm: '2' },
        { name: 'business', type: 'boolean', label: 'לקוח עסקי', business: true, block: false, sm: '6' },

    ]

    useEffect(() => {
        fetch(`https://api.shipap.co.il/admin/clients?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                setClients(data);
            });
    }, []);

    const removeClient = (clientdId) => {
        if (!window.confirm("למחוק משתמש זה?")) {
            return;
        }

        fetch(`https://api.shipap.co.il/admin/clients/${clientdId}?token=d2960ef2-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'DELETE',
        })
            .then(() => {
                setClients(clients.filter(c => c.id !== clientdId));

            });
    }

    //     switch () {
    //         case x
    // }
    return (

        <Card className='MiniCardInfo'>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href='#first'>
                            לקוחות
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>כל הלקוחות</Card.Title>
                <Card.Text>
                    -
                    <Table responsive className='adminTable'>
                        <thead>
                            <tr>
                                <th>#</th>
                                {structureAdmin.map((str, i) => (
                                    <th key={i}>{str.label}</th>
                                )
                                )}
                                {/* <th>עריכה</th> */}
                                <th>מחיקה</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, i) => (

                                <tr key={i}>
                                    <th></th>
                                    {structureAdmin.map((str2, index) => (

                                        str2.type === 'boolean' ?
                                            <td key={index}>{client[str2.name] ? 'כן' : '-'}</td>
                                            :
                                            <td key={index}>{client[str2.name] || '-'}</td>


                                    ))}
                                    <>
                                        {/* <td>
                                            <Link to={`/admin/clients/${client.id}`}>
                                                <RiEditBoxLine />
                                            </Link>
                                        </td> */}
                                        <td onClick={() => removeClient(client.id)}>
                                            <AiFillDelete />
                                        </td>
                                    </>
                                </tr>

                            ))}

                        </tbody>
                    </Table >
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    );
}

export default AdminTable;