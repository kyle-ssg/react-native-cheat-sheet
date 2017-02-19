
var Listitem = React.createClass({
    displayName: 'ListItem',
    getDefaultProps: function () {
        return {
            onPress: null,
            text: null
        };
    }, render: function () {
        content = (
            <View style={[Styles.liContent, { backgroundColor: 'transparent' }, this.props.contentStyle]}>
                {this.props.children}
            </View>
        );
        return (
            this.props.onPress ?
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[Styles.li, this.props.style]}
                    onPress={this.props.onPress}>
                    {content}
                </TouchableOpacity>
                : <View style={[Styles.li, this.props.style]}>{content}</View>
        );
    }
});
module.exports = Listitem;
