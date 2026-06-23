import React from "react";
import tradingImage from "../media/templates/template_trading.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateTrading extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_trading"
                temp_title="Trading Platform Template"
                temp_description="
                A trading platform website template recreated from an online design reference using pure HTML, CSS, and JavaScript. The project presents a financial trading interface with market data sections, pricing plans, and a modern responsive layout.
                "
                link="https://tranmanh02901.github.io/template_trading/"
                git_link="https://github.com/TranManh02901/template_trading.git"
                image={tradingImage}
                prev={{ link: "../works/templates/template_noithat", label: "template_noithat" }}
            />
        );
    }
}
