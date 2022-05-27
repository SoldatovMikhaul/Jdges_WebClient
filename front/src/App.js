import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JudgesList from './JudgesList';
import JudgeEdit from './JudgeEdit';
import JudgeInfo from './JudgeInfo';
import JudgeAdd from './JudgeAdd';
import FederalDistrictList from './FederalDistrictsList'
import FederalDistrictEdit from './FederalDistrictEdit'
import FederalDistrictAdd from './FederalDistrictAdd'
import RegionsRFList from './RegionsRFList'
import RegionsRFEdit from './RegionRFEdit'
import RegionsRFAdd from './RegionRFAdd'
import CategoriesRFList from './CategoriesRFList.js'
import CategoriesFIDEList from './CategoriesFIDEList.js'
import TitlesRFList from './TitlesRFList.js'
import TitlesFIDEList from './TitlesFIDEList.js'

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/judges' exact={true} component={JudgesList}/>
                <Route path='/judges/edit/:id' component={JudgeEdit}/>
                <Route path='/judges/:id' component={JudgeInfo} />
                <Route path='/judges/new' exact={true} component={JudgeAdd} />
                <Route path='/federalDistrict' exact={true} component={FederalDistrictList}/>
                <Route path='/federalDistrict/edit/:id' exact={true} component={FederalDistrictEdit}/>
                <Route path='/federalDistrict/new' exact={true} component={FederalDistrictAdd}/>
                <Route path='/regionRF' exact={true} component={RegionsRFList}/>
                <Route path='/regionRF/new' exact={true} component={RegionsRFAdd}/>
                <Route path='/regionRF/edit/:id' exact={true} component={RegionsRFEdit}/>
                <Route path='/categoryRF' exact={true} component={CategoriesRFList}/>
                <Route path='/categoryFIDE' exact={true} component={CategoriesFIDEList}/>
                <Route path='/titleRF' exact={true} component={TitlesRFList}/>
                <Route path='/titleFIDE' exact={true} component={TitlesFIDEList}/>
            </Switch>
        </Router>
    )
  }
}

export default App;