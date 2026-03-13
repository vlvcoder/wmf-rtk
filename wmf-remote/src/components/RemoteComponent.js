import { useGetRacesRemoteQuery } from "../store/query/remoteApi";
import { DisplayObject } from "./DisplayObject";
import { InnerComponent } from "./InnerComponent";

const style = {
    padding: 20,
    outline: '3px dashed blue',
    marginBottom: '10px',
}

const RemoteComponent = ({ title = 'mockTitle' }) => {
    const { data } = useGetRacesRemoteQuery();
    return (
        <div style={style}>
            Component from REMOTE app.
            <br />
            {title}
            <br />
            <br />
            <InnerComponent />
            <br />
            <br />
            <DisplayObject source={data} style={{ ...style, outline: '3px dashed orange' }} />
        </div>
    );
};

export default RemoteComponent;
