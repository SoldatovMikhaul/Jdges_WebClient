import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class TitlesRFList extends Component {

    constructor(props) {
        super(props);
        this.state = {titlesRF: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/titleRF')
            .then(response => response.json())
            .then(data => this.setState({titlesRF: data}));
    }

    async remove(id) {
        await fetch(`/api/titleRF/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.titlesRF].filter(i => i.id !== id);
            this.setState({titlesRF: updatedClients});
        });
    }

    render() {
        const {titlesRF} = this.state;

        const titlesRFList = titlesRF.map(titleRF => {
                return<tr key={titleRF.id}>
                <td>{titleRF.fullName}</td>
                <td>{titleRF.shortName}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/api/titleRF/edit" + titleRF.id} >Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(titleRF.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Список званий РФ</h3>
                    <Table /*className="mt-4"*/ sx={{ minWidth: 650 }} aria-label="simple table">
                         <thead>
                            <tr>
                                <th width="33%">Полное название</th>
                                <th width="34%">Сокращенное название</th>
                                <th width="33%">Действия</th>
                            </tr>
                         </thead>
                         <tbody>
                            {titlesRFList}
                         </tbody>
                    </Table>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/api/regionRF/new">Добавить новую категорию РФ</Button>
                    </div>
                </Container>
            </div>
        );
    }
}
export default TitlesRFList