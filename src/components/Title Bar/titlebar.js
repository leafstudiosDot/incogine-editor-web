import { useState } from 'react';
import './titlebar.css';
import './headerMenu.css';

function openMenu(x, y, menuOpen, setMenuOpen) {
    function checkoutside(event) {
        if (document.querySelector(".headerMenu").contains(event.target)) {
            console.log('clicked inside');
        } else {
            console.log('clicked outside');
            setMenuOpen(false)
            //document.body.removeEventListener('click', checkoutside)
        }
    }
    if (menuOpen) {
        setMenuOpen(false)
        //document.body.removeEventListener('click', checkoutside)
    } else {
        setMenuOpen(true)
        //setInterval(function () {
            //document.body.addEventListener('click', checkoutside)
        //}, 10)
    }
}

function headerMenu() {
    return (
        <div className="headerMenu">
        </div>
    )
}

export default function TitleBar(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    return (<div className="titleBar" style={{ width: props.winsize.width, height: props.titleMenuBarSpace }}>
        <div>
            <div className="titleBar-onemenu" onClick={() => openMenu(0, 5, menuOpen, setMenuOpen)}>
                ☰
            </div>

            <div className="titleBar-draggable" />
            <div className="titleBar-buttons">
                <span className="titleBar-button" id="titleBar-feedback" onClick={() => { }/*ipcRenderer.send("window-minimize")*/}>Feedback</span>
            </div>
            {menuOpen ? headerMenu() : null}
        </div>
    </div>)
}
