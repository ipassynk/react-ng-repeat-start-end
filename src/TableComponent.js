import React, {Component} from 'react';

class TableComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {name: 'julia', description: 'Girl'},
                {name: 'steven', description: 'Boy'},
                {name: 'anna', description: 'Girl'}

            ]
        };
    }

    render() {
        return (
            <table>
                <tbody>
                {this.state.data.map(({name, description}, index) => {
                    let children = [];
                    children.push(
                        <tr key={`name-${index}`}>
                            <td>Start row: {name}</td>
                        </tr>);
                    children.push(
                        <tr key={`description-${index}`}>
                            <td>End row: {description}</td>
                        </tr>);
                    return children;
                })}
                </tbody>
            </table>
        )
    }
}

export default TableComponent;