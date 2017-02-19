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
            <Flex style={{backgroundColor:'#333'}}>
                <H3 style={{color:'#f1f1f1'}}>
                    Without Deferred Rendering
                </H3>
                <IntensiveComponent/>
            </Flex>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;