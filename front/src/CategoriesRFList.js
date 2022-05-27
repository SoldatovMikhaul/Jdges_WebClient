import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class CategoriesRFList extends Component {

    constructor(props) {
        super(props);
        this.state = {categoriesRF: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/categoryRF')
            .then(response => response.json())
            .then(data => this.setState({categoriesRF: data}));
    }

    async remove(id) {
        await fetch(`/api/categoryRF/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.categoriesRF].filter(i => i.id !== id);
            this.setState({categoriesRF: updatedClients});
        });
    }

    render() {
        const {categoriesRF} = this.state;

        const categoriesRFList = categoriesRF.map(categoryRF => {
                return<tr key={categoryRF.id}>
                <td>{categoryRF.fullName}</td>
                <td>{categoryRF.shortName}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/api/categoryRF/edit" + categoryRF.id} >Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(categoryRF.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Список категорий РФ</h3>
                    <Table /*className="mt-4"*/ sx={{ minWidth: 650 }} aria-label="simple table">
                         <thead>
                            <tr>
                                <th width="33%">Полное название</th>
                                <th width="34%">Сокращенное название</th>
                                <th width="33%">Действия</th>
                            </tr>
                         </thead>
                         <tbody>
                            {categoriesRFList}
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
export default CategoriesRFList