import React from "react";
import "./UserSelfCard.css";
import DefaultBox from "./DefaultBox";

const UserSelfCard = ({ user, boxStyle, boxContainerStyle, onMouseEnter, onMouseLeave }) => {
    return (
        <DefaultBox
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            containerStyle={boxContainerStyle}
            style={boxStyle}>
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
        </DefaultBox>
    );
};
export default UserSelfCard;
