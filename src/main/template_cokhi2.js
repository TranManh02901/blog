import React from "react";
import cokhi2Image from "../media/templates/template_cokhi2.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateCokhi2 extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_cokhi2"
                image={cokhi2Image}
                prev={{ link: "../works/templates/template_cokhi", label: "template_cokhi" }}
                next={{ link: "../works/templates/template_flower", label: "template_flower" }}
            />
        );
    }
}
