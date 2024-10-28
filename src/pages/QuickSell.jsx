import { useContext } from "react";
import { UserContext } from "../provider/Context";

const QuickSell = () => {
    const {user}=useContext(UserContext);
    console.log(user)
    return (
        <div>
            <h2>This is the quick sell page</h2>
        </div>
    );
};

export default QuickSell;