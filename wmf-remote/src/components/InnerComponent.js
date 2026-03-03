import { useSelector } from "react-redux";
import { useActionsRemote } from "../store/slices/remoteSlice";
import { useEffect } from "react";

const style = {
    padding: 20,
    outline: '3px dashed green',
    marginBottom: '10px',
}

export const InnerComponent = () => {
    const { increment, decrement, setStatus } = useActionsRemote();
    const { value, status } = useSelector(state => state.remoteSlice);
    // const { status: hostStatus } = useSelector(state => state.host);

    useEffect(() => {
        // setStatus(hostStatus);
    }, []);

    return (
        <div style={style}>
            INNER component of REMOTE app.
            <div>
                <h2>Счетчик: {value}</h2>
                <p>Статус: {status}</p>
                <button onClick={() => decrement()}>dec</button>
                <span> </span>
                <button onClick={() => increment()}>inc</button>
            </div>
        </div>
    );
};
