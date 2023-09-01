import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
MDBContainer,
MDBTabs,
MDBTabsItem,
MDBTabsLink,
MDBTabsContent,
MDBTabsPane,
MDBBtn,
MDBIcon,
MDBInput,
MDBCheckbox,
} from "mdb-react-ui-kit";

function Login(props) {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const navigate = useNavigate();

    const handleJustifyClick = (value) => {
    if (value === justifyActive) {
    return;
    }
    setJustifyActive(value);
    };

    var newUser = {
        name: "",
        username: "",
        email: "",
        pass: ""
    };

    var loginUser = {
        email: "",
        pass: ""
    };

    const [valid,setValid] = useState(true);
    const [validLogin,setValidLogin] = useState(true);


    
    
    return ( <div id="login" className="py-3">
    <MDBContainer className="p-3 py-5 d-flex flex-column w-50" id="loginContainer">
        <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
        >
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
                >
                Login
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
                >
                Register
                </MDBTabsLink>
                </MDBTabsItem>
        </MDBTabs>
        <MDBTabsContent className="p-3">
            <MDBTabsPane show={justifyActive === "tab1"}>
                
                <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                onChange={ (e) => loginUser.email = e.target.value }
                />
                <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                onChange={ (e) => loginUser.pass = e.target.value }
                />
                <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                    />
                    <Link to="/contact"><a>Forgot password?</a></Link>
                </div>
                <MDBBtn className="mb-4 w-100" onClick={ () => {
                    if( props.newLogin(loginUser) === false ) setValidLogin(false);
                    else{
                        navigate("/");
                        console.log(loginUser);
                    }
                }}>Sign in</MDBBtn>
                <p style={{ visibility: validLogin === false ? 'visible' : 'hidden' }}>Invalid email or password.</p>
                <p className="text-center">
                    Not a member? <a href="#!" onClick={() => handleJustifyClick("tab2")}>Register</a>
                </p>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
                
                    
                    
                <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" onChange={(e) => newUser.name = e.target.value }/>
                <MDBInput
                wrapperClass="mb-4"
                label="Username"
                id="form1"
                type="text"
                onChange={(e) => newUser.username = e.target.value }
                />
                <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" onChange={(e) => newUser.email = e.target.value }/>
                <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                onChange={(e) => newUser.pass = e.target.value }
                />
                
                <MDBBtn className="mb-4 w-100" onClick={ (e) => {
                    if( newUser.email.length === 0 ) return alert("Email is a necessary field");
                    if( props.addNewUser(newUser) === false ) {
                        setValid(false);
                    }
                    else {
                        navigate("/");
                    }
                }}
                >Sign up</MDBBtn>
                <p className="h2" style={{ visibility: valid === false ? 'visible' : 'hidden', color: "orange"} }>Given email is already in use</p>
            </MDBTabsPane>
        </MDBTabsContent>
    </MDBContainer>
    </div>) ; 
}
export default Login;
