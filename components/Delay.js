import React, {Component, PropTypes} from 'react';

const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount () {
        _.defer(()=>this.setState({ ready: true }));
    }

    render () {
        return this.props.children[this.state.ready ? 1 : 0]
    }
};

TheComponent.propTypes = {};
TheComponent.defaultProps = {
    delay: 50
};

module.exports = TheComponent;