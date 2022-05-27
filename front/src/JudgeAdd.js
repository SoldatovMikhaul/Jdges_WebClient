import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

class JudgeAdd extends Component {

    emptyItem = {
        dateOfBirth: '',
        fullName: '',
        email1: '',
        federalDistrict:'',
        codeFIDE: '',
        categoryRF: '',
        regionRF:'',
        categoryFIDE:'',
        titleFIDE:'',
        titleRF:''
    };


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('api/judges' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/judges');
    }
    render() {
    return <div>
            <AppNavbar/>
            <Container>
                <h2>Изменение информации о судье</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="surname">Фамилия</Label>
                        <Input type="text" name="surname" id="surname" value={''}
                               onChange={this.handleChange} autoComplete="surname"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Имя</Label>
                        <Input type="text" name="name" id="name" value={''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="patronymic">Отчество</Label>
                        <Input type="text" name="patronymic" id="patronymic" value={''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="photo">Новая фотография</Label>
                        <Input type="file" name="photo" id="photo"
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateOfBirth">Дата рождения</Label>
                        <Input type="text" name="dateOfBirth" id="dateOfBirth" value={''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="codeFIDE">Код ФИДЕ</Label>
                        <Input type="text" name="codeFIDE" id="codeFIDE" value={''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryFIDE">Категория ФИДЕ </Label>
                        <Input type="text" id="categoryFIDE" value={''}
                                onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="titleFIDE">Звание ФИДЕ </Label>
                        <Input type="text" id="titleFIDE" value={''}
                                onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="titleRF">Звание РФ</Label>
                        <Input type="text" id="titleRF" value = {''}
                                onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryRF">Категория РФ</Label>
                        <Input type="text" name="categoryRF" id="categoryRF" value={''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryRFAssignmentDate">Дата присвоения категории РФ  </Label>
                        <Input type="text" name="categoryRFAssignmentDate" id="categoryRFAssignmentDate" value={''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryRF">Дата подтверждения категории РФ </Label>
                        <Input type="text" name="categoryRF" id="categoryRF" value={''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryRFValidUntil">Категория РФ действует до </Label>
                        <Input type="text" name="categoryRFValidUntil" id="categoryRFValidUntil" value={''}
                               onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="federalDistrict">Федеральный округ </Label>
                        <Input type="text" name="federalDistrict" id="federalDistrict" value={''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="text" name="email" id="email" value={''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="secondary" tag={Link} to="/judges" style= {{marginRight: '40px'}}>Сохранить изменения и добавить судью</Button>
                        <Button color="secondary" tag={Link} to="/judges">Отменить добавление и вернуться к списку судей</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(JudgeAdd);