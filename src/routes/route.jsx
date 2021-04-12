import React from 'react'
import {Switch,Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/index'
import AboutPage from  '../pages/AboutPage/AboutPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage'
import ProjectViewPage from '../pages/ProjectViewPage/ProjectViewPage'
import ContactPage from '../pages/ContactPage/ContactPage'


const Router =()=>(
 <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/home' component={HomePage}/>
    <Route exact path='/about' component={AboutPage}/>
    <Route exact path='/project' component={ProjectPage} />
    <Route exact path='/projectview/:id' component={ProjectViewPage} />
    <Route exact path='/contact' component={ContactPage} />
 </Switch>
)
   
export default Router;