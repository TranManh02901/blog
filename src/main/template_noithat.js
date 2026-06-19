import React from "react";
import noithatImage from "../media/templates/template_noithat.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateNoithat extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_noithat"
                image={noithatImage}
                prev={{ link: "../works/templates/template_flower", label: "template_flower" }}
                next={{ link: "../works/templates/template_trading", label: "template_trading" }}
            />
        );
    }
}
