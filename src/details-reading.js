import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";

class DetailsReading extends LitElement {
    static properties = {
            type: { type: String },
            text: { type: String },
        }

    static styles = css`
        .content {
        }

        .readingText {
        }
    `;

    constructor() {
        super();
        this.type = '';
        this.text = "Reading Title";
    }

    render() {
        return html`

        <div class="content">
            <div class="readingText">${this.title}</div>
        </div>
        
    `;}
    }

customElements.define('details-reading', DetailsReading);