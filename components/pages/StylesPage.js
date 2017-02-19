import React, {Component, PropTypes} from 'react';

const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <Flex/>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;