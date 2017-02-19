/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, {Component, PropTypes} from 'react';

const routes = require('../../routes');

const HomePage = class extends Component {
    static  navigatorStyle = Object.assign({}, global.navbarStyle);

    displayName: 'HomePage'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <ScrollView style={Styles.body}>
                {routes.map((link) => (
                    <ListItem key={link.screen}
                              onPress={()=>{this.props.navigator.push(link)}}>
                        <Row>
                            <Flex>
                                <Column>
                                    <Text style={Styles.liTitle}>
                                        {link.title}
                                    </Text>
                                    <Text style={Styles.liFaint}>
                                        {link.subtitle}
                                    </Text>
                                </Column>
                            </Flex>
                            <Column>
                                <ION style={Styles.listIcon} name="ios-arrow-forward"/>
                            </Column>
                        </Row>
                    </ListItem>
                ))}
            </ScrollView>
        )
    }
};

HomePage.propTypes = {};


module.exports = HomePage;