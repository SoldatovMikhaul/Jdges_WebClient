import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

class RegionRFEdit extends Component {

    emptyItem = {
        fullName: '',
        regionCode: ''
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
            const regionRF = await (await fetch(`http://localhost:8080/api/regionRF/{id}?id=${this.props.match.params.id}`)).json();
            console.log(regionRF);
            this.setState({item: regionRF});
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

        await fetch('api/RegionRF/' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/RegionRF');
    }
    render() {
        const {item} = this.state;
    return <div>
            <AppNavbar/>
            <Container>
                <h2>Изменение информации о суъекте РФ</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="fullName">Полное название</Label>
                        <Input type="text" name="fullName" id="fullName" value={item.fullName || ''}
                               onChange={this.handleChange} autoComplete="fullName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="regionCode">Код региона</Label>
                        <Input type="number" name="regionCode" id="regionCode" value={item.regionCode}
                               onChange={this.handleChange} autoComplete="regionCode"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="secondary" tag={Link} to="/RegionRF" style= {{marginRight: '40px'}}>Сохранить изменения и вернуться к списку субъектов РФ</Button>
                        <Button color="secondary" tag={Link} to="/RegionRF">Отменить изменения и вернуться к списку субъектов РФ</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(RegionRFEdit);