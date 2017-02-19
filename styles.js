global.styleVariables = {
    navBackground: '#87535b',
    bodyBackground: '#fff',
    navColor: '#FFFFFF',
    textColor: '#333',
    textColorAlt: '#d9d9d9',
    listItemBackground: '#fff',
    listSectionBackground: 'rgba(255,255,255,.1)',
    listSectionText: 'black',
    dividerColor: '#282828',
    gutterBase: 10,
    listIconColor: '#87535b',
    listIconColorAlt: '#666',
    listIconColorThird: '#87535b'
};

module.exports = StyleSheet.create({
    header: { marginTop: 20, alignSelf: 'center', fontSize: em(2), fontWeight: '200', backgroundColor: 'transparent' },
    headerIcon: {
        color: 'rgba(255,255,255,.5)',
        marginTop: 22,
        alignSelf: 'center',
        fontSize: em(2),
        fontWeight: '200',
        backgroundColor: 'transparent'
    },
    body: { backgroundColor: styleVariables.bodyBackground },
    fakeHeader: {
        height: 64,
        paddingTop: 20,
        justifyContent: 'center',
        backgroundColor: styleVariables.navBackground
    },

    fakeHeaderText: {
        color: styleVariables.navColor,
        fontSize: em(1.2)
    },
    navInput: {
        height: 28,
        fontSize: em(1),
        color: styleVariables.navColor,
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: 4
    },
    inputWithIcon: {
        paddingLeft: 30
    },
    inputIcon: {
        position: 'absolute',
        left: styleVariables.gutterBase,
        top: styleVariables.gutterBase / 2,
        color: styleVariables.navColor,
        fontSize: em(1.2)
    },
    column: {
        marginLeft: styleVariables.gutterBase,
        marginRight: styleVariables.gutterBase
    },

    noPad: {
        marginLeft: -styleVariables.gutterBase,
        marginRight: -styleVariables.gutterBase,
    },

    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    listIcon: {
        fontSize: em(2),
        color: styleVariables.listIconColor
    },

    listSectionHeader: {
        borderRadius: 10,
        padding: 4,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: styleVariables.listSectionBackground,
        marginTop: styleVariables.gutterBase / 2,
        marginBottom: styleVariables.gutterBase / 2,
        alignSelf: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    listSectionHeaderText: {
        fontSize: em(.8),
        color: styleVariables.listSectionText
    },

    alignCenter: {
        alignSelf: 'center'
    },

    alignRight: {
        alignSelf: 'flex-end'
    },
    text: {
        fontSize: em(1),
        color: styleVariables.textColor
    },
    //
    li: {
        backgroundColor: styleVariables.listItemBackground,
        padding: styleVariables.gutterBase,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: styleVariables.dividerColor
    },
    liTitle: {
        fontWeight: '500',
        fontSize: em(1.2),
    },
    liText: {
        fontSize: em(1),
    },
    liFaint: {
        fontSize: em(1),
        color: '#959595'
    }

});