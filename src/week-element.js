import { LitElement, html, css } from "lit";

class WeekElement extends LitElement {
  static properties = {
    bonk: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 48px;
      color: black;
      font-weight: 400;
    }

    div {

    }

    .wrapper {
        color: pink;
    }
    
    .memes {
        color: pink;
    }
  `;

  constructor() {
    super();
    this.weekNumber = "1";
    this.timeToComplete = "2";
    this.badgeTitle = "Introduction";
    this.badgeDescription = "Why take this course?";
    this.activityArray = [];
    this.opened = false;
  }

  render() {
    return html`
    <div class='wrapper'>
        <div class='left-stack'>
            <p class='stack-element'>Week</p>
            <div class='weekNumber'>${this.weekNumber}</div>
        </div> 
    </div>
    `;
  }
}

customElements.define("week-element", WeekElement);