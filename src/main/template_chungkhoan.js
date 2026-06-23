import React from "react";
import chungkhoanImage from "../media/templates/template_chungkhoan.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateChungkhoan extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_chungkhoan"
                temp_title="Stock Trading Template"
                temp_description="
                A stock market website template recreated from an online design reference using pure HTML, CSS, and JavaScript. The project presents stock data sections, market charts, and analysis blocks, demonstrating the ability to build a clean responsive interface for financial information.
                "
                link="https://tranmanh02901.github.io/template_chungkhoan/"
                git_link="https://github.com/TranManh02901/template_chungkhoan.git"
                image={chungkhoanImage}
                prev={{ link: "../works/templates/template_business", label: "template_business" }}
                next={{ link: "../works/templates/template_cokhi", label: "template_cokhi" }}
            />
        );
    }
}
