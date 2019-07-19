import React from "react";

const DefaultBox = ({ children, style, containerStyle, onMouseEnter, onMouseLeave, id, onClick }) => {
    let [windowWidth, setWindowWidth] = React.useState(document.body.clientWidth);

    React.useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(document.body.clientWidth));
    }, [document.body.clientWidth]);

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            id={id}
            style={{
                padding: 16,
                width: "fit-content",
                minWidth: windowWidth < 768 ? 200 : 250,
                marginLeft: "auto",
                marginRight: "auto",
                ...containerStyle,
            }}>
            <div style={{ borderRadius: 15, backgroundColor: "lightcyan", padding: 16, width: "100%", ...style }}>
                {children}
            </div>
        </div>
    );
};

export default DefaultBox;
