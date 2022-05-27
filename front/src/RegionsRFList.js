import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class RegionsRFList extends Component {

    constructor(props) {
        super(props);
        this.state = {regionsRF: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/regionRF')
            .then(response => response.json())
            .then(data => this.setState({regionsRF: data}));
    }

    async remove(id) {
        await fetch(`/api/regionRF/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.regionsRF].filter(i => i.id !== id);
            this.setState({regionsRF: updatedClients});
        });
    }

    render() {
        const {regionsRF} = this.state;

        const regionsRFList = regionsRF.map(regionRF => {
                return<tr key={regionRF.id}>
                <td>{regionRF.fullName}</td>
                <td>{regionRF.regionCode}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/regionRF/edit/" + regionRF.id} >Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(regionRF.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Список субъектов РФ</h3>
                    <Table /*className="mt-4"*/ sx={{ minWidth: 650 }} aria-label="simple table">
                         <thead>
                            <tr>
                                <th width="33%">Полное название</th>
                                <th width="34%">Код</th>
                                <th width="33%">Действия</th>
                            </tr>
                         </thead>
                         <tbody>
                            {regionsRFList}
                         </tbody>
                    </Table>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/regionRF/new">Добавить новый субъект</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default RegionsRFList;