import React, {Component, PropTypes} from 'react';
import FadeInImage from '../FadeInImage';
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

                    <FormGroup>
                        <Row noPad>
                            <Column>
                                <View style={styles.center}/>
                            </Column>
                            <Text>Signifies content within an image</Text>
                        </Row>
                    </FormGroup>
                    <H2>Width/Height</H2>
                    <Row style={{alignItems:'stretch'}} noPad>
                        <Column>
                            <FormGroup>
                                <Row noPad>
                                    <Column>
                                        <Image
                                            resizeMode="contain"
                                            style={[{width:100,height:100},styles.image]}
                                            source={{uri:`https://placehold.it/50x100`}}>
                                            <View style={styles.center}/>
                                        </Image>
                                    </Column>
                                    <Column>
                                        <Image
                                            resizeMode="contain"
                                            style={[{width:100,height:100},styles.image]}
                                            source={{uri:`https://placehold.it/200x100`}}>
                                            <View style={styles.center}/>
                                        </Image>
                                    </Column>
                                </Row>
                            </FormGroup>

                            <Image
                                resizeMode="contain"
                                style={[{width:200,height:100},styles.image]}
                                source={{uri:`https://placehold.it/200x100`}}>
                                <View style={styles.center}/>
                            </Image>
                        </Column>

                        <Column style={{flex:1}}>
                            <Image
                                resizeMode="cover"
                                style={[{flex:1,padding:10,justifyContent:'center'}]}
                                source={{uri:`https://placehold.it/400x400`}}>
                                <Text style={{backgroundColor:'rgba(255,255,255,.3)'}}>
                                    Images need a specified width/height/maxHeight/maxWidth/flex just like any other view.
                                    {'\n'} Full screen images can be accomplished simply by setting flex:1
                                </Text>
                            </Image>
                        </Column>
                    </Row>

                    <H2>Background Position</H2>

                    <FormGroup>

                        <Row noPad>
                            <Column style={{flex:1}}>
                                <View style={{overflow:'hidden',height:100}}>
                                    <Image
                                        resizeMode="cover"
                                        style={[{height:200},styles.image]}
                                        source={{uri:`https://placehold.it/200x200`}}>
                                        <View style={[styles.center,{marginTop:-100}]}/>
                                    </Image>
                                </View>
                            </Column>
                            <Column style={{flex:1}}>
                                <View style={{overflow:'hidden',height:100}}>
                                    <Image
                                        resizeMode="cover"
                                        style={[{flex:1,marginLeft:-100},styles.image]}
                                        source={{uri:`https://placehold.it/600x200`}}>
                                        <View style={[styles.center,{marginLeft:100}]}/>
                                    </Image>
                                </View>
                            </Column>
                        </Row>

                        <Text>
                            You can mimic background position by using an overflow hidden view and adjusting content as long as the image is bigger than the container.
                        </Text>
                    </FormGroup>

                    <H2>Preloading</H2>

                    <Row noPad>

                        <Column style={{flex:1}}>
                            <FadeInImage
                                resizeMode="cover"
                                style={[{flex:1,height:200},styles.image]}
                                source={{uri:`https://s-media-cache-ak0.pinimg.com/originals/b4/77/23/b4772340ae9c206149a0a7338767c530.jpg`}}>
                                <ActivityIndicator color={"#333"}/>
                                <View style={styles.center}/>
                            </FadeInImage>
                        </Column>

                        <Column style={{flex:1}}>
                            <FadeInImage
                                resizeMode="cover"
                                style={[{flex:1,height:200},styles.image]}
                                source={{uri:`https://worldtravelers.org/images/Bixby_Bridge__Bi-0020_9925.jpg`}}>
                                <ActivityIndicator color={"#333"}/>
                                <View style={styles.center}/>
                            </FadeInImage>
                        </Column>


                    </Row>
                    <Text>
                        You can use onLoad to control preloading views or animations.
                        {'\n'}
                        E.g. {'onLoad={()=>Animated.timing(this.state.fade,{toValue:1}).start()}'}
                        {'\n'}
                        The defaultSource property also acts as a preloader / fallback
                    </Text>
                </Container>
            </ScrollView>
        );
    }
};

var styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1'
    },
    center: {
        borderWidth: 1,
        borderColor: 'red',
        width: 10,
        height: 10,
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: 'red'
    }
})
TheComponent.propTypes = {};
module.exports = TheComponent;