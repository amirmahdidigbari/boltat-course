import React from "react";
import families from "../../data.json";
import UserCard from "../UserCard";
import UserList from "../UserList";
import { ReactComponent as BackButton } from "../../assets/images/back.svg";

const App = () => {
    let [fullVisible, setFullVisible] = React.useState(null);
    return (
        <div>
            {families.map(user => (
                <UserCard
                    user={user}
                    fullVisible={fullVisible && fullVisible === user.id}
                    setFullVisible={() => setFullVisible(user.id)}
                    hideFullVisible={() => setFullVisible(null)}
                    setPersonFullVisible={id => setFullVisible(id)}
                />
            ))}
        </div>
    );
};

export default App;
