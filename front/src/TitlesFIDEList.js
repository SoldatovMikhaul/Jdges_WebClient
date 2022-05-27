import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class TitlesFIDEList extends Component {

    constructor(props) {
        super(props);
        this.state = {titlesFIDE: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/titleFIDE')
            .then(response => response.json())
            .then(data => this.setState({titlesFIDE: data}));
    }

    async remove(id) {
        await fetch(`/api/titleFIDE/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.titlesFIDE].filter(i => i.id !== id);
            this.setState({titlesFIDE: updatedClients});
        });
    }

    render() {
        const {titlesFIDE} = this.state;

        const titlesFIDEList = titlesFIDE.map(titleFIDE => {
                return<tr key={titleFIDE.id}>
                <td>{titleFIDE.fullName}</td>
                <td>{titleFIDE.shortName}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/api/titleFIDE/edit" + titleFIDE.id} >Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(titleFIDE.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Список званий ФИДЕ</h3>
                    <Table /*className="mt-4"*/ sx={{ minWidth: 650 }} aria-label="simple table">
                         <thead>
                            <tr>
                                <th width="33%">Полное название</th>
                                <th width="34%">Сокращенное название</th>
                                <th width="33%">Действия</th>
                            </tr>
                         </thead>
                         <tbody>
                            {titlesFIDEList}
                         </tbody>
                    </Table>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/api/titleFIDE/new">Добавить новую категорию ФИДЕ</Button>
                    </div>
                </Container>
            </div>
        );
    }
}
export default TitlesFIDEList