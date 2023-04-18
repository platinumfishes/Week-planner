import { html, css, LitElement } from 'lit';
import "./week-element";

export class WeekPlanner extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 30px;
      color: var(--week-planner-text-color, #000);
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.weekElementList = [];
  }



  render() {
    return html`
      <week-element></week-element>
      <week-element></week-element>
      <week-element></week-element>
      <week-element></week-element>
    `;
  }
}

customElements.define("week-planner", WeekPlanner); 