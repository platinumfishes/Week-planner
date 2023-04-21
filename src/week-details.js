import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";

class WeekDetails extends LitElement {
    static properties = {
      weekNumber: { type: String },
    };
  
    static styles = css`
      :host {
        display: block;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 48px;
        color: black;
        font-weight: 400;
        vertical-align: middle;
        background-color: black;

        .title {
            color: pink;
        }
    `;
  
    constructor() {
      super();
      this.weekNumber = '1';
      this.innerDescription = 'Description 1';
    }
  
    render() {
      return html`
        <div class="wrapper">
          <div class="content">${this.innerDescription}</div>
                <div slot=""></div>
            <div>
        </div>
      `;
    }
  }
  
  customElements.define('week-details', WeekDetails);
  