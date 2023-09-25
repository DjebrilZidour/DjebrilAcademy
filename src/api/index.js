const dataBase = [
  {
    module: "math",
    semesters: [
      [
        {
          courseTitle: "course math title sem 1",
          courseDetail: "course math detail sem 1",
        },
        {
          courseTitle: "course math title sem 1",
          courseDetail: "course math detail sem 1",
        },
      ],
      [
        {
          courseTitle: "course math title sem 2",
          courseDetail: "course math detail sem 2",
        },
        {
          courseTitle: "course math title sem 2",
          courseDetail: "course math detail sem 2",
        },
      ],
      [
        {
          courseTitle: "course math title sem 2",
          courseDetail: "course math detail sem 2",
        },
        {
          courseTitle: "course math title sem 2",
          courseDetail: "course math detail sem 2",
        },
      ],
    ],
  },
  {
    module: "arabic",
    semesters: [
      [
        {
          courseTitle: "course arabic title sem 1",
          courseDetail: "course arabic detail sem 1",
        },
        {
          courseTitle: "course arabic title sem 1",
          courseDetail: "course arabic detail sem 1",
        },
      ],
      [
        {
          courseTitle: "course math title sem 2",
          courseDetail: "course arabic detail sem 2",
        },
        {
          courseTitle: "course arabic title sem 2",
          courseDetail: "course arabic detail sem 2",
        },
      ],
      [
        {
          courseTitle: "course arabic title sem 2",
          courseDetail: "course arabic detail sem 2",
        },
        {
          courseTitle: "course arabic title sem 2",
          courseDetail: "course arabic detail sem 2",
        },
      ],
    ],
  },
  {
    module: "english",
    semesters: [
      [
        {
          courseTitle: "course english title sem 1",
          courseDetail: "course english detail sem 1",
        },
        {
          courseTitle: "course english title sem 1",
          courseDetail: "course english detail sem 1",
        },
      ],
      [
        {
          courseTitle: "course english title sem 2",
          courseDetail: "course english detail sem 2",
        },
        {
          courseTitle: "course english title sem 2",
          courseDetail: "course english detail sem 2",
        },
      ],
      [
        {
          courseTitle: "course english title sem 2",
          courseDetail: "course english detail sem 2"
        },
        {
          courseTitle: "course english title sem 2",
          courseDetail: "course english detail sem 2",
        },
      ],
    ],
  },
  {
    module: "french",
    semesters: [
      [
        {
          courseTitle: "course french title sem 1",
          courseDetail: "course french detail sem 1",
        },
        {
          courseTitle: "course french title sem 1",
          courseDetail: "course french detail sem 1",
        },
      ],
      [
        {
          courseTitle: "course french title sem 2",
          courseDetail: "course french detail sem 2",
        },
        {
          courseTitle: "course french title sem 2",
          courseDetail: "course french detail sem 2",
        },
      ],
      [
        {
          courseTitle: "course french title sem 2",
          courseDetail: "course french detail sem 2",
        },
        {
          courseTitle: "course french title sem 2",
          courseDetail: "course french detail sem 2",
        },
      ],
    ],
  },
  {
    module: "science",
    semesters: [
      [
        {
          courseTitle: "course science title sem 1",
          courseDetail: "course science detail sem 1",
        },
        {
          courseTitle: "course science title sem 1",
          courseDetail: "course science detail sem 1",
        },
      ],
      [
        {
          courseTitle: "course science title sem 2",
          courseDetail: "course science detail sem 2",
        },
        {
          courseTitle: "course science title sem 2",
          courseDetail: "course science detail sem 2",
        },
      ],
      [
        {
          courseTitle: "course science title sem 2",
          courseDetail: "course science detail sem 2",
        },
        {
          courseTitle: "course science title sem 2",
          courseDetail: "course science detail sem 2",
        },
      ],
    ],
  },
  {
    module: "phisics",
    semesters: [
      [
        {
          courseTitle: "course phisics title sem 1",
          courseDetail: "course phisics detail sem 1",
        },
        {
          courseTitle: "course phisics title sem 1",
          courseDetail: "course phisics detail sem 1",
        },
      ],
      [
        {
          courseTitle: "course math title sem 2",
          courseDetail: "course phisics detail sem 2",
        },
        {
          courseTitle: "course phisics title sem 2",
          courseDetail: "course phisics detail sem 2",
        },
      ],
      [
        {
          courseTitle: "course phisics title sem 2",
          courseDetail: "course phisics detail sem 2",
        },
        {
          courseTitle: "course phisics title sem 2",
          courseDetail: "course phisics detail sem 2",
        },
      ],
    ],
  },
];

export const fetchSemesterDetail = (module, sem) => {
  const dataList = dataBase.find((m) => module === m.module);
  const courseData =
    dataList?.semesters.length > 0 ? dataList.semesters[sem] : [];
  return courseData;
};
