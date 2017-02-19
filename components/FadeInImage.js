import React, {Component, PropTypes} from 'react';
const initialFade = 0.2;
const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = { fade: new Animated.Value(initialFade) };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.source !== this.props.source) {
            this.state.fade.setValue(initialFade);
            this.setState({loaded:false});
        }
    }

    onLoad = (e) => {
        this.props.onLoad && this.props.onLoad(e);
        this.animateTo(1);
        this.setState({loaded:true});
    };

    animateTo (toValue) {
        Animated.timing(
            this.state.fade,
            { toValue, duration:270 }
        ).start();
    }

    render () {
        return (
            <Animated.Image
                {...this.props}
                style={[{backgroundColor:'#333', opacity:this.state.fade}, this.props.style]}

                onLoad={this.onLoad}
            >
                {this.state.loaded ? this.props.children[1]:this.props.children[0]}
            </Animated.Image>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;