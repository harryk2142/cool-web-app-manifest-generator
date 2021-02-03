import { LitElement, html } from 'lit-element';

import { uploadImage } from "../../js/modules";

class FormUploadInput extends LitElement {
    constructor() {
        super();

        this.addEventListener('change', this.handleClick);

    }
    createRenderRoot() {
        return this;
    }

    handleClick() {
        uploadImage(this.inputid);
    }


    static get properties() {
        return {
            label: { type: String },
            inputid: { type: String },
            helptext: { type: String }
        };
    }

    render() {
        return html`
            <div class="field">
                <div class="control">
                    <div id="btnUpload" class="file is-info">
                        <label class="file-label" for="${this.inputid}">
                            <input id="${this.inputid}" class="file-input" type="file" name="resume" accept="images/*">
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    ${this.label}
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
                <p class="help">${this.helptext}</p>
            </div>`
    }
}
customElements.define('form-upload-input', FormUploadInput);