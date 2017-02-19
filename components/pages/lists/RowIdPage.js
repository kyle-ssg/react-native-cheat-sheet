/**
 * Created by kylejohnson on 19/02/2017.
 */
import React, {Component, PropTypes} from 'react';
import RenderCount from 'react-native-render-count';

const RowIdPage = class extends Component {
    displayName: 'RowIdPage';

    constructor (props, context) {
        super(props, context);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            ds: ds,
            rows: []
        };
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            var { rows, ds } = this.state;
            const newRow = { id: rows.length };
            const newRows = [newRow].concat(rows);
            this.setState({
                rows: newRows,
                ds: ds.cloneWithRows(newRows)
            });
        }, 500)
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    render () {
        return (
            <Flex>
                <Text>
                    Always reuse the same ListView.DataSource and specify a key in the rendowRow function.
                </Text>
                <ListView
                    dataSource={this.state.ds}
                    renderRow={
                    (props)=>(
                        <ListItem key={this.props.useKey? props.id : undefined}>
                            <Text>row {props.id}</Text>
                            <Row>
                                <Text>Rendered: </Text>
                                <RenderCount/>
                                <Text> Times</Text>
                            </Row>
                        </ListItem>
                    )
                }
                />
            </Flex>

        );
    }
};

RowIdPage.propTypes = {};

module.exports = RowIdPage;
