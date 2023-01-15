import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import ReactDOM  from "react-dom";



export default class Calendar extends React.Component <{}, {startDate: any}> {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date: any) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            minDate={moment().subtract(500, "years")}
            maxDate={moment().subtract(18, "years")}
            showDisabledMonthNavigation
        /> 
        );
        
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Calendar />, rootElement);

