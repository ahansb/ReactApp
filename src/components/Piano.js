import React from 'react';
import './Piano.css';
import CNote from '../assets/audio/C.mp3';
import CsNote from '../assets/audio/Cs.mp3';
import DNote from '../assets/audio/D.mp3';
import DsNote from '../assets/audio/Ds.mp3';
import ENote from '../assets/audio/E.mp3';
import FNote from '../assets/audio/F.mp3';
import FsNote from '../assets/audio/Fs.mp3';
import GNote from '../assets/audio/G.mp3';
import GsNote from '../assets/audio/Gs.mp3';
import ANote from '../assets/audio/A.mp3';
import AsNote from '../assets/audio/As.mp3';
import BNote from '../assets/audio/B.mp3';

function Piano() {
    let colors = {
        colorC: "white",
        colorCs: "black",
        colorD: "white",
        colorDs: "black",
        colorE: "white",
        colorF: "white",
        colorFs: "black",
        colorG: "white",
        colorGs: "black",
        colorA: "white",
        colorAs: "black",
        colorB: "white",
    };

    let sound = {
        C: new Audio(CNote),
        Cs: new Audio(CsNote),
        D: new Audio(DNote),
        Ds: new Audio(DsNote),
        E: new Audio(ENote),
        F: new Audio(FNote),
        Fs: new Audio(FsNote),
        G: new Audio(GNote),
        Gs: new Audio(GsNote),
        A: new Audio(ANote),
        As: new Audio(AsNote),
        B: new Audio(BNote)
    };

    function stroke(note) {
        console.log(note);
        sound[note].play();
    }

    return (
        // <div>
        //     Piano is here
        <div style={{ all: "unset" }}>
            <div style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
                <div className='negative-marging' style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <div
                        className='keys-up-white'
                        style={{ backgroundColor: "white", height: 100, width: 32, borderLeftWidth: 1, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div
                        onClick={() => stroke("Cs")}
                        style={{ backgroundColor: colors.colorCs, height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-up-white'
                        style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div
                        onClick={() => stroke("Ds")}
                        style={{ backgroundColor: colors.colorDs, height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-up-white'
                        style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-up-white'
                        style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div
                        onClick={() => stroke("Fs")}
                        style={{ backgroundColor: colors.colorFs, height: 100, width: 32, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-up-white'
                        style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div
                        onClick={() => stroke("Gs")}
                        style={{ backgroundColor: colors.colorGs, height: 100, width: 32, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-up-white'
                        style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-up-white'
                        onClick={() => stroke("As")}
                        style={{ backgroundColor: colors.colorAs, height: 100, width: 32, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-up-white right-border'
                        style={{ backgroundColor: "white", height: 100, width: 32, borderRightWidth: 1, borderTopWidth: 1, display: 'inline-block' }} >
                    </div >

                </div>

                <div style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <div
                        className='keys-down'
                        onClick={() => stroke("C")}
                        style={{ backgroundColor: colors.colorC, height: 100, width: 48, borderBottom: "1px solid blacks", borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div
                        className='keys-down'
                        onClick={() => stroke("D")}
                        style={{ backgroundColor: colors.colorD, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-down'
                        onClick={() => stroke("E")}
                        style={{ backgroundColor: colors.colorE, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-down'
                        onClick={() => stroke("F")}
                        style={{ backgroundColor: colors.colorF, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-down'
                        onClick={() => stroke("G")}
                        style={{ backgroundColor: colors.colorG, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-down'
                        onClick={() => stroke("A")}
                        style={{ backgroundColor: colors.colorA, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, display: 'inline-block' }} >
                    </div >
                    <div className='keys-down right-border'
                        onClick={() => stroke("B")}
                        style={{ backgroundColor: colors.colorB, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, display: 'inline-block' }} >
                    </div >
                </div>
            </div>
        </div>
        // </div>
    );
}

export default Piano;