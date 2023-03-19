import './ChurrascoLogo.scss'
import React from 'react'
import FireFlame from '../FireFlame/FireFlame'

export default function ChurrascoLogo({
    flames = false,
    white = false
}) {
  return (
    <div className={`ChurrascoLogo ${white ? 'white' : ""} ${flames ? 'flamesOn' : ""}`}>
        <div className="firepit">
            <p>
                O&nbsp;
                <span>C</span>
                <span>H</span>
                <span>U</span>
                <span>R</span>
                <span>R</span>A
                <span>S</span>CO
            </p>
            {flames && <>
                <FireFlame /><FireFlame /><FireFlame />
                <FireFlame /><FireFlame /><FireFlame />
                <FireFlame /><FireFlame /><FireFlame />
                <FireFlame /><FireFlame /><FireFlame />
            </>}
        </div>
    </div>
  )
}
