import React from 'react';
import { Page, List, ListItem, ListHeader } from 'react-onsenui';
import { PullHook } from 'react-onsenui';

class PullToRefreshComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            state: 'initial',
            data: this.getRandomData()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    getRandomData() {
        const rv = [];

        for (let i = 0; i < 100; i++) {
            rv.push(Math.round(100 * Math.random()));
        }

        return rv;
    }

    handleChange(e) {
        
        this.setState({
            state: e.state
        });
    }

    handleLoad(done) {
        
        const data = this.getRandomData();

        setTimeout(() => {
        
            this.setState({
                data: data
            }, done);
        }, 500);
    }

    getContent() {
        switch (this.state.state) {
            case 'initial':
                return 'Pull to refresh';
            case 'preaction':
                return 'Release';
            case 'action':
                return 'Loading...';
            default:
                return 'Pull to refresh';
        }
    }

    renderRow(row, index) {
        return (
            <ListItem key={index}>{row}</ListItem>
        );
    }

    render() {
        return (
            <div className="List">
                <Page>
                    <PullHook
                        onChange={this.handleChange}
                        onLoad={this.handleLoad}>

                        { this.getContent() }
                    </PullHook>
                    <List
                            dataSource={this.state.data}
                            renderRow={this.renderRow}
                            renderHeader={() => <ListHeader>Pull to refresh</ListHeader>}>
                    </List>
                </Page>
            </div>
        );
    }
}

export default PullToRefreshComponent;