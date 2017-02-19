
var routes = [
    {
        component: require('./components/pages/ErrorsPage'),
        screen: 'errors',
        title: 'Errors',
        subtitle: 'Go away red screen'
    },
    {
        component: require('./components/pages/ImagesPage'),
        screen: 'images',
        title: 'Images',
        subtitle: 'Show them good'
    },
    {
        component: require('./components/pages/KeyboardPage'),
        screen: 'keyboard',
        title: 'Keyboard',
        subtitle: 'Show them good'
    },
    {
        component: require('./components/pages/LayoutPage'),
        screen: 'layout',
        title: 'Layout',
        subtitle: 'Make it go there'
    },
    {
        component: require('./components/pages/PerformancePage'),
        screen: 'performance',
        title: 'Performance',
        subtitle: 'Make it fast'
    },
    {
        component: require('./components/pages/Questions'),
        screen: 'questions',
        title: 'Questions and Answers',
        subtitle: 'Submit on github'
    },
];

module.exports = routes;