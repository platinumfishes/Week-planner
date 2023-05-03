import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";

class DetailsVideo extends LitElement {
    static properties = {
            type: { type: String },
            text: { type: String },
            length: { type: Number },
        }

    static styles = css`
        .content {
        }

        .videoText {
        }
    `;

    constructor() {
        super();
        this.type = '';
        this.text = "Video Title";
        this.length = "Video Duration";
    }

    render() {
        return html`

        <div class="content">
            <div class="videoText">${this.text}, ${this.length} minutes</div>
        </div>
        
    `;
    }}

customElements.define('details-video', DetailsVideo);