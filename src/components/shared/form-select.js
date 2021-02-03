import { LitElement, html } from 'lit-element';

import { onChangeManifest } from "../../js/modules";

class FormSelect extends LitElement {
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
            helptext: { type: String },
            values: { type: String }
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
                    <div class="select">
                        <select id=${this.inputid}>
                            ${this.values.split(',').map(i => html`<option>${i}</option>`)}
                        </select>
            
                        <p class="help">${this.helptext}</p>
                    </div>`
    }
}
customElements.define('form-select', FormSelect);