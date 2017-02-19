import React, {Component, PropTypes} from 'react';


const errors = [
    {
        image: require('../../img/errors/1.png'),
        title: 'Could not connect',
        answer: 'Restart packager (react-native start)'
    },
    {
        image: require('../../img/errors/2.png'),
        title: 'Unexpected character after adding images',
        answer: 'Restart packager (react-native start)'
    }
]
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
                    {errors.map(({ image, title, answer }) => (
                        <ListItem key={title}>
                            <FormGroup>
                                <Image style={styles.image} source={image}/>
                            </FormGroup>
                            <Text style={Styles.liTitle}>
                                {title}
                            </Text>
                            <Text style={Styles.liFaint}>
                                {answer}
                            </Text>
                        </ListItem>
                    ))}
                </Container>
            </ScrollView>
        );
    }
};


var styles = StyleSheet.create({
    image: {
        alignSelf:'center'
    }
})
TheComponent.propTypes = {};

module.exports = TheComponent;