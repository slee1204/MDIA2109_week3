var template_banner = document.createElement("template");  //RULE //<template></template> --> this needs to be called template cuz it's a template tag (in the double quotes)
// but var ___ and ___.innerHTML can be called anything as long as they're consistent.
template_banner.innerHTML = `
<style>
h1 {
    color:red;
}
</style>
<h1>BANNER<h1>

`;     //template literal - little quote for template

class TheBanner extends HTMLElement {
    constructor(){  //RULE
        super();    //RULE
        this.num = 1;
        this.attachShadow({mode:"open"})    //RULE
    }

    connectedCallback(){    //RULE
        this.shadowRoot.appendChild(template_banner.content.cloneNode(true));  //RULE
        this.shadowRoot.querySelector('#ibut').onclick = () => this.inc();
        this.shadowRoot.querySelector('#dbut').onclick = () => this.dec();
    }

}

customElements.define("the-banner", TheBanner)    //RULE