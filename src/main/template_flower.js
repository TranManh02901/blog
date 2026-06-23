import React from "react";
import flowerImage from "../media/templates/template_flower.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateFlower extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_flower"
                temp_title="Flower Shop Template"
                temp_description="
                A flower shop website template recreated from an online design reference using pure HTML, CSS, and JavaScript. The project features a product catalog, shopping cart UI, and decorative visual styling, demonstrating responsive layout skills for an e-commerce-style page.
                "
                link="https://tranmanh02901.github.io/template_flower/"
                git_link="https://github.com/TranManh02901/template_flower.git"
                image={flowerImage}
                prev={{ link: "../works/templates/template_cokhi2", label: "template_cokhi2" }}
                next={{ link: "../works/templates/template_noithat", label: "template_noithat" }}
            />
        );
    }
}
