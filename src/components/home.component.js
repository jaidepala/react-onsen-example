import React from 'react';
import { Card, Toolbar } from 'react-onsenui';
import { List, ListItem } from 'react-onsenui';
import { Dialog, AlertDialog, Button, Toast } from 'react-onsenui';

class HomeComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            dialogShown: false,
            alertDialogShown: false,
            toastShown: false,
            items: [
                {
                  title: 'Dialog',
                  fn: this.showDialog
                },
                {
                  title: 'Alert dialog',
                  fn: this.showAlertDialog
                },
                {
                  title: 'Toast',
                  fn: this.handleShow
                },
                // {
                //   title: 'Alert notification',
                //   fn: () => ons.notification.alert('An error has occurred!')
                // },
                // {
                //   title: 'Confirmation',
                //   fn: () => ons.notification.confirm('Are you ready?')
                // },
                // {
                //   title: 'Prompt',
                //   fn: () => ons.notification.prompt('What\'s your name?')
                // }
            ]
        };
        
        this.renderRow = this.renderRow.bind(this);
        this.renderToolbar = this.renderToolbar.bind(this);

        this.showDialog = this.showDialog.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.showAlertDialog = this.showAlertDialog.bind(this);
        this.hideAlertDialog = this.hideAlertDialog.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleDismiss = this.handleDismiss.bind(this);
    }

    showDialog = () => {

        this.setState({ 
            dialogShown: true 
        });
    }

    hideDialog = () => {

        this.setState({ 
            dialogShown: false 
        });
    }

    showAlertDialog = () => {

        this.setState({ 
            alertDialogShown: true 
        });
    }

    hideAlertDialog = () => {

        this.setState({ 
            alertDialogShown: false 
        });
    }

    handleShow = () => {

        this.setState({ 
            toastShown: true 
        });
    }

    handleDismiss = () => {

        this.setState({ 
            toastShown: false 
        });
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>Dialogs</div>
            </Toolbar>
        );
    }

    renderRow(row) {
        return (
            <ListItem key={row.title} tappable onClick={row.fn}>
                {row.title}
            </ListItem>
        );
    }

    render() {
        return (
            <div className="Home">
                <Card>
                    <List 
                        dataSource={this.state.items} 
                        renderRow={this.renderRow} />

                    <Dialog
                        isOpen={this.state.dialogShown}
                        isCancelable={true}
                        onCancel={this.hideDialog}>
                        
                        <div style={{textAlign: 'center', margin: '20px'}}>
                            <p style={{opacity: 0.5}}>
                                This is a dialog!
                            </p>
                            <p>
                                <Button onClick={this.hideDialog}>
                                    Close
                                </Button>
                            </p>
                        </div>
                    </Dialog>

                    <AlertDialog
                        isOpen={this.state.alertDialogShown}
                        isCancelable={false}>

                        <div className='alert-dialog-title'>
                            Warning!
                        </div>
                        <div className='alert-dialog-content'>
                            An error has occurred!
                        </div>
                        <div className='alert-dialog-footer'>
                            <button 
                                    onClick={this.hideAlertDialog} 
                                    className='alert-dialog-button'>
                                    
                                    Cancel
                            </button>
                            <button 
                                    onClick={this.hideAlertDialog} 
                                    className='alert-dialog-button'>
                                        
                                    Ok
                            </button>
                        </div>
                    </AlertDialog>

                    <Toast isOpen={this.state.toastShown}>
                        <div className="message">
                            An error has occurred!
                        </div>
                        <button onClick={this.handleDismiss}>
                            Dismiss
                        </button>
                    </Toast>

                </Card>
            </div>
        );
    }
}

export default HomeComponent;