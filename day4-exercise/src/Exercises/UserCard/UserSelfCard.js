import React from "react";
import "./UserSelfCard.css";

const UserSelfCard = ({ user }) => {
    return (
        <div className='mx-auto' style={{ padding: 16, width: "fit-content", width: '25%', maxWidth: 400, minWidth: 250 }}>
            <div className='cardContainer'>
                <div className='row d-flex align-items-center'>
                    <img src={user.image} className='avatar' />
                    <div className='ml-2' style={{ overflow: "hidden" }}>
                        <h4>{user.name}</h4>
                        <h4 className='mt-2'>{user.surName}</h4>
                    </div>
                </div>
                <div className='row ml-2 mt-3'>
                    <span>
                        {user.gender} - {user.age}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default UserSelfCard;
