import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

class FederalDistrictEdit extends Component {

    emptyItem = {
        fullName: '',
        shortName: ''
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
            const federalDistrict = await (await fetch(`http://localhost:8080/api/federalDistricts/{id}?id=${this.props.match.params.id}`)).json();
            console.log(federalDistrict);
            this.setState({item: federalDistrict});
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

        await fetch('api/federalDistricts/' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/federalDistricts');
    }
    render() {
        const {item} = this.state;
    return <div>
            <AppNavbar/>
            <Container>
                <h2>Изменение информации о федерально округе</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="fullName">Полное название</Label>
                        <Input type="text" name="fullName" id="fullName" value={item.fullName || ''}
                               onChange={this.handleChange} autoComplete="fullName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Сокращенное название</Label>
                        <Input type="text" name="name" id="name" value={item.shortName || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="secondary" tag={Link} to="/federalDistricts" style= {{marginRight: '40px'}}>Сохранить изменения и вернуться к списку федеральных округов</Button>
                        <Button color="secondary" tag={Link} to="/federalDistricts">Отменить изменения и вернуться к списку федеральных округов</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(FederalDistrictEdit);