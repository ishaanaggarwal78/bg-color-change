import React, { useState } from 'react'

function Colors() {

    let [myColor, setMyColor] = useState();

    function ChangeColorV() {
        setMyColor({
            backgroundColor: "#8F00FF",
        });
    };
    function ChangeColorI() {
        setMyColor({
            backgroundColor: "purple",
        })
    }
    function ChangeColorB() {
        setMyColor({
            backgroundColor: "blue",
        })
    }
    function ChangeColorG() {
        setMyColor({
            backgroundColor: "green",
        })
    }
    function ChangeColorY() {
        setMyColor({
            backgroundColor: "yellow",
        })
    }
    function ChangeColorO() {
        setMyColor({
            backgroundColor: "orange",
        })
    }
    function ChangeColorR() {
        setMyColor({
            backgroundColor: "red",
        })
    }


    return (
        <>
            <body style={myColor}>
                <div className="btns">
                    <button onClick={ChangeColorV}>Violet</button>
                    <button onClick={ChangeColorI}>Indica</button>
                    <button onClick={ChangeColorB}>Blue</button>
                    <button onClick={ChangeColorG}>Green</button>
                    <button onClick={ChangeColorY}>Yellow</button>
                    <button onClick={ChangeColorO}>Orange</button>
                    <button onClick={ChangeColorR}>Red</button>
                </div>
            </body>
        </>
    )
}

export default Colors;

