import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все', color: 'primary'},
            {name: 'like', label: 'Понравилось', color: 'secondary'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label, color}) => {
            const active = this.props.filter === name;
            const outline = active ? false : true;
            return (
            <Button 
                key={name} 
                outline={outline} 
                color={color}
                onClick={() => this.props.onFilterSelect(name)}>{label}</Button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}