import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavBar.js';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import judgeListBakGround from './images/JudgeList.PNG';
import federalDistrictListBakGround from './images/FederalDistrictList.PNG';
import regionRFListBakGround from './images/RegionRFList.PNG';
import categoryRFListBakGround from './images/CategoryRFlist.PNG';
import categoryFIDEListBakGround from './images/CategoryFIDEList.PNG';
import titlesRFListBakGround from './images/TitleRFList.PNG';
import titlesFIDEListBakGround from './images/TitleFIDEList.PNG';


class Home extends Component {

    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/judges"><img src={judgeListBakGround} style={{marginTop: '-275px'}}/></Link></Button>
                    <Button color="link"><Link to="/federalDistrict"><img src={federalDistrictListBakGround} style={{marginTop: '-275px'}}/></Link></Button>
                    <Button color="link"><Link to="/regionRF"><img src={regionRFListBakGround} style={{marginTop: '-275px'}}/></Link></Button>
                    <Button color="link"><Link to="/categoryRF"><img src={categoryRFListBakGround} style={{marginTop: '-275px'}}/></Link></Button>
                    <Button color="link"><Link to="/categoryFIDE"><img src={categoryFIDEListBakGround} style={{marginLeft: '-2425px', marginTop: '275px'}}/></Link></Button>
                    <Button color="link"><Link to="/titleRF"><img src={titlesRFListBakGround} style={{marginLeft: '-1500px', marginTop: '275px'}}/></Link></Button>
                    <Button color="link"><Link to="/titleFIDE"><img src={titlesFIDEListBakGround} style={{marginLeft: '-575px', marginTop: '275px'}}/></Link></Button>
                </Container>
            </div>
        );
    }
}
export default Home;