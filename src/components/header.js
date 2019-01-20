import React from 'react';
// import { Card } from 'react-onsenui';
import { Toolbar, ToolbarButton, Icon } from 'react-onsenui';
import { Splitter, SplitterSide, SplitterContent } from 'react-onsenui';
import { Page, List, ListItem } from 'react-onsenui';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeComponent from './home.component';
import PageComponent from './page.component';
import ListComponent from './list.component';
import PullToRefreshComponent from './pull.to.refresh.component';
import CarouselComponent from './carousel.component';

class Header extends React.Component {

    constructor() {

        super();

        this.state = {

            visible: false
        }

        this.openNavigation = this.openNavigation.bind(this);
        this.closeNavigation = this.closeNavigation.bind(this);
        this.renderToolbar = this.renderToolbar.bind(this);
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='left'>
                    <ToolbarButton onClick={this.openNavigation}>
                        <Icon icon='ion-navicon, material:md-menu' />
                    </ToolbarButton>
                </div>
                <div className='center'>
                    My App
                </div>
            </Toolbar>
        );
    }

    openNavigation() {
        this.setState({ 
            visible: true 
        });
    }

    closeNavigation() {
        this.setState({ 
            visible: false 
        });
    }

    render() {

        return (

            <Router>
                <Page className="Header">
                    <Splitter>
                        <SplitterSide 
                                style={{
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
                                }}
                                id="menu" 
                                side="left" 
                                width={300}
                                collapse={true}
                                swipeable={true}
                                isOpen={this.state.visible}
                                onClose={this.closeNavigation.bind(this)}
                                onOpen={this.openNavigation.bind(this)}>

                                <Page>
                                    <List>
                                        <Link className="side-menu-links" to="/">
                                            <ListItem 
                                                onClick={this.closeNavigation.bind(this)}
                                                tappable>

                                                    Home
                                            </ListItem>
                                        </Link>
                                        <Link className="side-menu-links" to="/page">
                                            <ListItem 
                                                onClick={this.closeNavigation.bind(this)}
                                                tappable>

                                                    Page
                                            </ListItem>
                                        </Link>
                                        <Link className="side-menu-links" to="/list">
                                            <ListItem 
                                                onClick={this.closeNavigation.bind(this)}
                                                tappable>

                                                    List
                                            </ListItem>
                                        </Link>
                                        <Link className="side-menu-links" to="/pull-to-refresh">
                                            <ListItem 
                                                onClick={this.closeNavigation.bind(this)}
                                                tappable>

                                                    Pull To Refresh
                                            </ListItem>
                                        </Link>
                                        <Link className="side-menu-links" to="/carousel">
                                            <ListItem 
                                                onClick={this.closeNavigation.bind(this)}
                                                tappable>

                                                    Carousel
                                            </ListItem>
                                        </Link>
                                    </List>
                                </Page>
                        </SplitterSide>
                        <SplitterContent>
                            <Page renderToolbar={this.renderToolbar}>
                                <section>

                                    <Route 
                                            exact 
                                            path="/" 
                                            component={HomeComponent}>
                                    </Route>
                                    <Route 
                                            path="/page" 
                                            component={PageComponent}>
                                    </Route>
                                    <Route 
                                            path="/list" 
                                            component={ListComponent}>
                                    </Route>
                                    <Route 
                                            path="/pull-to-refresh" 
                                            component={PullToRefreshComponent}>
                                    </Route>
                                    <Route 
                                            path="/carousel" 
                                            component={CarouselComponent}>
                                    </Route>

                                </section>
                            </Page>
                        </SplitterContent>
                    </Splitter>
                </Page>
            </Router>
        );
    }
}

export default Header;