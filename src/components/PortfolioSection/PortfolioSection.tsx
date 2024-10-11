import { PropsWithChildren } from "react";
import "./PortfolioSection.css";

export default function PortfolioSection ({ children, title }: PropsWithChildren<{ title: String }>) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};