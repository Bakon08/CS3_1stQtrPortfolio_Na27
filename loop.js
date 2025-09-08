// September 8, 2025

// for (let i = 2; i <= 20; i = i + 2) { // for ((start); (condition); (update)) {
//     console.log(i);
//   }

//  i = 1;
// while (i <= 12) {
//     console.log(i);
//     i++;
// } 

//  i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 3); 

grades = [100, 97, 98, 97]
for (let i = 0; i < 4; i++) {
    console.log(grades[i]);
}

for (grade of grades) {
    console.log(grade);
}

grades.forEach(print_grade)

function print_grade(grade) {
    console.log(grade);
}