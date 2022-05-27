import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class JudgesList extends Component {

    constructor(props) {
        super(props);
        this.state = {judges: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/api/judges')
            .then(response => response.json())
            .then(data => this.setState({judges: data}));
    }

    async remove(id) {
        await fetch(`/api/judges/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.judges].filter(i => i.id !== id);
            this.setState({judges: updatedClients});
        });
    }

    render() {
        const {judges} = this.state;

        const judgesList = judges.map(judge => {
                return<tr key={judge.id}>
                <td>{judge.fullName}</td>
                <td>{judge.age}</td>
                <td>{judge.phoneNumber1}</td>
                <td>{judge.email1}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/judges/edit/" + judge.id} >Изменить</Button>
                        <Button size="sm" color="info" tag={Link} to={"/judges/" + judge.id} >Подробнее</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(judge.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Список судей</h3>
                    <Table /*className="mt-4"*/ sx={{ minWidth: 650 }} aria-label="simple table">
                         <thead>
                            <tr>
                                <th width="25%">ФИО</th>
                                <th width="15%">Возраст</th>
                                <th width="20%">Номер телефона</th>
                                <th width="20%">Адрес эл. почты</th>
                                <th width="30%">Действия</th>
                            </tr>
                         </thead>
                         <tbody>
                            {judgesList}
                         </tbody>
                    </Table>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/judges/new">Добавить нового судью</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default JudgesList;