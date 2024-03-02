import {GOOGLE_API} from "../secret"
 export const GOOGLE_API_KEY=GOOGLE_API

export 
const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY

export const LIST_VIDEOS='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key='+GOOGLE_API_KEY;
export const CHANEEL_IMG="data:image/png;base64,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"


export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const OFFSET_DATA=25
export const commentsData = [
    {
      name: "Swapna Sikdar",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa vero maiores!",
      reply: [
        {
          name: "Sudip Deb",
          comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa vero maiores!",
          reply: [
            {
              name: "Gobindo Sikdar",
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa vero maiores!",
              reply: [],
            },
            {
              name: "Swapna Sikdar",
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa vero maiores!",
              reply: [],
            },
          ],
        },
      ],
    },
  
    {
      name: "Akshay Kumar",
      comment: "paisa hi paisA Hoga.",
      reply: [
        {
          name: "Twinkle Khanna",
          comment: "......???",
          reply: [],
        },
      ],
    },
    {
      name: "Salman Khan",
      comment: "Lorem ipsum dolor sit.",
      reply: [
        {
          name: "Aishwariya Rai Bacchan",
          comment: "Lorem ipsum dolor sit.",
          reply: [
            {
              name: "Salman Khan",
              comment: "Lorem ipsum dolor sit.",
              reply: [],
            },
          ],
        },
      ],
    },
    {
      name: "Ajay Devgan",
      comment: "Bolo JUban Kesari.dane dane me hain kesar",
      reply: [],
    },
    {
      name: "Akshay Shaini",
      comment: "Namaste React",
      reply: [],
    },
    {
      name: "Naredra Modi",
      comment: "Modi hain to mumkin hain.",
      reply: [],
    },
    {
      name: "Rahul Gandhi",
      comment: "Idhar se alu dalo udhar se sona nikalo.Aluuu andar sona bahar.",
      reply: [],
    },
    {
      name: "Elvish Yadav",
      comment: "System ke age koi bol sakta hain kyaa,,,elvish bhaiiiiiiiiii.",
      reply: [],
    },
    {
      name: "Sharukh Khan",
      comment: "Jhume jo pathan meri jaan Mahefil ruk jaye.",
      reply: [],
    },
    {
      name: "Priyanka Chopra",
      comment: "Lorem ipsum dolor sit.",
      reply: [
        {
          name: "Nick jonas",
          comment: "Lorem ipsum dolor sit.",
          reply: [],
        },
      ],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
    {
      name: "Akshay Kumar",
      comment: "Lorem ipsum dolor sit.",
      reply: [],
    },
  ];
 