import React from 'react';
import { Card, Page } from 'react-onsenui';

class PageComponent extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <div className="Page">
                <Page>
                    <h1>
                        This is a Page!
                    </h1>
                    <Card>
                        This is a Card!
                    </Card>
                </Page>
            </div>
        );
    }
}

export default PageComponent;