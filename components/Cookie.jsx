import React from 'react'
import CookieConsent from 'react-cookie-consent'

export default function Cookie() {
  return (
    <div>
        <CookieConsent 
            location="bottom"
            buttonText="Razumijem"
            cookieName="cookies"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#000", fontSize: "15px", }}
            expires={1}
        >
            Ova web stranica te njezine on-line usluge mogu koristiti kolačiće radi poboljšanja usluga.
        </CookieConsent>
    </div>
  )
}
