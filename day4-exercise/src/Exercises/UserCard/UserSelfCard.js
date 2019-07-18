import React from "react";
import "./UserSelfCard.css";

const UserSelfCard = ({ user }) => {
    return (
        <div className='mx-auto cardContainer' id={user.id}>
            <div
                style={{
                    borderRadius: 15,
                    backgroundColor: "lightcyan",
                    padding: 16,
                    width: "100%",
                }}>
                <div className='d-flex flex-column align-items-center flex-lg-row justify-content-center justify-content-lg-start'>
                    <img src={user.image} className='avatar' />
                    <div className='ml-2 mt-2 mt-lg-0' style={{ overflow: "hidden" }}>
                        <h4>{user.name}</h4>
                        <h4 className='mt-2'>{user.surName}</h4>
                    </div>
                </div>
                <div className='row mt-3 d-flex justify-content-center justify-content-lg-start'>
                    <span>
                        {user.gender} - {user.age}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default UserSelfCard;
