import React, {Component, PropTypes} from 'react';
import  {Navigation} from 'react-native-navigation';


const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <ScrollView>
                <Container>
                    <H1>
                        Native Navigation
                    </H1>
                    <Text>
                        100% the most common performance issue in react native is navigation. Use <Bold>react-native-navigation</Bold> for native navigation.
                    Using Navigator or NavigationExperimental (and libraries that use this e.g. react-navigation) rely on the JS thread too much to handle complex views.
                    </Text>
                    <H1>Deferred rendering</H1>
                    <Text>
                        Even with native navigation it may be beneficial to delay rendering parts of your screen until the next render cycle so that the user gets immediate feedback.
                    </Text>
                    <Button onPress={()=>this.props.navigator.push(renderingRoute)} title="Without deferred rendering"/>
                    <Button onPress={()=>this.props.navigator.push(deferredRoute)} title="With deferred rendering"/>
                    <H1>Use ListView properly</H1>

                    <Button onPress={()=>this.props.navigator.push(withoutRowIdRoute)}
                            title="Data without specifying key in render row"/>

                    <Button onPress={()=>this.props.navigator.push(withRowIdRoute)}
                            title="Data with key in render row"/>

                    <H1>Unnecessary renders</H1>
                    <Text>
                        For debugging I'd suggest using <Bold>react-native-render-count</Bold>
                    </Text>

                    <H1>Use LayoutAnimation over Animated</H1>
                    <Button onPress={()=>this.props.navigator.push(layoutAnimationRoute)} title="With LayoutAnimation"/>
                    <Button onPress={()=>this.props.navigator.push(withoutLayoutAnimationRoute)} title="Without LayoutAnimation"/>

                </Container>
            </ScrollView>
        );
    }
};


var layoutAnimationRoute = {
    screen: 'animation',
    title: 'With LayoutAnimation',
    subtitle: 'Notice it\'s faster',
    component: require('./AnimationPage')
};

var withoutLayoutAnimationRoute = Object.assign({}, layoutAnimationRoute, {
    title: 'Without LayoutAnimation',
    subtitle: 'Notice it\'s slower',
    passProps: { useAnimated: true }
});

var withoutRowIdRoute = {
    screen: 'rowid',
    title: 'Without Render Key',
    subtitle: 'Notice the render count',
    component: require('./lists/RowIdPage')
};

var withRowIdRoute = Object.assign({}, withoutRowIdRoute, {
    title: 'With Render Key',
    passProps: { useKey: true }
});

var deferredRoute = {
    screen: 'deferred',
    title: 'Deferred Rendering',
    subtitle: 'Doesn\'t flash',
    component: require('./DeferredRenderingPage')
};
var renderingRoute = {
    screen: 'rendering',
    title: 'Rendering lots of stuff',
    subtitle: 'Flashes while js thread figures stuff out',
    component: require('./RenderingPage')
};

Navigation.registerComponent(layoutAnimationRoute.screen, () => layoutAnimationRoute.component);
Navigation.registerComponent(withoutRowIdRoute.screen, () => withoutRowIdRoute.component);
Navigation.registerComponent(deferredRoute.screen, () => deferredRoute.component);
Navigation.registerComponent(renderingRoute.screen, () => renderingRoute.component);


TheComponent.propTypes = {};

module.exports = TheComponent;