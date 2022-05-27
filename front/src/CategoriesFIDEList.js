import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class CategoriesFIDEList extends Component {

    constructor(props) {
        super(props);
        this.state = {categoriesFIDE: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/categoryFIDE')
            .then(response => response.json())
            .then(data => this.setState({categoriesFIDE: data}));
    }

    async remove(id) {
        await fetch(`/api/categoryFIDE/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.categoriesFIDE].filter(i => i.id !== id);
            this.setState({categoriesFIDE: updatedClients});
        });
    }

    render() {
        const {categoriesFIDE} = this.state;

        const categoriesFIDEList = categoriesFIDE.map(categoryFIDE => {
                return<tr key={categoryFIDE.id}>
                <td>{categoryFIDE.fullName}</td>
                <td>{categoryFIDE.shortName}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/categoryFIDE/edit/" + categoryFIDE.id} >Изменить</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(categoryFIDE.id)}>Удалить</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h3>Список категорий ФИДЕ</h3>
                    <Table /*className="mt-4"*/ sx={{ minWidth: 650 }} aria-label="simple table">
                         <thead>
                            <tr>
                                <th width="33%">Полное название</th>
                                <th width="34%">Сокращенное название</th>
                                <th width="33%">Действия</th>
                            </tr>
                         </thead>
                         <tbody>
                            {categoriesFIDEList}
                         </tbody>
                    </Table>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/api/regionFIDE/new">Добавить новую категорию ФИДЕ</Button>
                    </div>
                </Container>
            </div>
        );
    }
}
export default CategoriesFIDEList