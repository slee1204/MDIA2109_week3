var template = document.createElement("template");  //RULE //<template></template> --> this needs to be called template cuz it's a template tag (in the double quotes)
// but var ___ and ___.innerHTML can be called anything as long as they're consistent.
template.innerHTML = `
<style>
#counter{
    background-color:lavenderblush;
    display: flex;
}

#counter > button {
    width: 35px;
    height: 35px;
    font-size: 20px;
    background-color:lightsteelblue;
    border: none;
    border-radius: 5px;
    margin: 5px;
}

#counter > div{
    display:flex;
    flex:1;
    justify-content: center;
    align-items: center;
    margin: 5px;
    font-size: 20px;
}

#bar{
    width: 0px;
    height: 15px;
    background-color: mediumpurple;
}
</style>
<div id='counter'>
 <button id='dbut'>-</button>
 <div id='number'>1</div>
 <button id='ibut'>+</button>
</div>
<div id='bar'></div>
`;     //template literal - little quote for template

class TheCounter extends HTMLElement {
    constructor(){  //RULE
        super();    //RULE
        this.num = 1;
        this.attachShadow({mode:"open"})    //RULE
    }

    connectedCallback(){    //RULE
        this.shadowRoot.appendChild(template.content.cloneNode(true));  //RULE
        this.shadowRoot.querySelector('#ibut').onclick = () => this.inc();
        this.shadowRoot.querySelector('#dbut').onclick = () => this.dec();
    }


    inc(){
        //debugger;
        this.num = this.num + 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.updateBar();

    }
    
    dec(){
        this.num = this.num -1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.updateBar();
    }

    updateBar(){
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.dhadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
    }
}

customElements.define("the-counter", TheCounter)    //RULE