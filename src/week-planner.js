import { html, css, LitElement } from 'lit';
import "./week-element";

export class WeekPlanner extends LitElement {
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
    weekElementList: { type: Array }
    } 
  }

    static get tag() {
    return 'week-planner';
  }

static get styles() {
  return css`
    :host {
      display: block;
      padding: 30px;
      color: var(--week-planner-text-color, #000);
    }

    .wrapper {
      display: block;
    }
  `;
}


  constructor() {
    super();
    this.weekElementList = [
      {
        "weekNumber" : '1',
        "hours" : '2',
        "activityArray" : [],
        "lessonText" : 'Introduction',
        "lessonDescription" : 'Why take this course?',
        "videoCount" : '4',
        "videoMinCount" : '13',
        "readingCount" : '11',
        "quizCount" : '0',
        "detailsTitle" : "See Details",
        "opened" : false
    },
    {
        "weekNumber" : '2',
        "hours" : '4',
        "activityArray" : [],
        "lessonText" : 'Misconceptions about happiness',
        "lessonDescription" : 'What do we think will make us happy?',
        "videoCount" : '7',
        "videoMinCount" : '63',
        "readingCount" : '3',
        "quizCount" : '1',
        "detailsTitle" : "Among Us",
        "opened" : false
    },
    {
        "weekNumber" : '3',
        "hours" : '2',
        "activityArray" : [],
        "lessonText" : 'Why Our Expectations are so Bad',
        "lessonDescription" : 'Why do we mispredict what makes us happy?',
        "videoCount" : '8',
        "videoMinCount" : '64',
        "readingCount" : '3',
        "quizCount" : '1',
        "detailsTitle" : "See Details",
        "opened" : false
    }
    ];
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
    });
  }

  render() {
    return html`
            <div class="wrapper">
                ${this.weekElementList.map(week => html`
                <div class="items">
                    <week-element weekNumber="${week.weekNumber}" hours="${week.hours}" activityArray="${week.activityArray}" lessonText="${week.lessonText}" lessonDescription="${week.lessonDescription}" detailstext="${week.detailstext}" videoCount="${week.videoCount}" videoMinCount="${week.videoMinCount}" readingCount="${week.readingCount}" quizCount="${week.quizCount}" detailsTitle="${week.detailsTitle}" opened="${week.opened}">
                    <!-- <div slot="Videos"></div>
                    <div slot="Readings"></div>
                    <div slot="Practice"></div> -->
                    </week-element>
                <div>
                `)}
            </div>
    `;
  }
}

customElements.define("week-planner", WeekPlanner); 