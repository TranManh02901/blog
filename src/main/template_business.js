import React from "react";
import businessImage from "../media/templates/template_business.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateBusiness extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_business"
                temp_title="Business Company Template"
                temp_description="
                A corporate business website template recreated from an online design reference using pure HTML, CSS, and JavaScript. The project showcases a professional company landing page layout, including service sections, team introduction, and a clean responsive design suitable for enterprises.
                "
                link="https://tranmanh02901.github.io/template_business/"
                git_link="https://github.com/TranManh02901/template_business.git"
                image={businessImage}
                next={{ link: "../works/templates/template_chungkhoan", label: "template_chungkhoan" }}
            />
        );
    }
}
