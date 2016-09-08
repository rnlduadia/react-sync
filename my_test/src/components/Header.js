/**
 * Created by mindyzhurov on 9/8/2016.
 */
import React from 'react';


class Header extends React.Component {
    render(){
        return (
            <h1>{ this.props.title }</h1>
        );
    }
}

export default Header;