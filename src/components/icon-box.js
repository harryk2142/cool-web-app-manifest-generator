import { LitElement, html } from 'lit-element';

class IconBox extends LitElement {
    constructor() {
        super();

    }
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
        <div class="box is-hidden" id="icons">
            <div class="box">
                <div>ORIGINAL</div>
                <img id="preview" src="">
                <figure class="image">
                </figure>
            </div>
            <div>Android-Chrome512</div>
            <img id="img512" src="">
            <figure class="image">
            </figure>
        
            <div>Android-Chrome256</div>
            <img id="img256" src="">
            <figure class="image">
            </figure>
        
            <div>Android-Chrome192</div>
            <img id="img192" src="">
            <figure class="image">
            </figure>
        
            <div>Apple-Touch</div>
            <img id="img180" src="">
            <figure class="image">
            </figure>
        
        
            <div>Microsoft-Stile</div>
            <img id="img150" src="">
            <figure class="image">
            </figure>
        
        
            <div>Favicon32</div>
            <img id="img32" src="">
            <figure class="image">
            </figure>
        
        
            <div>Favicon16</div>
            <img id="img16" src="">
            <figure class="image is-fullwidth">
            </figure>
        </div>
        `
    }
}
customElements.define('icon-box', IconBox);