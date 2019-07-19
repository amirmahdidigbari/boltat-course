import React from "react";
import families from "../../data.json";
import UserSelfCard from "./UserSelfCard";
import { getUser } from "../utils";
import DefaultBox from "./DefaultBox.js";

const UserCard = ({ user, fullVisible, setFullVisible, hideFullVisible, setPersonFullVisible }) => {
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

    let toggleFullVisible = () => {
        if (fullVisible) {
            return hideFullVisible();
        }
        return setFullVisible();
    };

    return (
        <div
            style={{
                width: "25%",
                minWidth: windowWidth < 768 ? 200 : 250,
                marginLeft: "auto",
                marginRight: "auto",
            }}>
            <UserSelfCard
                id={user.id}
                user={user}
                boxContainerStyle={boxStyle}
                {...getHandlers(user.id)}
                onClick={toggleFullVisible}
                boxStyle={{
                    cursor: "pointer",
                    ...(hover === user.id ? hoverStyle : {}),
                }}
            />
            {fullVisible ? (
                <DefaultBox containerStyle={boxStyle}>
                    <h5 style={{ margin: 0, marginBottom: 5 }}>Married to</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {user.marriedTo.map(id => (
                            <a href={`#${id}`} style={{ textDecoration: "none", color: "unset" }}>
                                <UserSelfCard
                                    {...getHandlers(id)}
                                    onClick={() => setPersonFullVisible(id)}
                                    user={getUser(families, id)}
                                    boxStyle={{
                                        backgroundColor: "white",
                                        ...(hover === id ? hoverStyle : {}),
                                    }}
                                />
                            </a>
                        ))}
                    </div>
                </DefaultBox>
            ) : null}
            {fullVisible ? (
                <DefaultBox containerStyle={boxStyle}>
                    <h5 style={{ margin: 0, marginBottom: 5 }}>Children</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {user.children.map(id => (
                            <a href={`#${id}`} style={{ textDecoration: "none", color: "unset" }}>
                                <UserSelfCard
                                    {...getHandlers(id)}
                                    onClick={() => setPersonFullVisible(id)}
                                    user={getUser(families, id)}
                                    boxStyle={{ backgroundColor: "white", ...(hover === id ? hoverStyle : {}) }}
                                />
                            </a>
                        ))}
                    </div>
                </DefaultBox>
            ) : null}
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
