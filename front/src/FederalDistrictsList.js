import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class FederalDistrictsList extends Component {

    constructor(props) {
        super(props);
        this.state = {federalDistricts: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/federalDistricts')
            .then(response => response.json())
            .then(data => this.setState({federalDistricts: data}));
    }

    async remove(id) {
        await fetch(`/api/federalDistrict/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.federalDistricts].filter(i => i.id !== id);
            this.setState({federalDistricts: updatedClients});
        });
    }

    render() {
        const {federalDistricts} = this.state;

        const federalDistrictList = federalDistricts.map(federalDistrict => {
                return<tr key={federalDistrict.id}>
                <td>{federalDistrict.fullName}</td>
                <td>{federalDistrict.shortName}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/federalDistrict/edit/" + federalDistrict.id} >Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(federalDistrict.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Список федеральных округов</h3>
                    <Table /*className="mt-4"*/ sx={{ minWidth: 650 }} aria-label="simple table">
                         <thead>
                            <tr>
                                <th width="33%">Полное название</th>
                                <th width="34%">Сокращенное название</th>
                                <th width="33%">Действия</th>
                            </tr>
                         </thead>
                         <tbody>
                            {federalDistrictList}
                         </tbody>
                    </Table>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/federalDistrict/new">Добавить новый федеральный округ</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default FederalDistrictsList;