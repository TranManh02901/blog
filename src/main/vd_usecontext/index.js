import React from "react"
import { useState, useContext } from "react";
import Content from "./content"
import './style.css'

function ContentExport() {
    return (
        <div style={{ padding: 30 }}>
            <h1>Hello</h1>
            {/* <button
                className="btn btn-primary mb-3"
                onClick={context.toggleTheme}
            >Change theme</button>
            <Content /> */}
        </div>
    )
}

export class ContentMain extends React.Component {
    render() {
        return (
            <ContentExport />
        )
    };
};