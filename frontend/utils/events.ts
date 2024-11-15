import { java, event1, event2, event3 } from "./index";

export interface Event {
  id: number;
  title: string;
  description: string;
  duration: string;
  moderator: string;
  level: string;
  image: string;
  lumaLink: string;
  attendees: number | string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Call For Speakers",
    description:
      "We are looking for speakers for our next event. If you are interested, please reach out to us.",
    duration: "1 Week",
    moderator: "KenyaJug",
    level: "Intermediate",
    image: event1,
    lumaLink: "",
    attendees: "All",
  },
  {
    id: 2,
    title: "Why Java",
    description:
      "Learn why Java is still the most popular programming language, and why you should learn it.",
    duration: "1 hour",
    moderator: "Dancun Ian",
    level: "Beginner",
    image: java,
    lumaLink: "",
    attendees: 40,
  },
  {
    id: 3,
    title: "Boosting Java Performance",
    description:
      "Choosing IO vs NIO and using native memory for faster Data processing.",
    duration: "1 hour",
    moderator: "Sam Programiz",
    level: "Intermediate",
    image: event2,
    lumaLink: "",
    attendees: 34,
  },
  {
    id: 4,
    title: "Java Essentials",
    description:
      "Mastering Java programming language syntax and exceptions handling best practices.",
    duration: "1 hour",
    moderator: "Phenny Mwaisaka",
    level: "Intermediate",
    image: event3,
    lumaLink: "https://lu.ma/zx43buo9",
    attendees: 0,
  },
];
