"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
questionNameFilm =  "Один из последних просмотренных фильмов?",
questionRatingFilm = "На сколько оцените его?";

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const answer1_1 = prompt(questionNameFilm, ""),
    answer1_2 = prompt(questionRatingFilm, ""),
    answer2_1 = prompt(questionNameFilm, ""),
    answer2_2 = prompt(questionRatingFilm, "");

personalMovieDB.movies[answer1_1] = answer1_2,
personalMovieDB.movies[answer2_1] = answer2_2,    

console.log(personalMovieDB);




