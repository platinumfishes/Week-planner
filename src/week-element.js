import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";
import "./details-video";
import "./details-reading";
import "./details-quiz";

class WeekElement extends LitElement {
  static properties = {
    weekNumber: { type: String },
    hours: { type: Number },
    activityArray: { type: Array },
    lessonText: { type: String },
    lessonDescription: { type: String },
    videoCount: { type: Number },
    videoMinCount: { type: Number },
    readingCount: { type: Number },
    quizCount: { type: Number },
    detailsTitle: { type: String },
    opened: { type: Boolean },
    videoItem1: { type: String },
    videoMin1: { type: Number },
    text: { type: String },
    length: { type: Number },
    videos: { type: String },
    readings: { type: String },
    quizzes: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 28px;
      font-weight: 400;
      vertical-align: middle;
      background-color: #0072CE;
    }

    .wrapper {
      display: block;
      color: #000000;
      margin-left: auto;
      margin-right: auto;
      vertical-align: middle;
      margin-bottom: -15px;
    }

    .left-stack {
      display: table-cell;
      float: left;
      width: 30%;
      height: 340px;
      text-align: center;
      background-color: #0072CE;
      color: white;
      margin: auto;
      vertical-align: middle;
    }

    .right-stack {
      display: table-cell;
      float: right;
      width: 70%;
      height: 340px;
      background-color: #0072CE;
      color: white;
      text-align: left;
      margin: auto;
      vertical-align: middle;
    
    }

    .hours-text {
      font-family: Futura, Trebuchet MS, Arial, sans-serif;
      font-size: 25px;
      font-weight: bold;
      padding-top: 30px;
      padding-left: 10px;
      /* color: #414141; */
    }

    .lesson-title {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 36px;
      margin-bottom: 20px;
    }

    .lesson-description {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 20px;
      font-weight: 550;
      margin-bottom: 20px;
    }

    .lesson-breakdown {
      font-family: Futura, Trebuchet MS, Arial, sans-serif;
      font-size: 22px;
      font-weight: light;
      margin-top: 60px;
      padding-left: 10px;
      position: relative;
      bottom: -60px;
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

    .table-row-1 {
      display: table-row;
      padding-top: 20px;
    }

    .table-row-2 {
      display: table-row;
    }

    .table-cell {
      display: table-cell;
    }

    .icon-1 {
      padding-top: 20px;
      --simple-icon-color: #00ffc8;
      --simple-icon-width: 50px;
      --simple-icon-height: 50px;
    }

    .icon-2 {
      --simple-icon-color: #00ffc8;
      --simple-icon-width: 50px;
      --simple-icon-height: 50px;
      position: relative;
      bottom: -50px;
    }

    .details-collapse {
      display: block;
      --a11y-collapse-heading-background-color: #032340;
      background-color: #032340;
      color: #00ffc8;
    }

    .details-collapse:hover {
      --a11y-collapse-heading-background-color: #00ffc8;
      color: #032340;
    }

    .details-wrapper {
      color: #FFFFFF;
    }

    .details-title {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 23px;
      float: right;
      color: #FFFFFF;
      background-color: #032340;
    }

    .details-text {
      height: 50px;
      width: 50px;
    }

    .details-video-text {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 24px;
      font-weight: 500;
      padding-left: 20px;
    }

    .details-video-icon {
      --simple-icon-color: #00ffc8;
      --simple-icon-width: 40px;
      --simple-icon-height: 40px;
      margin-right: 10px;
    }
    
    .details-reading-text {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 24px;
      font-weight: 500;
      padding-left: 20px;
    }

    .details-reading-icon {
      --simple-icon-color: #00ffc8;
      --simple-icon-width: 40px;
      --simple-icon-height: 40px;
      margin-right: 10px;
    }

    .details-quiz-text {
      font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
      font-size: 24px;
      font-weight: 500;
      padding-left: 20px;
    }

    .details-quiz-icon {
      --simple-icon-color: #00ffc8;
      --simple-icon-width: 40px;
      --simple-icon-height: 40px;
      margin-right: 10px;
    }

    a:link,
    a:visited {
      color: #00ffc8;
      background-color: transparent;
    }
    a:hover {
      color: white;
      background-color: transparent;
    }
}
  `;

  constructor() {
    super();
    this.videos = [];
    this.readings = [];
    this.quizzes = [];
    this.weekNumber = '1';
    this.hours = '2';
    this.lessonText = 'Misconceptions about happiness';
    this.lessonDescription = 'What do we think will make us happy?';
    this.videoCount = '8';
    this.videoMinCount = '63';
    this.readingCount = '11';
    this.quizCount = '1';
    this.detailsTitle = "See Details";
    this.disabled = false;
    this.opened = false;
    this.videoItem1 = 'Hi, what is life';
    this.videoMin1 = '8';
    this.toggleEvent()
    this.text = 'hi';
    this.length = '';
    this.baited = 'https://www.youtube.com/watch?v=0Gyj-SV3uMQ';
  }

  toggleEvent(e) {
    console.log(this.opened);
    /* const state = this.shadowRoot.querySelector('details-collapse').getAttribute('expanded') === '' ? true: false; */
  }

  clickEvent(e) {
    this.opened = !this.opened;
  }

  render() {
    return html`

    
        
    <div class="wrapper">
        <div class="left-stack">
          <p class="week-text">W E E K</p>
          <div class="week-number">${this.weekNumber}</div>
        </div>
        <div class="right-stack">
          <div class="table-row-1">
            <simple-icon
              class=" icon-1 table-cell"
              icon="image:timer"
            ></simple-icon>
            <div class="hours-text table-cell">
              ${this.hours} hours to complete
            </div>
          </div>
          <div class="lesson-title">${this.lessonText}</div>  
          <div class="lesson-description">${this.lessonDescription}</div>
          <div class="table-row-2">
            <simple-icon class="icon-2 table-cell" icon="maps:layers"></simple-icon>
            <div slot="heading" class="lesson-breakdown table-cell">
              ${this.videoCount} videos (Total ${this.videoMinCount} min),
              ${this.readingCount} readings, ${this.quizCount} quiz(zes)
            </div>
          </div>
        </div>
      <a11y-collapse heading-button .open="${this.opened}" @toggle="${this.toggleEvent}" @click="${this.clickEvent}" class="details-collapse">
      <button slot="heading" class="details-title">${this.detailsTitle}</button>
        <div class="details-wrapper">
          <div class="details-video-text"><simple-icon class="details-video-icon" icon="av:slow-motion-video"></simple-icon>${this.videoCount} Videos</div>
            <div class="details-video-items">
              <ul>
                ${this.videos.map(activity => html`
                <a href="${this.baited}"><li>${activity.text} : ${activity.length} minutes</li></a>
                `)}
              </ul>
          </div>
            <hr>
          <div class="details-reading-text"><simple-icon class="details-reading-icon" icon="chrome-reader-mode"></simple-icon>${this.readingCount} Readings</div>
            <div class="details-reading-items">
              <ul>
                ${this.readings.map(activity => html`
                <li>${activity.text}</li>
                `)}
              </ul>
            </div>
            <hr>
          <div class="details-quiz-text"><simple-icon class="details-quiz-icon" icon="assignment"></simple-icon>${this.quizCount} Practice exercise</div>
          <div class="details-quiz-items">
              <ul>
                ${this.quizzes.map(activity => html`
                <li>${activity.text}</li>
                `)}
              </ul>
          </div>
        </div>
      </a11y-collapse>
    `;
  }
}

customElements.define('week-element', WeekElement);