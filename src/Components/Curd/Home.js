import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
    }

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/');
    }

    return (
        <>
            <div style={{ margin: "10rem" }}>
                <Table striped
                    hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                name
                            </th>
                            <th>
                                age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0 ? Employees.map((item) => {
                                return (
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                            <Link to={'./edit'}>
                                                <Button onClick={() => handleEdit(item.id, item.name, item.age)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                                : "null"
                        }
                    </tbody>
                </Table>
                <div>
                    <Link className='d-grid gap-2' to={'/create'}>
                        <Button size='lg'>create</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home
