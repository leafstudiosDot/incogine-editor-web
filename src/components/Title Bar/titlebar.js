import './titlebar.css';

function openMenu(x, y) {
    //ipcRenderer.send(`display-app-menu`, { x, y });
}

export default function TitleBar(props) {
    return (<div className="titleBar" style={{ width: props.winsize.width, height: props.titleMenuBarSpace }}>
        <div>
            <div className="titleBar-onemenu" onClick={() => openMenu(0, 5)}>
                ☰
            </div>
            <div className="titleBar-draggable" />
            <div className="titleBar-buttons">
                <span className="titleBar-button" id="titleBar-feedback" onClick={() => {}/*ipcRenderer.send("window-minimize")*/}>Feedback</span>
            </div>
        </div>
    </div>)
}
