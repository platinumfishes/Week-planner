import { html, css, LitElement } from 'lit';
import "./week-element";

export class WeekPlanner extends LitElement {
    static get tag() {
    return 'week-planner';
  }

  static styles = css`
    :host {
      display: block;
      padding: 30px;
      color: var(--week-planner-text-color, #000);
    }

    .wrapper {
      display: block;
    }
  `;

  static get properties() {
    return {
    header: { type: Array },
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
    } 
  };

  constructor() {
    super();
    this.weekElementList = [];
    this.updateWeekElements(); 
  }

  async updateWeekElements() {
    const address = '../api/schedule.js';
    fetch(address).then((response) => {
        if (response.ok) {
            console.log(response);
            return response.json()
        }
        return [];
    })
    .then((data) => {
        this.weekElementList = data;
        console.log("Hello world 3!");
    });
}

  render() {
    return html`
            <div class="wrapper">
                ${this.weekElementList.map(classchar => html`
                <div class="items">
                    <week-element weekNumber="${classchar.weekNumber}" hours="${classchar.hours}" activityArray="${classchar.activityArray}" lessonText="${classchar.lessonText}" lessonDescription="${classchar.lessonDescription}" detailstext="${classchar.detailstext}" videoCount="${classchar.videoCount}" videoMinCount="${classchar.videoMinCount}" readingCount="${classchar.readingCount}" quizCount="${classchar.quizCount}" detailsTitle="${classchar.detailsTitle}" opened="${classchar.opened}">
                    </week-element>
                <div>
                `)}
            </div>
    `;
  }
}

customElements.define("week-planner", WeekPlanner); 