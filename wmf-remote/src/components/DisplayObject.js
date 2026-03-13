/**
 * Отображает объект в json
 */

export const DisplayObject = ({ name = null, source, style = {} }) => (
    <div style={{ margin: '1rem 0', ...style }}>
        <pre
            style={{
                background: '#f6f8fa',
                padding: '.5rem',
            }}
        >
            <strong>
                {`${name ?? 'Object'}=${' '}`}
            </strong>
            {JSON.stringify(source, null, 2)}
        </pre>
    </div>
);
