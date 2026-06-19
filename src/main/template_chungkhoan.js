import React from "react";
import chungkhoanImage from "../media/templates/template_chungkhoan.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateChungkhoan extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_chungkhoan"
                image={chungkhoanImage}
                prev={{ link: "../works/templates/template_business", label: "template_business" }}
                next={{ link: "../works/templates/template_cokhi", label: "template_cokhi" }}
            />
        );
    }
}
