import { render, html } from 'lit-html';
import "./components/header/head-container.js";
import "./components/form/name-input-fields.js";
import "./components/shared/form-text-input.js";
import "./components/shared/form-color-input.js";
import "./components/shared/form-upload-input.js";
import "./components/shared/form-select.js";
import "./components/icon-box.js";
import { resizeImages, toogleIcons, zipFile } from "./js/modules";

function app() {
    const template = html`
    <head-container class="head-background"></head-container>
    <section class="section has-background-main">
        <div class="container">
            <div class="columns is-desktop">
                <div class="column">
                    <div class="box">
                        <name-input-fields class="pb-4"></name-input-fields>
                        <form-text-input inputid="description" label="Description" placeholder="Description"
                            helptext="The purpose of your web app" class="pb-4">
                        </form-text-input>
                        <form-text-input inputid="language" label="Language" placeholder="de"
                            helptext="The primary language for the name, short name and description properties. For example, en or en-CA">
                        </form-text-input>
                    </div>
                    <div class="box">
                        <form-text-input inputid="start_url" label="Start Url" placeholder="./index.html"
                            helptext="Your homescreen shortcut will load this URL" class="pb-4">
                        </form-text-input>
                        <form-text-input inputid="scope" label="Scope" placeholder=""
                            helptext="The scope of your domain that this manifest applies to">
                        </form-text-input>
                    </div>
                    <div class="box">
                        <div class="columns is-mobile mb-4">
                            <div class="column is-half-mobile is-one-quarter-tablet">
                                <form-select inputid="orientation" label="Orientation" helptext="Orientation"
                                    values=",any,natural,landscape,landscape-primary,landscape-secondary,portrait,portrait-primary,portrait-secondary">
                                </form-select>
                            </div>
                            <div class="column is-half-mobile is-one-quarter-tablet">
                                <form-select inputid="display" label="Display Mode" helptext="Your display mode"
                                    values="fullscreen,standalone, minimal-ui, browser">
                                </form-select>
                            </div>
                        </div>
    
                    </div>
                    <div class="box">
                        <div class="columns is-mobile">
                            <div class="column">
                                <form-color-input style="display:block" label="Background-color" inputid="background_color"
                                    helptext="background-color">
                                </form-color-input>
                            </div>
                            <div class="column">
                                <form-color-input style="display:block" label="Theme-color" inputid="theme_color"
                                    helptext="theme-color">
                                </form-color-input>
                            </div>
                        </div>
    
                    </div>
    
                    <div class="box">
                        <form-text-input stlye="display:block" label="ImageFolder" placeholder="icons"
                            inputid="image_folder" value="icons">
                        </form-text-input>
                        <form-upload-input style="display:block" label="Upload Image" inputid="imageFile">
                        </form-upload-input>
    
                        <div class="field">
                            <div class="control">
                                <button id="btnResize" type="button" class="button is-warning" disabled="true"
                                    @click="${resizeImages}">
                                    Resize Image
                                </button>
                            </div>
                            <p class="help is-success">More Icons see <a target="_blank" rel=”noopener”
                                    href="https://www.pwabuilder.com/imageGenerator">imageGenerator</a></p>
                        </div>
    
                        <div class="field">
                            <div class="control">
                                <button class="button" @click=${toogleIcons}>
                                    <span class="icon">
                                        <i id="toggleIcon" class="fas fa-angle-down"></i>
                                    </span>
                                    <span>Show Icons</span>
                                </button>
                            </div>
                        </div>
    
                        <icon-box></icon-box>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <div class="field">
                            <div class="control">
                                <button id="btnZip" type="button" class="button is-warning" disabled="true"
                                    @click="${zipFile}">
                                    Zip File
                                </button>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="generatedJson">
                                app-manifest.json
                            </label>
                            <div class="control">
                                <textarea rows="15" id="generatedJson" class="textarea is-info"
                                    value="This text is readonly" readonly>
                                                                                                                                                                </textarea>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label" for="head">
                                head
                            </label>
                            <div class="control">
                                <textarea rows="15" id="head" class="textarea is-info" value="This text is readonly"
                                    readonly>
                                                                                                                                                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    const main = document.getElementById("app");
    render(template, main);
}

document.addEventListener('DOMContentLoaded', function () {
    let appManifestJson = {
        "name": "App-Name",
        "short_name": "Short-App-Name",
        "description": "Description",
        "display": "fullscreen",
        "language": "de",
        "background_color": "black",
        "theme_color": "black",
        "start_url": "./index.html",
        "display": "",
        "icons": [
        ]
    };
    app();
    document.getElementById("generatedJson").value = JSON.stringify(appManifestJson, null, 5);
}, false);