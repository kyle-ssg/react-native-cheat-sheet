import React, {Component, PropTypes} from 'react';
import IntensiveComponent from '../IntensiveComponent';

const duration = 270;
const toValue = (Dimensions.get('window').width/3) - 20;

const AnimatedAnimation = class extends Component {
    displayName: 'Animation'

    constructor (props, context) {
        super(props, context);
        this.state = { size: new Animated.Value(0) };
    }

    componentDidMount () {
        this.animate();
    }

    animate () {
        Animated.timing(this.state.size, {
            toValue,
            duration
        }).start();
    }

    render () {
        const { size } = this.state;
        return (
            <View
                style={{width:toValue,height:toValue, margin:5, justifyContent:'center', alignItems:'center'}}>
                <Animated.View style={{width:size,height:size,backgroundColor:'#555'}}/>
            </View>
        );
    }
};

const LayoutAnimationAnimation = class extends Component {
    displayName: 'Animation'

    constructor (props, context) {
        super(props, context);
        this.state = { size: 0 };
    }

    componentDidMount () {
        _.defer(this.animate);
    }

    animate = () => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ size: toValue })
    }

    render () {
        const { size } = this.state;
        return (
            <View
                style={{width:toValue,height:toValue, margin:5, justifyContent:'center', alignItems:'center'}}>
                <View style={{width:size,height:size,backgroundColor:'#555'}}/>
            </View>
        );
    }
};


const AnimationPage = class extends Component {
    displayName: 'AnimationPage'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    renderRow = (row) => (
        this.props.useAnimated ? <AnimatedAnimation key={row}/> : <LayoutAnimationAnimation key={row}/>
    );

    render () {
        const rows = _.range(0, 400);

        return (
            <ScrollView>
                <Container>
                    <Row style={{flexWrap:'wrap'}}>
                        {rows.map(this.renderRow)}
                    </Row>
                </Container>
            </ScrollView>
        );
    }
};

AnimationPage.propTypes = {};

module.exports = AnimationPage;