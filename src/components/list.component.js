import React from 'react';
import { Card, List, ListItem, ListHeader } from 'react-onsenui';
import { Fab, ActionSheet, ActionSheetButton } from 'react-onsenui';

class ListComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            showActionSheet: false
        };

        this.openActionSheet = this.openActionSheet.bind(this);
        this.closeActionSheet = this.closeActionSheet.bind(this);
        this.openModal = this.openModal.bind(this);
        this.renderRow = this.renderRow.bind(this);
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

    renderRow( row, index ) {

        const x = 40 + Math.round(5 * (Math.random() - 0.5)),
              y = 40 + Math.round(5 * (Math.random() - 0.5));

        const names = ['Max', 'Chloe', 'Bella', 'Oliver', 'Tiger', 'Lucy', 'Shadow', 'Angel'];
        const name = names[Math.floor(names.length * Math.random())];

        return (
            <ListItem key={index} expandable>
                <div className='left'>
                    <img alt={name} src={`http://placekitten.com/g/${x}/${y}`} className='list-item__thumbnail'/>
                </div>
                <div className='center'>
                    {name}
                </div>
                <div className='expandable-content' style={{margin: '30px'}}>
                    Expandable content

                    <Fab 
                            position='bottom right' 
                            onClick={this.openActionSheet}>

                            <i className="zmdi zmdi-more-vert"></i>
                    </Fab>
                </div>
            </ListItem>
        );
    }

    render() {
        return (
            <div className="List">

                <Card>
                    <List
                            dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                            renderRow={this.renderRow}
                            renderHeader={() => <ListHeader>Cute cats</ListHeader>}>
                    </List>
                </Card>

                <ActionSheet 
                        isOpen={this.state.showActionSheet} 
                        animation='default'
                        onCancel={this.closeActionSheet}
                        isCancelable={true}
                        title={'Description'}>

                        <ActionSheetButton onClick={this.closeActionSheet}>

                                Label1
                        </ActionSheetButton>
                        <ActionSheetButton onClick={this.closeActionSheet}>

                                Label2
                        </ActionSheetButton>
                        <ActionSheetButton onClick={this.closeActionSheet} modifier={'destructive'}>

                                Label3
                        </ActionSheetButton>
                        <ActionSheetButton onClick={this.closeActionSheet} icon={'md-close'}>

                                Cancel
                        </ActionSheetButton>
                </ActionSheet>
            </div>
        );
    }
}

export default ListComponent;