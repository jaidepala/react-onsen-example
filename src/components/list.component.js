import React from 'react';
import { Card, List, ListItem, ListHeader } from 'react-onsenui';
import { Fab, ActionSheet, ActionSheetButton } from 'react-onsenui';

class ListComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            showActionSheet: false,
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            loader: 0
        };

        this.openActionSheet = this.openActionSheet.bind(this);
        this.closeActionSheet = this.closeActionSheet.bind(this);
        this.openModal = this.openModal.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderLoadingRow = this.renderLoadingRow.bind(this);
    }

    componentDidMount() {

        this.setState({

            loader: 1
        });

        fetch('https://randomuser.me/api/?results=100')
            .then((results) => {

                return results.json();
            })
            .then((jsonResult) => {

                this.setState({

                    list: jsonResult.results
                });

                setTimeout(() => {

                    this.setState({

                        loader: 2
                    });

                }, 250);

            });
    }

    openModal() {
        this.setState({ showActionSheet: true })
    }

    openActionSheet = () => {

        this.setState({

            showActionSheet: true
        });
    }

    closeActionSheet = () => {

        this.setState({

            showActionSheet: false
        });
    }

    renderLoadingRow( row, index ) {

        return (
            <ListItem key={index}>
                <div className='left'>
                    <div className="square linear-background shimmer-animation"></div>
                </div>
                <div className='center list-name'>
                    <div className="line linear-background shimmer-animation"></div>
                    <div style={{ "padding": "10px 10px" }}></div>
                    <div className="line linear-background shimmer-animation"></div>
                </div>
            </ListItem>
        );
    };

    renderRow( row, index ) {

        return (
            <ListItem key={index}>
                <div className='left'>
                    <img alt={row.name.first + ' ' + row.name.last} src={ row.picture.thumbnail }/>
                </div>
                <div className='center list-name'>
                    { row.name.title + ' ' + row.name.first + ' ' + row.name.last }
                </div>
            </ListItem>
        );
        // <ListItem key={index} expandable>
        // <div className='expandable-content' style={{margin: '30px'}}>
            
        //     Email: { row.email } <br />
        //     Mobile: { row.cell }

        //     <Fab 
        //             position='bottom right' 
        //             onClick={this.openActionSheet}>

        //             <i className="zmdi zmdi-more-vert"></i>
        //     </Fab>
        // </div>
    };

    render() {

        let list;

        if( this.state.loader <= 1 )
            list = (<List
                        dataSource={this.state.list}
                        renderRow={this.renderLoadingRow}
                        renderHeader={() => <ListHeader>Clientele</ListHeader>}>
                </List>);
        else
            list = (<List
                        dataSource={this.state.list}
                        renderRow={this.renderRow}
                        renderHeader={() => <ListHeader>Clientele</ListHeader>}>
                </List>);

        return (
            <div className="List">

                <Card>
                    { list }
                </Card>

                <ActionSheet 
                        isOpen={this.state.showActionSheet} 
                        animation='default'
                        onCancel={this.closeActionSheet.bind(this)}
                        isCancelable={true}
                        title={'Description'}>

                        <ActionSheetButton onClick={this.closeActionSheet.bind(this)}>

                                Label1
                        </ActionSheetButton>
                        <ActionSheetButton onClick={this.closeActionSheet.bind(this)}>

                                Label2
                        </ActionSheetButton>
                        <ActionSheetButton onClick={this.closeActionSheet.bind(this)} modifier={'destructive'}>

                                Label3
                        </ActionSheetButton>
                        <ActionSheetButton onClick={this.closeActionSheet.bind(this)} icon={'md-close'}>

                                Cancel
                        </ActionSheetButton>
                </ActionSheet>
            </div>
        );
    }
}

export default ListComponent;