import React from 'react'

function Footer() {
    return (
        <div className ='footer'>
            <h1 className ='footer__heading'>Contact</h1>
            <div className = 'footer__icons'>
                <a href ="https://twitter.com/_john_ngala"><img src = "images/twitter-medium.png"  alt = "Twitter" className = "footer__social-icons"/></a>
                <a href ="https://www.instagram.com/_john_ng.a.la/"><img src = "images/instagram-medium.png" alt = "Instagram" className = "footer__social-icons" /></a>
                <a href ="https://wa.me/254722882815"><img src = "images/whatsapp-medium.png" alt = "Whatsapp" className = "footer__social-icons" /></a>
            </div>
            <h1 className ='footer__name'>&copy;2021 John Ngala </h1>
            <h1 className ='footer__declaration'>All Rights Reserved</h1>
        </div>
    )
}

export default Footer
