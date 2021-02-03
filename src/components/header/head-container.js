import { LitElement, css, html } from 'lit-element';

class HeadContainer extends LitElement {
    constructor() {
        super();

    }
    createRenderRoot() {
        return this;
    }
    render() {
        return html`
        <div class="navbar is-fixed-top head-background is-mobile">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <div class="title is-4 is-spaced pl-4 pb-4 pt-4 head-background">
                        <p>WEB MANIFEST GENERATOR</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('head-container', HeadContainer);