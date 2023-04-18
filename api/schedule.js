export default async function handler(req, res) {
    const weekElementList = [
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
            "detailsTitle" : "See Details",
            "opened" : false
        },
    ];

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(weekElementList);
  }