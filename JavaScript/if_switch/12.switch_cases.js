// 1
const dayOfWeek = 6;
switch (dayOfWeek) {
  case 1:
    console.log(`Paprika`);
    break;
  case 2:
    console.log(`Decision to Leave`);
    break;
  case 3:
    console.log(`Drive my Car`);
    break;
  case 4:
    console.log(`Past Lives`);
    break;
  case 5:
    console.log(`Portrait of a Lady on Fire`);
    break;
  case 6:
    console.log(`Anatomy of a Fall`);
    break;
  case 7:
    console.log(`Perfect Blue`);
    break;
  default:
    console.log(`Not available`);
    break;
}

// 2
const themeColor = "night";
switch (themeColor) {
  case "dark":
    console.log(`dark`);
    break;
  case "night":
    console.log(`night`);
    break;
  case "light":
    console.log(`light`);
    break;
  default:
    console.log(null);
    break;
}

// 3
const notifications = "new";

switch (notifications) {
  case "unread":
    console.log(`You have an unread notification`);
    break;
  case "new":
    console.log(`You have a new notification`);
    break;
  case "unopened":
    console.log(`You have an unopened notification`);
    break;

  default:
    console.log(`You are up to date`);
    break;
}

// 4
const movieRating = "R";
switch (movieRating) {
  case "PG":
    console.log(`This movie's rating is PG`);
    break;
  case "PG-13":
    console.log(`This movie's rating is PG-13`);
    break;
  case "R":
    console.log(`This movie's rating is R`);
    break;
  case "NC-17":
    console.log(`This movie's rating is NC-17`);
    break;
  case "G":
    console.log(`This movie's rating is G`);
    break;
  default:
    console.log(`This movie has no rating`);
    break;
}

// 5
const audienceScore = 95;

switch (true) {
  case audienceScore > 90:
    console.log(`Must watch`);
    break;
  case audienceScore < 89 && audienceScore > 75:
    console.log(`Recommended`);
    break;

  case 74 > audienceScore && audienceScore > 60:
    console.log(`Mixed reviews`);
    break;
  case audienceScore < 60:
    console.log(`Skip it`);
    break;

  default:
    console.log(`Not rated yet`);
    break;
}
// 6
const userInput = 20;
switch (userInput) {
  case "asa":
    console.log(`userinput asa`);
    break;
  case 20:
    console.log(`userinput 20`);
    break;
  case true:
    console.log(`userinput true`);
    break;

  default:
    console.log(`no userinput`);
    break;
}

// 7
let releaseMonth = 1;
switch (releaseMonth++) {
  case 1:
  case 2:
  case 3:
    console.log(`Q1`);
    break;
  case 4:
  case 5:
  case 6:
    console.log(`Q2`);
    break;
  case 7:
  case 8:
  case 9:
    console.log(`Q3`);
    break;
  case 10:
  case 11:
  case 12:
    console.log(`Q4`);
    break;

  default:
    console.log(`unknown`);
    break;
}
