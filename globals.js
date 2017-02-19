//Makes dev easier

global._ = require('lodash');
global.moment = require('moment');

require('react-native-globals');
import elements from 'react-native-common-elements';
_.each(elements, (element, key) => global[key] = element);

global.Styles = require('./styles');



global.navbarStyle = {
    navBarBackgroundColor: styleVariables.navBackground,
    navBarTextColor: styleVariables.navColor,
    navBarSubtitleTextColor: styleVariables.navColor,
    navBarButtonColor: styleVariables.navColor,
};


global.Text = (props) => (
    <Text {...props} style={{color:styleVariables.text}}>
        {props.children}
    </Text>
)

import ION from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
global.FontAwesome = FontAwesome;
global.ION = ION;
global.MaterialIcon = MaterialIcon;

global.AnimatedToggleMixin = {
    getDefaultProps: function () {
        return {
            animation: Animated.timing,
            duration: 300,
            friction: 5,
            tension: 20,
            easing: Easing.inOut(Easing.ease),
            easingOut: Easing.inOut(Easing.ease),
            animatedProps: ['value'],
            immediateOut: false
        };
    },
    getInitialState: function () {
        var props = {};
        _.each(this.props.animatedProps, function (prop) {
            props['animated_' + prop] = new Animated.Value(this.props[prop] && !this.props.autostart ? 1 : 0);
        }.bind(this));
        return props;
    },
    componentDidMount: function () {
        if (this.props.autostart) {
            _.each(this.props.animatedProps, function (key) {
                this.props.animation(                          // Base: spring, decay, timing
                    this.state['animated_' + key],                 // Animate `bounceValue`
                    {
                        toValue: isNaN(this.props[key]) ? this.props[key] ? 1 : 0 : this.props[key],                         // Animate to smaller size
                        duration: this.props.duration,
                        friction: this.props.friction,
                        tension: this.props.tension
                    }
                ).start();
            }.bind(this));
        }
    },
    componentWillReceiveProps: function (newProps) {
        _.each(newProps.animatedProps, function (key) {
            var easing = newProps.value ? newProps.easing : newProps.easingOut;
            if (newProps[key] != this.props[key]) {
                if (!newProps[key] && this.props.immediateOut) {
                    this.state['animated_' + key].setValue(0);
                    return;
                }

                newProps.animation(                          // Base: spring, decay, timing
                    this.state['animated_' + key],                 // Animate `bounceValue`
                    {
                        easing: easing,
                        toValue: isNaN(newProps[key]) ? newProps[key] ? 1 : 0 : newProps[key],                         // Animate to smaller size
                        duration: newProps.duration,
                        friction: newProps.friction,
                        tension: newProps.tension
                    }
                ).start();
            }
        }.bind(this));

    }
};

global.ListItem = require('./components/ListItem');
global.Text = (props) => <ReactNative.Text
    style={[Styles.text, props.style]}>{props.children}</ReactNative.Text>;


global.Delay = require('./components/Delay');
global.DeviceInfo = require('react-native-device-info');
