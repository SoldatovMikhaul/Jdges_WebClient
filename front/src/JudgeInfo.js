import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';
import './index.css';
import judgePhoto from './personalPhotos/judg.png';
import './JudgeInfo.css';

class JudgeInfo extends Component {

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
            console.log(judge);
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

        return <div>
            <AppNavbar/>
            <Container>
                <h2>Информация о судье</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="surname"><font size = "5" color = "#3f51b5">Фамилия</font> </Label>
                        <output id="surname" style= {{marginLeft: '40px'}}>{item.fullName.split(" ")[0] || ''}</output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="name"><font size = "5" color = "#3f51b5">Имя </font></Label>
                        <output id="name" style= {{marginLeft: '40px'}}> {item.fullName.split(" ")[1] || ''} </output>
                    </FormGroup>
                    <FormGroup style = {{marginLeft: '750px'}}>
                        <Label for="patronymic"><font size = "5" color = "#3f51b5">Отчество </font></Label>
                        <output id="patronymic" style={{marginLeft: '40px'}}> {item.fullName.split(" ")[2] || ''}</output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="dateOfBirth"><font size = "5" color = "#3f51b5">Дата рождения</font></Label>
                        <output id="dateOfBirth" style={{marginLeft: '40px'}}>{convertDate(item.dateOfBirth)}</output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="codeFIDE"><font size = "5" color = "#3f51b5">Код ФИДЕ</font></Label>
                        <output id="codeFIDE" style={{marginLeft: '40px'}}>{item.codeFIDE || ''}</output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="categoryFIDE"><font size = "5" color = "#3f51b5">Категория ФИДЕ </font></Label>
                        <output id="categoryFIDE" style={{marginLeft: '40px'}}>{item.categoryFIDE.fullName || ''}</output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="titleFIDE"><font size = "5" color = "#3f51b5">Звание ФИДЕ </font></Label>
                        <output id="titleFIDE" style={{marginLeft: '40px'}}>{item.titleFIDE.fullName || ''}</output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="titleRF"><font size = "5" color = "#3f51b5">Звание РФ</font></Label>
                        <output id="titleRF" style={{marginLeft: '40px'}}> {item.titleRF.fullName || ''} </output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="categoryRF"><font size = "5" color = "#3f51b5">Категория РФ</font></Label>
                        <output id="categoryRF" style={{marginLeft: '40px'}}> {item.categoryRF.fullName || ''} </output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="categoryRFAssignmentDate"><font size = "5" color = "#3f51b5">Дата присвоения категории РФ</font> </Label>
                        <output id="categoryRFAssignmentDate" style={{marginLeft: '40px'}}> {convertDate(item.categoryRFAssignmentDate) || ''} </output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="categoryRF"><font size = "5" color = "#3f51b5">Дата подтверждения категории РФ </font></Label>
                        <output id="categoryRF" style={{marginLeft: '40px'}}>{convertDate(item.categoryRFConfirmationDate) || ''}</output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="categoryRFValidUntil"><font size = "5" color = "#3f51b5">Категория РФ действует до </font></Label>
                        <output id="categoryRFValidUntil" style={{marginLeft: '40px'}}>{convertDate(item.categoryRFValidUntil) || ''}</output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="federalDistrict"><font size = "5" color = "#3f51b5">Федеральный округ </font></Label>
                        <output id="federalDistrict" style={{marginLeft: '40px'}}> {item.federalDistrict.shortName || ''} </output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="regionRF"><font size = "5" color = "#3f51b5">Регион РФ</font></Label>
                        <output id="regionRF" style={{marginLeft: '40px'}}> {item.regionRF.fullName || ''} </output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="address"><font size = "5" color = "#3f51b5">Домашний адрес</font></Label>
                        <output id="address" style={{marginLeft: '40px'}}> {item.address || ''} </output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="phone"><font size = "5" color = "#3f51b5">Телефон</font></Label>
                        <output id="phone" style={{marginLeft: '40px'}}> {item.phoneNumber1 || ''} </output>
                    </FormGroup>
                    <FormGroup style= {{marginLeft: '750px'}}>
                        <Label for="email"><font size = "5" color = "#3f51b5">E-mail</font></Label>
                        <output id="email" style={{marginLeft: '40px'}}> {item.email1 || ''} </output>
                    </FormGroup>
                    <FormGroup style= {{marginTop: '-480px'}}>
                        <output id="photo"><img src = {judgePhoto}/></output>
                    </FormGroup>
                    <FormGroup>
                        <Button color="secondary" tag={Link} to="/judges">Вернуться к списку судей</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default JudgeInfo;