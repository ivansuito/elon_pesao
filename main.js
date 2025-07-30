// ==UserScript==
// @name         Eliminar Upsell de Twitter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Elimina el bloque de promoción Premium en Twitter automáticamente
// @author       Tú
// @match        https://x.com/home
// @icon         https://abs.twimg.com/favicons/twitter.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeUpsell() {
        const upsell = document.querySelector('div[data-testid="super-upsell-UpsellCardRenderProperties"]');
        if (upsell) {
            upsell.remove();
            console.log("Upsell eliminado.");
        }
    }

   
    removeUpsell();

    
    const observer = new MutationObserver(() => removeUpsell());
    observer.observe(document.body, { childList: true, subtree: true });
})();
