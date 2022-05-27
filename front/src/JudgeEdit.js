import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';
import judgePhoto from './personalPhotos/judg.png';

class JudgeEdit extends Component {

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

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const judge = await (await fetch(`/api/judges/{id}?id=${this.props.match.params.id}`)).json();
            this.setState({item: judge});
        }
    }
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
        const {item} = this.state;

        function convertDate(date) {
           let normalDate = new Date(parseInt(date));
           return (normalDate.getMonth() + 1 ) +'/'+normalDate.getDate() + '/' + +normalDate.getFullYear()
        }
        const title = <h2>Edit Client</h2>;

    return <div>
            <AppNavbar/>
            <Container>
                <h2>Изменение информации о судье</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="surname">Фамилия</Label>
                        <Input type="text" name="surname" id="surname" value={item.fullName.split(" ")[0] || ''}
                               onChange={this.handleChange} autoComplete="surname"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Имя</Label>
                        <Input type="text" name="name" id="name" value={item.fullName.split(" ")[1] || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="patronymic">Отчество</Label>
                        <Input type="text" name="patronymic" id="patronymic" value={item.fullName.split(" ")[2] || ''}
                               onChange={this.handleChange} autoComplete="patronymic"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="photo">Новая фотография</Label>
                        <Input type="file" name="photo" id="photo"
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateOfBirth">Дата рождения</Label>
                        <Input type="text" name="dateOfBirth" id="dateOfBirth" value={convertDate(item.dateOfBirth)}
                               onChange={this.handleChange} autoComplete="dateOfBirth"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="codeFIDE">Код ФИДЕ</Label>
                        <Input type="text" name="codeFIDE" id="codeFIDE" value={item.codeFIDE}
                               onChange={this.handleChange} autoComplete="codeFIDE"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryFIDE">Категория ФИДЕ </Label>
                        <Input type="text" id="categoryFIDE" value={item.categoryFIDE.fullName}
                                onChange={this.handleChange} autoComplete="categoryFIDE"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="titleFIDE">Звание ФИДЕ </Label>
                        <Input type="text" id="titleFIDE" value={item.titleFIDE.fullName}
                                onChange={this.handleChange} autoComplete="titleFIDE"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="titleRF">Звание РФ</Label>
                        <Input type="text" id="titleRF" value = {item.titleRF.fullName}
                                onChange={this.handleChange} autoComplete="categoryRF"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryRF">Категория РФ</Label>
                        <Input type="text" name="categoryRF" id="categoryRF" value={item.categoryRF.fullName}
                               onChange={this.handleChange} autoComplete="categoryRF"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryRFAssignmentDate">Дата присвоения категории РФ  </Label>
                        <Input type="text" name="categoryRFAssignmentDate" id="categoryRFAssignmentDate" value={convertDate(item.categoryRFAssignmentDate)}
                               onChange={this.handleChange} autoComplete="categoryRFAssignmentDate"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryRF">Дата подтверждения категории РФ </Label>
                        <Input type="text" name="categoryRF" id="categoryRF" value={convertDate(item.categoryRFConfirmationDate)}
                               onChange={this.handleChange} autoComplete="categoryRF"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoryRFValidUntil">Категория РФ действует до </Label>
                        <Input type="text" name="categoryRFValidUntil" id="categoryRFValidUntil" value={convertDate(item.categoryRFValidUntil)}
                               onChange={this.handleChange} autoComplete="categoryRFValidUntil"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="federalDistrict">Федеральный округ </Label>
                        <Input type="text" name="federalDistrict" id="federalDistrict" value={item.federalDistrict.shortName}
                               onChange={this.handleChange} autoComplete="federalDistrict"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="text" name="email" id="email" value={item.email1 || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="secondary" tag={Link} to="/judges" style= {{marginRight: '40px'}}>Сохранить изменения и вернуться к списку судей</Button>
                        <Button color="secondary" tag={Link} to="/judges">Отменить изменения и вернуться к списку судей</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(JudgeEdit);