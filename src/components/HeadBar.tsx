import React from "react";

export const HeadBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
                <a href="/" className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Список дел</a></li>
                    <li><a href="/">Информация</a></li>
                </ul>
            </div>
        </nav>
    )
}