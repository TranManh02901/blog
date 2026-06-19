import React from "react";
import businessImage from "../media/templates/template_business.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateBusiness extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_business"
                image={businessImage}
                prev={{ link: "../works/templates/readme", label: "WhatisTemplate.txt" }}
                next={{ link: "../works/templates/template_chungkhoan", label: "template_chungkhoan" }}
            />
        );
    }
}
