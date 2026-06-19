import React from "react";
import cokhiImage from "../media/templates/template_cokhi.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateCokhi extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_cokhi"
                image={cokhiImage}
                prev={{ link: "../works/templates/template_chungkhoan", label: "template_chungkhoan" }}
                next={{ link: "../works/templates/template_cokhi2", label: "template_cokhi2" }}
            />
        );
    }
}
