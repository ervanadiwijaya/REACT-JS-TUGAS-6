import React, { Component } from "react";

import Header from "./Header";
import "../Style/Header.css";

class MenuHome extends Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <h1>
                    <div className="image_header"></div>
                    <br />
                </h1>
            </div>
        );
    }
}

export default MenuHome