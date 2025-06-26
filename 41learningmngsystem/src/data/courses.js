export const courses = [
  {
    id: "react-advanced",
    title: "Advanced React",
    description: "Master React patterns, hooks, performance optimization.",
    duration: "8 hours",
    lessons: ["Hooks Deep Dive", "Context API", "React Performance", "Testing"],
    quiz: [
      {
        question: "Which hook is used for memoizing values?",
        options: ["useState", "useEffect", "useMemo"],
        answer: "useMemo"
      }
    ]
  },
  {
    id: "node-express",
    title: "Node.js with Express",
    description: "Build backend APIs using Node.js and Express.",
    duration: "6 hours",
    lessons: ["Intro to Express", "Routing", "Middleware", "REST API"],
    quiz: [
      {
        question: "Which method is used to define middleware in Express?",
        options: ["app.route()", "app.use()", "app.send()"],
        answer: "app.use()"
      }
    ]
  },
  {
    id: "mongodb",
    title: "MongoDB Essentials",
    description: "Learn how to use MongoDB for modern web apps.",
    duration: "4 hours",
    lessons: ["Documents", "CRUD Operations", "Aggregation", "Indexes"],
    quiz: [
      {
        question: "Which command inserts data in MongoDB?",
        options: ["insert()", "add()", "push()"],
        answer: "insert()"
      }
    ]
  }
];