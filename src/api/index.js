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
];

export const fetchSemesterDetail = (module, sem) => {
  const dataList = dataBase.find((m) => module === m.module);
  const courseData =
    dataList?.semesters.length > 0 ? dataList.semesters[sem] : [];
  return courseData;
};
