// Google Tag Manager Configuration
export const GTM_ID = 'GTM-MHMSV76F';

// Initialize GTM - call this in your main entry point
export function initGTM() {
  if (typeof window === 'undefined') return;
  
  // GTM Script
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', GTM_ID);
}

// GTM noscript iframe - use in body
export function getGTMNoScript() {
  return `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
}
