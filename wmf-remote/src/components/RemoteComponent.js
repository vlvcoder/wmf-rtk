import { InnerComponent } from "./InnerComponent";

const style = {
    padding: 20,
    outline: '3px dashed blue',
    marginBottom: '10px',
}

const RemoteComponent = ({ title = 'mockTitle' }) => (
    <div style={style}>
        Component from REMOTE app.
        <br />
        {title}
        <br />
        <br />
        <InnerComponent />
    </div>
);

export default RemoteComponent;
