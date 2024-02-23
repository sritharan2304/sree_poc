import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from '../Curd/Employees'
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        let a =Employees[index];
        a.name = name;
        a.age = age;
    
    history("/");
    }

    useEffect(() =>{
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setId(localStorage.getItem('id'))
    })

    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
                <Form.Group className='mb-3 ' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Name'value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3 ' controlId='formAge'>
                    <Form.Control type='text' placeholder='Enter Age' value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' onClick={handleSubmit}> update</Button>
            </Form>
        </div>
    )
}

export default Edit
