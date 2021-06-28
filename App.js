import React from 'react'
import './App.css';
import {NavLink, Route} from 'react-router-dom'
import Authentification from "./Authentification";
import {DeleteLogin, setApi, setProccesLoad} from "./redux/Auth-reducer";
import {connect} from "react-redux";
import 'materialize-css';
import M from 'materialize-css';
import s from "./components/Navbar/Navbar.module.css";
import SuspenseContainer from "./utils/Suspense";
import Music from "./components/Music/Music";


const DialogContainer = SuspenseContainer(React.lazy(() => import("./components/Content/DialogContainer")));
const UsersContainer = SuspenseContainer(React.lazy(() => import( "./components/Content/UsersContainer")));
const ProfileContainer = SuspenseContainer(React.lazy(() => import('./components/Content/ProfileContainer')));

class App extends React.Component {
    componentDidMount() {
        this.props.setApi()
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <nav className="nav-extended" >
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">TEST </a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <NavLink to='/Authentification'>
                                {
                                    this.props.UserData.isAuth
                                        ? <span>{this.props.UserData.email}<button onClick={() => {this.props.DeleteLogin()}}> Sign out</button></span>
                                        : 'Sign In'
                                }
                            </NavLink>

                        </ul>
                    </div>
                    <div className="nav-content center-align  " >
                        <ul className="tabs tabs-transparent ">
                            <div className="tab" style={{marginRight:"40px"}}><NavLink to='/Profile' activeClassName={s.activ}><i className="large material-icons">account_circle</i></NavLink>
                            </div>
                            <div className="tab" style={{marginRight:"40px"}}><NavLink to='/Dialogs' activeClassName={s.activ}><i className="material-icons">email</i></NavLink>
                            </div>
                            <div className="tab" style={{marginRight:"40px"}}><NavLink to='/Users' activeClassName={s.activ}><i className="large material-icons" >people</i></NavLink></div>
                            <div className="tab" style={{marginRight:"40px"}}><NavLink to='/Music' activeClassName={s.activ}><i className="material-icons">music_note</i></NavLink></div>
                            <div className="tab"><NavLink to='/Settings' activeClassName={s.activ}><i className="material-icons" >build</i></NavLink>
                            </div>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">

                    <NavLink to='/Authentification'>
                        {
                            this.props.UserData.isAuth
                                ? <span>{this.props.UserData.email} <br/><div className="btn" onClick={() => {this.props.DeleteLogin()}}> Sign out</div></span>
                                : 'Sign In'
                        }
                    </NavLink>


                </ul>
                <div className="row">
                    <div className="col  s12 center m12 "  >
                            <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/Dialogs' render={() => <DialogContainer/>}/>
                            <Route path='/Music' render={() => <Music/>}/>
                            <Route path='/Users' render={() => <UsersContainer/>}/>
                            <Route path='/Authentification' render={() => <Authentification/>}/>
                            <Route path='/Settings' render={() => <div>Hello</div>}/>
                    </div>
                </div>

            </div>
        )

    }
}
let mapStateToProps = (state) => {
    return{
        UserData : state.AuthPage,
    }
}
export default connect(mapStateToProps, {DeleteLogin,setApi, setProccesLoad})(App);
