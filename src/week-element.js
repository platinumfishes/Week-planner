import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

class WeekElement extends LitElement {
  static properties = {
    bonk: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 48px;
      color: black;
      font-weight: 400;
      vertical-align: middle;
    }

    div {
    }

    .wrapper {
      display: block;
      color: #000000;
      width: 1600px;
      height: 340px;
      margin-left: auto;
      margin-right: auto;
      vertical-align: middle;
    }

    .left-stack {
      display: table-cell;
      float: left;
      width: 30%;
      height: 340px;
      text-align: center;
      background-color: #e8e8e8;
      margin: auto;
      vertical-align: middle;
    }

    .right-stack {
      display: table-cell;
      float: right;
      width: 70%;
      height: 340px;
      background-color: #e8e8e8;
      text-align: left;
      margin: auto;
      vertical-align: middle;
    }

    .hours-text {
      font-family: Futura, Trebuchet MS, Arial, sans-serif;
      font-size: 28px;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .lesson-title {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 36px;
      margin-bottom: 20px;
    }

    .lesson-description {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 25px;
      margin-bottom: 20px;
    }

    .lesson-breakdown {
      font-family: Futura, Trebuchet MS, Arial, sans-serif;
      font-size: 28px;
      font-weight: bold;
      margin-top: 60px;
    }

    .week-text {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 23px;
      margin-top: 60px;
    }
    .week-number {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 90px;
      margin-top: 20px;
    }
  `;

  constructor() {
    super();
    this.weekNumber = '1';
    this.hours = '2';
    this.badgeTitle = 'Introduction';
    this.badgeDescription = 'Why take this course?';
    this.activityArray = [];
    this.lessonText = 'Misconceptions about happiness';
    this.lessonDescription = 'What do we think will make us happy?';
    this.videoCount = '8';
    this.videoMinCount = '63';
    this.readingCount = '11';
    this.quizCount = '1';
    this.opened = false;
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="left-stack">
          <p class="week-text">W E E K</p>
          <div class="week-number">${this.weekNumber}</div>
        </div>
        <div class="right-stack">
          <div class="hours-text">${this.hours} hours to complete</div>
          <div class="lesson-title">${this.lessonText}</div>
          <div class="lesson-description">${this.lessonDescription}</div>
          <div class="lesson-breakdown">
            ${this.videoCount} videos (Total ${this.videoMinCount} min),
            ${this.readingCount} readings, ${this.quizCount} quiz(zes)
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('week-element', WeekElement);
