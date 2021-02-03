import { LitElement, html } from 'lit-element';

import "../shared/form-text-input";

import { toShortAppName } from "../../js/modules";

class NameInputFields extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html`
        <div class="columns is-mobile">
            <div class="column is-5">
                <form-text-input inputid="name" label="App-Name" helptext="Name of your web app" placeholder="App-Name">
                </form-text-input>
            </div>
            <div class="column is-2">
                <label class="label" for="btn-to-short-app-name">
                    To short
                </label>
                <div class="field is-grouped">
                    <div class="control">
                        <button id="btn-to-short-app-name" class="button is-info" @click="${toShortAppName}">
                            <span class="icon is-small">
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
        
        
            </div>
            <div class="column is-5">
                <form-text-input inputid="short_name" label="Short-App-Name"
                    helptext="This will be used when there is insufficient space to display the fullname, such as the homescreen"
                    placeholder="Short-App-Name">
                </form-text-input>
            </div>
        </div>`
    }
}
customElements.define('name-input-fields', NameInputFields);