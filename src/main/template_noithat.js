import React from "react";
import noithatImage from "../media/templates/template_noithat.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateNoithat extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_noithat"
                temp_title="Home Interior Template"
                temp_description="
                An interior design website template recreated from an online design reference using pure HTML, CSS, and JavaScript. The project demonstrates responsive layout implementation, attention to design details, and the ability to transform a visual concept into a functional web interface.
                "
                link="https://tranmanh02901.github.io/template_noithat/"
                git_link="https://github.com/TranManh02901/template_noithat.git"
                image={noithatImage}
                prev={{ link: "../works/templates/template_flower", label: "template_flower" }}
                next={{ link: "../works/templates/template_trading", label: "template_trading" }}
            />
        );
    }
}
