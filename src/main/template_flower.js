import React from "react";
import flowerImage from "../media/templates/template_flower.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateFlower extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_flower"
                image={flowerImage}
                prev={{ link: "../works/templates/template_cokhi2", label: "template_cokhi2" }}
                next={{ link: "../works/templates/template_noithat", label: "template_noithat" }}
            />
        );
    }
}
