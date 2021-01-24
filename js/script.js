'use strict';



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }      
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        } 
    },

    toggleVisibleMyDB: function(){
        if(this.privat){
            this.privat = false;
        } else{
            this.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) { 
            const genres = prompt(`Введите ваши любимые жанры через запятую`, ``).toLocaleLowerCase;
        
            if (genres != null &&  genres != '') {
                personalMovieDB.genres[i] = genres.split(', ');
                personalMovieDB.genres.sort();                
            } else {
                console.log('error');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, index)  => {
            console.log(`Любимый жанр ${index + 1} - это ${item}`)
        });
        
    },
};
personalMovieDB.start();
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);


