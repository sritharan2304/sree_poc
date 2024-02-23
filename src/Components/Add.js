import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Curd/Employees';
import {v4 as uuid} from "uuid";
import { Link,useNavigate } from 'react-router-dom';


const Add = () => {
const [name,setName] = useState("")
const [age,setAge] = useState("")

let history= useNavigate();

const handleSubmit = (e)=>{
    e.preventDefault();

const ids = uuid();
let uniqueId= ids.slice(0,8)

let a = name,
b = age;

Employees.push({id: uniqueId, name:a, age:b});

history("/");
}



  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
        <Form.Group className='mb-3 ' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Name' required onChange={(e) =>setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3 ' controlId='formAge'>
            <Form.Control type='text' placeholder='Enter Age' required onChange={(e) =>setAge(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button type='submit'onClick={handleSubmit}> submit</Button>
      </Form>
    </div>
  )
}

export default Add
