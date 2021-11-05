var G36PanelLoaded = false;
document.addEventListener('beforeunload', function () {
  G36PanelLoaded = false;
}, false);

class G36Panel extends HTMLElement {
  constructor() {
    super();
  }
}
window.customElements.define("ingamepanel-g36", G36Panel);

window.onload = function() {

}

checkAutoload();