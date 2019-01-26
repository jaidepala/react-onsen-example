import React from 'react';

import { Page, Card, Input, Button } from 'react-onsenui';
import { Modal, ProgressCircular, Toast } from 'react-onsenui';

class LoginComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            showLoginModal: false,

            mobileNo: '',

            patientId: '',

            toast: {

                show: false,

                msg: ''
            }
        };

        this.submitLogin = this.submitLogin.bind(this);
        this.toggleToast = this.toggleToast.bind(this);
        this.handleMobileNo = this.handleMobileNo.bind(this);
        this.submitMobileNo = this.submitMobileNo.bind(this);
        this.handlePatientId = this.handlePatientId.bind(this);
    };

    toggleToast( msg ) {

        var toggleValue = msg && msg != null ? true : false; 

        console.log('toggleValue', toggleValue);

        this.setState({
            toast: {
                show: toggleValue,
                msg: msg
            }
        });
    };

    checkValidMobileNo() {

        var message = '';

        if( !this.state.mobileNo || this.state.mobileNo == null )
        {
            message = 'Please enter mobile no.';
        }
        if( this.state.mobileNo && this.state.mobileNo.length !== 10 )
        {
            message = 'Phone no must have only 10 digits.';
        }
        if( this.state.mobileNo && isNaN( this.state.mobileNo ) )
        {
            message = 'Please enter a valid mobile no.';
        }
        
        return {
            message: message
        };        
    };

    submitLogin() {

        var isMobileValid = this.checkValidMobileNo();

        if( isMobileValid && isMobileValid.message )
        {
            this.toggleToast( isMobileValid.message );

            return false;
        }

        this.setState({

            showLoginModal: true
        });

        fetch('https://randomuser.me/api/')
            .then((results) => {

                return results.json();
            })
            .then((jsonResult) => {

                console.log('results', jsonResult);

                this.setState({

                    showLoginModal: false
                });

                this.props.history.push('/list')

            });
    };

    submitMobileNo( eve ) {

        if( eve.key === 'Enter' ) 
        {
            this.submitLogin();
            return false;
        }
    };

    handleMobileNo( eve ) {

        this.setState({
            mobileNo: eve.target.value
        });

        // if( this.state.mobileNo && this.state.mobileNo.length == 10 && !isNaN(this.state.mobileNo) )
        // {
            // this.toggleToast('');

            // this.setState({
            //     toast: {
            //         show: false,
            //         msg: ''
            //     }
            // });
        // }
    };

    handlePatientId( eve ) {

        this.setState({
            patientId: eve.target.value
        });

        // if( this.state.patientId && this.state.patientId != null )
        // {
        //     this.toggleToast('');
        // }
    };

    render() {
        return (
            <Page className="Login">
                <Card className="logo-container">

                </Card>
                <Card className="login-container">
                    <h2 className="center"> 
                        Exising Patient Login 
                    </h2>

                        <div className="form-group">

                            <Input
                                    value={this.state.mobileNo}
                                    onChange={this.handleMobileNo.bind(this)}
                                    onKeyDown={this.submitMobileNo.bind(this)}
                                    type="text"
                                    maxLength="10"
                                    minLength="10"
                                    modifier="underbar"
                                    float
                                    placeholder="Mobile No" />
                        </div>


                        <div className="divider center">
                            <span> (or) </span>
                        </div>

                        <div className="form-group">

                            <Input
                                    value={this.state.patientId}
                                    onChange={this.handlePatientId.bind(this)}
                                    type="number"
                                    modifier="underbar"
                                    float
                                    placeholder="Patient ID." />
                        </div>

                        <div className="form-button">
                            
                            <Button modifier="large" onClick={this.submitLogin}>
                                Submit
                            </Button>

                            <div className="form-link">
                                <a>
                                    Create New Patient Account.
                                </a>
                            </div>
                        </div>

                </Card>
                <Modal isOpen={this.state.showLoginModal}>

                    <section style={{margin: '16px'}}>
                        <ProgressCircular indeterminate />
                    </section>
                </Modal>
                <Toast isOpen={this.state.toast.show}>
                    <div className="message">
                        {this.state.toast.msg}
                    </div>
                    <button onClick={this.toggleToast.bind(this, '')}>
                        Dismiss
                    </button>
                </Toast>
            </Page>
        );
    }
}

export default LoginComponent;