import logoGl from '../static/logo_gl.png'; 
import logoTI from '../static/logo_ti.png'; 

export type LogoProps = {}

export default function Logo(props: LogoProps) {
    return (
        <div >
            <div className="top-left-logo">
                <img alt="top-left-logo" src={logoGl}></img>
            </div>
            <div className="bottom-left-logo">
                <img alt="bottom-left-logo" src={logoTI}></img>
            </div>

        </div>
    )
}
