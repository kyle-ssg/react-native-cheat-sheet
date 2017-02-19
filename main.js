require('./globals');


// global.styleVariables = {
//     navBackground: '#5f3a53',
//     navColor: '#FFFFFF',
//     listItemBackground:'rgba(255,255,255,.5)',
//     listSectionBackground: 'rgba(0,0,0,.5)',
//     listSectionText: 'white',
//     dividerColor:'#d9d9d9',
//     gutterBase: 10,
//     listIconColor: '#d9d9d9'
// };




//Setup routes
import {Navigation} from "react-native-navigation";
var routes = require('./routes');

Navigation.registerComponent('/', () => require('./components/pages/HomePage'));
routes.map((link)=>{
    Navigation.registerComponent(link.screen, () => link.component);
});


const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const defaultIconProvider = ION;
const icons = {
    "md-close": [30, styleVariables.navColor],
    "ios-arrow-back": [30, styleVariables.navColor],
    "ios-search": [30, styleVariables.navColor],
};


global.iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
    new Promise.all(
        Object.keys(icons).map(iconName => {
            const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1]
            )
        })
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

        // Call resolve (and we are done)
        resolve(true);
    })
});


iconsLoaded.then(() => {
    global.iconsMap = iconsMap;


    global.modalNavButtons = {
        leftButtons: [],
        rightButtons: [
            {
                icon: iconsMap['md-close'], // for icon button, provide the local image asset name
                id: 'close', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            }
        ]
    };

    Navigation.startSingleScreenApp({
        screen: {
            screen: '/', // unique ID registered with Navigation.registerScreen
            title:'Home',
            navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        },
        passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    });

});