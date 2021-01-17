"use strict";

let questionNumberOfFilms = "Сколько фильмов вы уже посмотрели?",
questionNameFilm =  "Один из последних просмотренных фильмов?",
questionRatingFilm = "На сколько оцените его?",
numberOfFilms, answerNameFilms, answerRatingFilms;


const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


while(!numberOfFilms) {
    numberOfFilms = +prompt(questionNumberOfFilms, "");
    if (isNaN(numberOfFilms)) {
        alert ("введено неверное значение!");
        numberOfFilms = undefined;
    }
    personalMovieDB.count = numberOfFilms;

}

// for(let i = 1; i <= 2; ++i){
//     answerNameFilms = prompt(questionNameFilm, "");
//     if (!answerNameFilms || answerNameFilms.length >  50){
//         alert ('Ошибка ввода!');
//         answerNameFilms = undefined;
//         --i; 
//         continue;
//     }   
//     answerRatingFilms = +prompt(questionRatingFilm);
//     if (!answerRatingFilms || isNaN(answerRatingFilms)){
//         alert ('Ошибка ввода!');
//         answerNameFilms = undefined;
//         --i; 
//         continue;
//     }
//     personalMovieDB.movies[answerNameFilms] = answerRatingFilms;
// }
let i = 0;
while (i<2){   
    answerNameFilms = prompt(questionNameFilm, "");
    answerRatingFilms = +prompt(questionRatingFilm);
    if (answerNameFilms != null && answerNameFilms.length < 50 && answerRatingFilms != null && !isNaN(answerRatingFilms)){
        personalMovieDB.movies[answerNameFilms] = answerRatingFilms;
        ++i;
        continue;
    }
    alert('ошибка ввода!'); 
}

if ( (personalMovieDB.count < 10) && (personalMovieDB.count > 0) ) {
    alert('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count < 30 ) {
    alert('Вы классический зритель');    
}else if(personalMovieDB.count >= 30) {
    alert('Да вы киноман!');
} else {
    alert('Произошла ошибка!');
}
    

console.log(personalMovieDB);




