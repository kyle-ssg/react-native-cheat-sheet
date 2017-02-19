//propTypes: value: OptionalNumber

const NativeModal = class extends React.Component {
    constructor (props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = {}
    }

    onNavigatorEvent (event) {
        if (event.id == 'close') {
            this.props.navigator.dismissModal();
        } else {
            this.refs.webview.goBack();
        }

    }

    onNavigationStateChange = (navState) => {

        let buttons = navState.canGoBack ?
            Object.assign({}, modalNavButtons, {
                leftButtons: [
                    {
                        icon: iconsMap['ios-arrow-back'], // for icon button, provide the local image asset name
                        id: 'back', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                    }
                ],

            }) : modalNavButtons

        this.props.navigator.setButtons(buttons);
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForward,
            url: navState.url,
            title: navState.title,
            loading: navState.loading,
            scalesPageToFit: true
        });

        this.props.navigator.setTitle({
            title: navState.title || " ",
            navigatorStyle: {
                navBarTextColor: styleVariables.navColor,
                navBarButtonColor: styleVariables.navColor
            },
        });

    }

    render () {
        return (
            <Flex>
                <WebView
                    onNavigationStateChange={this.onNavigationStateChange}
                    ref="webview"
                    style={{ flex: 1 }}
                    source={{ uri: this.props.uri }}
                    scalesPageToFit={true}
                />
            </Flex>
        );
    }
};

module.exports = NativeModal;
