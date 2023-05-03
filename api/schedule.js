export default async function handler(request, res) {
    const roster = [
        {
            "weekNumber" : '1',
            "hours" : '2',
            "activityArray" : [
                {
                    "type" : 'video',
                    "text" : 'How to play among us',
                    "length" : '5'
                },
                {
                    "type" : 'video',
                    "text" : 'Imposter from amongus tutorial',
                    "length" : '7'
                },
                {
                    "type" : 'video',
                    "text" : 'How to be a crewmate in amongus',
                    "length" : '8'
                },
                {
                    "type" : 'reading',
                    "text" : 'Reading 1',
                },
                {
                    "type" : 'reading',
                    "text" : 'Reading 2',
                },
                {
                    "type" : 'reading',
                    "text" : 'Reading 3',
                },
                {
                    "type" : 'quiz',
                    "text" : 'Quiz 1',
                }
            ],
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
        },
    ];

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
  }