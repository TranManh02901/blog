import React from "react";
import cokhi2Image from "../media/templates/template_cokhi2.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateCokhi2 extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_cokhi2"
                temp_title="Mechanical Engineering Template 2"
                temp_description="
                A second mechanical engineering website template recreated from an online design reference using pure HTML, CSS, and JavaScript. The project explores an alternative layout style for an industrial company, focusing on product showcase sections and a responsive design across devices.
                "
                link="https://tranmanh02901.github.io/template_cokhi2/"
                git_link="https://github.com/TranManh02901/template_cokhi2.git"
                image={cokhi2Image}
                prev={{ link: "../works/templates/template_cokhi", label: "template_cokhi" }}
                next={{ link: "../works/templates/template_flower", label: "template_flower" }}
            />
        );
    }
}
