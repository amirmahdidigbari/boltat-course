import React from "react";
import families from "../../data.json";
import UserSelfCard from "./UserSelfCard";

const UserCard = ({ user }) => {
    return (
        <div>
            <UserSelfCard user={user} />
            <div className='mx-auto cardContainer'>
                <div style={{ borderRadius: 15, backgroundColor: "lightcyan", padding: 16, width: "100%" }}>
                    <h5 style={{ margin: 0, marginBottom: 5 }}>Married to</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {user.marriedTo.map(id => (
                            <a style={{ marginTop: 5 }} href={`#${id}`}>
                                {id}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mx-auto cardContainer'>
                <div style={{ borderRadius: 15, backgroundColor: "lightcyan", padding: 16, width: "100%" }}>
                    <h5 style={{ margin: 0, marginBottom: 5 }}>Children</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {user.children.map(id => (
                            <a style={{ marginTop: 5 }} href={`#${id}`}>
                                {id}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
