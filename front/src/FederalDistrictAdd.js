import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

class FederalDistrictAdd extends Component {

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
                <h2>Добавить новый федеральный округ</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="fullName">Полное название</Label>
                        <Input type="text" name="fullName" id="fullName" value={''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Сокращенное название</Label>
                        <Input type="text" name="name" id="name" value={''}
                               onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="secondary" tag={Link} to="/federalDistrict" style= {{marginRight: '40px'}}>Добавить федеральный округ и вернуться к списку</Button>
                        <Button color="secondary" tag={Link} to="/federalDistrict">Отменить добавление и вернуться к списку федеральных округов</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(FederalDistrictAdd);