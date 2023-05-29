import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

// REACT Related code goes here
import React from 'react'
import ReactDOM from 'react-dom'
// import react components that we have created
import MyAmazingComponent from './modules/MyAmazingComponent'
ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-exemple"))

new ClientArea();
new MobileMenu();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined"){
            import (/* webpackChunkName: "Modal"*/'./modules/Modal').then((x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20)
            })).catch(() => console.log('There was a problem loading the modal js'))
        } else {
            modal.openTheModal();
        }
    });
});

if (module.hot) {
    module.hot.accept()
}