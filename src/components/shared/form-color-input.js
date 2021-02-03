import { LitElement, html } from 'lit-element';


import { onChangeManifest } from "../../js/modules";
class FormColorInput extends LitElement {
    constructor() {
        super();
        this.addEventListener('change', onChangeManifest);
    }
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {
            label: { type: String },
            inputid: { type: String },
            helptext: { type: String }
        };
    }

    render() {
        console.log(this.values);
        return html`
            <div class="field">
                <label class="label" for="${this.inputid}">
                    ${this.label}
                </label>
                <div class="control">
                    <input id="${this.inputid}" class="input" type="color">
                </div>
                <p class="help">${this.helptext}</p>
            </div>`
    }
}
customElements.define('form-color-input', FormColorInput);