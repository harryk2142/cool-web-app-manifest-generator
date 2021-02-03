import { LitElement, html } from 'lit-element';
import { onChangeManifest } from "../../js/modules";

class FormTextInput extends LitElement {
    constructor() {
        super();
        this.addEventListener('input', onChangeManifest);

    }
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {
            label: { type: String },
            inputid: { type: String },
            placeholder: { type: String },
            helptext: { type: String }
        };
    }

    render() {
        return html`
            <div class="field">
                <label class="label" for="${this.inputid}">
                    ${this.label}
                </label>
                <div class="control">
                    <input id="${this.inputid}" class="input" type="text" placeholder="${this.placeholder}"
                        value="${this.placeholder}">
                </div>
                <p class="help">${this.helptext}</p>
            </div>`
    }
}
customElements.define('form-text-input', FormTextInput);