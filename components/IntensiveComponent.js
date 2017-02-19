import React, {Component, PropTypes} from 'react';

var elements = _.range(0,100);
const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    //This would be a listview normally, the intention is to be slow at rendering
    render = () => (
         <ScrollView>
             {
                 elements.map((i)=>(
                     <ListItem key={i} style={{backgroundColor:'#333'}}>
                         <Text style={{color:'#f1f1f1'}}>Row {i}</Text>
                     </ListItem>
                 ))
             }
         </ScrollView>
    )
};

TheComponent.propTypes = {};

module.exports = TheComponent;