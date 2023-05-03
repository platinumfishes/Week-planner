import { html, css, LitElement } from 'lit';
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";
import "./week-element";

export class WeekPlanner extends IntersectionObserverMixin(LitElement) {
  static get properties() {
    let pogs = {};
    if (super.properties) {
      pogs = super.properties;
    }
    return {
      ...pogs,
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
        "videos" : [
        {
            "text" : 'How to play among us (gamers only)',
            "length" : '5'
        },
        {
            "text" : 'Imposter from among us epic tutorial',
            "length" : '7'
        },
        {
            "text" : 'How to be an efficient crewmate in among us',
            "length" : '8'
        },
        {
            "text" : 'The history of among us',
            "length" : '6'
        },
                  ],
        "readings" : [
        {
            "text" : 'Among us bible 1',
        },
        {
            "text" : 'Among us bible 2',
        },
        {
            "text" : 'Among us bible 3',
        }
                  ],
        "quizzes" : [
        {
            "text" : 'Sussy amogus quiz',
        }
                  ],
        "lessonText" : 'Introduction to Among Us',
        "lessonDescription" : 'An all encompassing course on the hit video-game, Among us',
        "videoCount" : '4',
        "videoMinCount" : '26',
        "readingCount" : '3',
        "quizCount" : '1',
        "detailsTitle" : "Among us",
        "opened" : false
    },
    {
        "weekNumber" : '2',
        "hours" : '4',
        "videos" : [
            {
                "text" : 'Why does Among us, the best game of all time, get made fun of?',
                "length" : '6'
            },
            {
                "text" : 'What gamers get wrong about venting as Imposter',
                "length" : '8'
            },

                      ],
            "readings" : [
            {
                "text" : 'Book of OG venting techniques',
            },
            {
                "text" : 'Essay on why Among us should be game of the epoch',
            },
            {
                "text" : 'Among us 2 potential leak?',
            }
                      ],
            "quizzes" : [
            {
                "text" : 'Among us venting strategies examination',
            },
            {
                "text" : 'Comprehensive examination on Among us maps',
            }
                      ],
        "lessonText" : 'Misconceptions about Among us',
        "lessonDescription" : 'What do we think will make us effective venters?',
        "videoCount" : '2',
        "videoMinCount" : '14',
        "readingCount" : '3',
        "quizCount" : '2',
        "detailsTitle" : "See Details",
        "opened" : false
    },
    {
        "weekNumber" : '3',
        "hours" : '6',
        "videos" : [
            {
                "text" : 'Introductory Competitive Among us concepts',
                "length" : '14'
            },
            {
                "text" : 'POV: Competitive Imposter gameplay',
                "length" : '11'
            },
            {
                "text" : 'POV: Competitive Crewmate gameplay',
                "length" : '12'
            },
            {
                "text" : 'VOD review for december Among us tournament by Team Liquid',
                "length" : '11'
            },
            {
                "text" : 'Execution of advanced Among us mechanics',
                "length" : '15'
            },
            {
                "text" : 'The psychology of a competitive Imposter',
                "length" : '7'
            },
            {
                "text" : 'Things to look out for as a competitive Crewmate',
                "length" : '8'
            },
            {
                "text" : 'How to join the competitive Among us league',
                "length" : '8'
            },
                      ],
            "readings" : [
            {
                "text" : 'CompTIA Imposter advanced study guide',
            },
            {
                "text" : 'CISSP Crewmate Certification official study guide',
            }
                      ],
            "quizzes" : [
            {
                "text" : 'CISSP Crewmate Certification Exam',
            }
                      ],
        "lessonText" : 'Intro to Competitive Among us',
        "lessonDescription" : 'For those seeking to take the next big step into being sussy amogus',
        "videoCount" : '8',
        "videoMinCount" : '86',
        "readingCount" : '2',
        "quizCount" : '1',
        "detailsTitle" : "See Details",
        "opened" : false
    },
    ];
    this.updateWeekElements(); 
  }

  async updateWeekElements() {
    const address = '../api/schedule.js';
    fetch(address).then((response) => {
        if (response.ok) {
            console.log(response);
            return response.json();
        }
        return [];
    })
    .then((data) => {
        this.weekElementList = data;
    });
  }

  render() {
    return html`
    ${this.elementVisible ? html`

        <div class="wrapper">
            ${this.weekElementList.map(week => html`
            <div class="items">
                <week-element weekNumber="${week.weekNumber}" hours="${week.hours}" .videos="${week.videos}" .quizzes="${week.quizzes}" .readings="${week.readings}" lessonText="${week.lessonText}" lessonDescription="${week.lessonDescription}" detailstext="${week.detailstext}" videoCount="${week.videoCount}" videoMinCount="${week.videoMinCount}" readingCount="${week.readingCount}" quizCount="${week.quizCount}" detailsTitle="${week.detailsTitle}" opened="${week.opened}">
                </week-element>
            <div>
            `)}
        </div>
    `:``}

  `}
}

customElements.define("week-planner", WeekPlanner); 