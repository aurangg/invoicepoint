import React, { Fragment } from 'react'

function Buttons(){
    return(
        <div className="flex-start mb-30">
            <a className="s-btn flex-align-items flex-simple-center br-8 mr-10" href="#" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="20.333" height="22.556" viewBox="0 0 20.333 22.556">
                    <path className="svg-class" id="google-play" d="M15,10.324,5.273.573l12.373,7.1L15,10.324ZM2.735,0a1.713,1.713,0,0,0-.956,1.555V21a1.713,1.713,0,0,0,.956,1.555l11.307-11.28ZM21.471,9.941l-2.6-1.5L15.98,11.28l2.895,2.842,2.648-1.5a1.768,1.768,0,0,0-.053-2.679ZM5.273,21.988l12.373-7.1L15,12.236Z" transform="translate(-1.779)" fill="#fff"/>
                </svg>
                <div className="flex-start flex-column ml-15">
                    <p className="get-it-now">
                        Get It Now
                    </p>
                    <p className="store-name">
                        Google Play
                    </p>
                </div>
            </a>
            <a className="s-btn flex-align-items flex-simple-center br-8 mr-10" href="#" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="20.333" height="24.196" viewBox="0 0 20.333 24.196">
                    <path className="svg-class" id="Icon_awesome-apple" data-name="Icon awesome-apple" d="M17.281,15.036a5.043,5.043,0,0,1,2.7-4.581,5.8,5.8,0,0,0-4.575-2.409c-1.918-.151-4.014,1.118-4.781,1.118C9.816,9.165,7.957,8.1,6.5,8.1,3.485,8.149.281,10.5.281,15.3a13.464,13.464,0,0,0,.778,4.386c.691,1.983,3.187,6.844,5.791,6.763,1.361-.032,2.323-.967,4.095-.967,1.718,0,2.609.967,4.127.967,2.625-.038,4.883-4.457,5.542-6.445a5.355,5.355,0,0,1-3.333-4.964Zm-3.058-8.87a5.088,5.088,0,0,0,1.3-3.916,5.728,5.728,0,0,0-3.668,1.885,5.168,5.168,0,0,0-1.383,3.884A4.537,4.537,0,0,0,14.224,6.166Z" transform="translate(-0.281 -2.25)" fill="#fff"/>
                </svg>
                <div className="flex-start flex-column ml-15">
                    <p className="get-it-now">
                        Download Now
                    </p>
                    <p className="store-name">
                        App Store
                    </p>
                </div>
            </a>
        </div>
    )
}

export default Buttons;