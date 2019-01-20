import React from 'react';
import { Page, Carousel, CarouselItem } from 'react-onsenui';

class CarouselComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [
                '#F1948A',
                '#D7BDE2',
                '#85C1E9',
                '#73C6B6',
            ],
            index: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.setIndex = this.setIndex.bind(this);
    }

    handleChange(e) {
        
        this.setState({
            index: e.activeIndex
        });
    }

    setIndex(index) {
    
        this.setState({
            index: index
        });
    }

    render() {
        return (
            <div className="List">
                <Page>
                    <Carousel 
                            onPostChange={this.handleChange} 
                            index={this.state.index} 
                            fullscreen 
                            swipeable  
                            autoScroll 
                            overscrollable>

                            { 
                                this.state.items.map((item, index) => (
                                <CarouselItem key={index} style={{backgroundColor: item}}>
                                    <div style={{marginTop: '50%', textAlign: 'center'}}>
                                        Swipe me!
                                    </div>
                                </CarouselItem>))
                            }
                    </Carousel>

                    <div 
                        style={{
                            textAlign: 'center',
                            fontSize: '20px',
                            position: 'absolute',
                            bottom: '36px',
                            left: '0px',
                            right: '0px'
                        }}>

                        { this.state.items.map((item, index) => (
                            <span 
                                    key={index} 
                                    style={{cursor: 'pointer'}} 
                                    onClick={this.setIndex.bind(this, index)}>

                                { this.state.index === index ? '\u25CF' : '\u25CB' }
                            </span>
                        ))}
                    </div>
                </Page>
            </div>
        );
    }
}

export default CarouselComponent;