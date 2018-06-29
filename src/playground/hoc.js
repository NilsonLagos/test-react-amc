import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is:{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Private info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const RequireAuth = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAuth? <WrappedComponent {...props}/>:<p>Please login</p>}           
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = RequireAuth(Info);



// ReactDOM.render(<AdminInfo isAdmin={true} info="details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="details"/>,document.getElementById('app'));