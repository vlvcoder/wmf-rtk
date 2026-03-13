import { useSelector } from "react-redux";
import { useActionsHost } from "../store/slices/hostSlice";

const style = {
    padding: 20,
    outline: '1px dashed red',
    marginBottom: '10px',
};

export function SimpleComponent() {
    const { increment, decrement } = useActionsHost();
    const { value, status } = useSelector(state => state.hostSlice);
    return (
        <div style={style}>
            Component from HOST app.
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
