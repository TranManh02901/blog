import React from "react";
import cokhiImage from "../media/templates/template_cokhi.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateCokhi extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_cokhi"
                temp_title="Mechanical Engineering Template"
                temp_description="
                A mechanical engineering company website template recreated from an online design reference using pure HTML, CSS, and JavaScript. The project highlights an industrial company's services, products, and project gallery with a clean, responsive layout.
                "
                link="https://tranmanh02901.github.io/template_cokhi/"
                git_link="https://github.com/TranManh02901/template_cokhi.git"
                image={cokhiImage}
                prev={{ link: "../works/templates/template_chungkhoan", label: "template_chungkhoan" }}
                next={{ link: "../works/templates/template_cokhi2", label: "template_cokhi2" }}
            />
        );
    }
}
