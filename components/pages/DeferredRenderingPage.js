import React, {Component, PropTypes} from 'react';
import IntensiveComponent from '../IntensiveComponent';
const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <Delay>
                <Flex style={{backgroundColor:'#333'}}>
                    <H3 style={{color:'#f1f1f1'}}>
                        With Deferred Rendering
                    </H3>
                </Flex>
                <Flex style={{backgroundColor:'#333'}}>
                    <H3 style={{color:'#f1f1f1'}}>
                        With Deferred Rendering
                    </H3>
                    <IntensiveComponent/>
                </Flex>
            </Delay>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;