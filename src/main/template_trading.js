import React from "react";
import tradingImage from "../media/templates/template_trading.png";
import { TemplateDetail } from "./templateDetail";

export class TemplateTrading extends React.Component {
    render() {
        return (
            <TemplateDetail
                name="template_trading"
                image={tradingImage}
                prev={{ link: "../works/templates/template_noithat", label: "template_noithat" }}
            />
        );
    }
}
