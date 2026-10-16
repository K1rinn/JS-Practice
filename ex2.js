const student = {
  name: "Tanmay",
  age: 22,
  city: "Hyderabad",
  skills: ["HTML", "CSS", "JavaScript"],
  scores: {
    html: 90,
    css: 85,
    js: 78,
  },
};

const { name, age, city } = student;

const {
  skills: [skill1, skill2],
} = student;

const {
  scores: { html, js },
} = student;

const { country = "india" } = student;

// 1. Destructure name, age, city from student

// 2. Destructure the skills array — get first and second skill
//    into their own variables

// 3. Destructure scores from inside student (nested destructuring)
//    and get html and js scores directly

// 4. Destructure with a default value —
//    try to get a property called "country" that doesn't exist
//    set its default to "India"
