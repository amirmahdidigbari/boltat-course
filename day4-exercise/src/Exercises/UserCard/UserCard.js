import React from "react";
import families from "../../data.json";
import UserSelfCard from "./UserSelfCard";
import { getUser } from "../utils";
import DefaultBox from "./DefaultBox.js";

const UserCard = ({ user }) => {
    let [windowWidth, setWindowWidth] = React.useState(document.body.clientWidth);
    let [hover, setHover] = React.useState(null);

    React.useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(document.body.clientWidth));
    }, [document.body.clientWidth]);

    let getHandlers = id => {
        return {
            onMouseEnter: () => setHover(id),
            onMouseLeave: () => setHover(null),
        };
    };

    return (
        <div
            style={{
                width: "fit-content",
                minWidth: windowWidth < 768 ? 200 : 250,
                marginLeft: "auto",
                marginRight: "auto",
            }}>
            <UserSelfCard user={user} boxContainerStyle={boxStyle} />
            <DefaultBox containerStyle={boxStyle}>
                <h5 style={{ margin: 0, marginBottom: 5 }}>Married to</h5>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {user.marriedTo.map(id => (
                        <a href={`#${id}`} style={{ textDecoration: "none", color: "unset" }}>
                            <UserSelfCard
                                {...getHandlers(id)}
                                user={getUser(families, id)}
                                boxStyle={{ backgroundColor: "white", ...(hover === id ? hoverStyle : {}) }}
                            />
                        </a>
                    ))}
                </div>
            </DefaultBox>
            <DefaultBox containerStyle={boxStyle}>
                <h5 style={{ margin: 0, marginBottom: 5 }}>Children</h5>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {user.children.map(id => (
                        <a href={`#${id}`} style={{ textDecoration: "none", color: "unset" }}>
                            <UserSelfCard
                                {...getHandlers(id)}
                                user={getUser(families, id)}
                                boxStyle={{ backgroundColor: "white", ...(hover === id ? hoverStyle : {}) }}
                            />
                        </a>
                    ))}
                </div>
            </DefaultBox>
        </div>
    );
};

export default UserCard;

const boxStyle = {
    width: "100%",
    minWidth: "unset",
    maxWidth: "unset",
};
const hoverStyle = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 15px 3px",
};
