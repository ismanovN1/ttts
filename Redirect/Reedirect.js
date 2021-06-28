import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const hocRedirect = (Component) => {
    let mapStateToProps = (state) => {
        return{
            isAuth : state.AuthPage.isAuth,
            isProcces : state.AuthPage.isProcces,
        }
    }

    class obertka extends React.Component {

        render() {
                return <Component {...this.props} />
            // return this.props.isProcces
            //     ?(this.props.isAuth ?  : <Redirect to={'/Authentification'} />)
            //     : <div className="progress"><div className="indeterminate"></div></div>
        }
    }
    let withConnect = connect(mapStateToProps, {})(obertka)
    return withConnect ;
}


export default hocRedirect;