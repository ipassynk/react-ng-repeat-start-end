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
                    return [
                        <tr key={`name-${index}`}>
                            <td>Start row: {name}</td>
                        </tr>,
                        <tr key={`description-${index}`}>
                            <td>End row: {description}</td>
                        </tr>
                    ]
                })}
                </tbody>
            </table>
        )
    }
}

export default TableComponent;