// Write a function that stores information about movies inside an array. The movie&#39;s object
// have name, director, and date. You can receive several commands:
//  &quot;addMovie {movie name}&quot; – adds a movie
//  &quot;{movie name} directedBy {director}&quot; – checks if the movie exists and then
// adds the director
//  &quot;{movie name} onDate {date}&quot; – checks if the movie exists and adds date

let movieList=[];
let movieQuieries=[ "addMovie Fast and Furious","addMovie Godfather","Inception directedBy Cristofer Nolian","Godfather directedBy Francis Ford Coopola","Godfather onDate 29.07.2018","Fast and Furious onDate 30.07.2018","Spiderman 2 onDate 01.08.2018","Fast and Furious directedBy Rob Cohen"];



for (let i = 0; i < movieQuieries.length; i++) {
    if(movieQuieries[i].includes("addMovie")){
        let arr=movieQuieries[i].split(" ");
        arr.shift();
        let movieName=arr.join(" ");
        let movie={name:movieName};
        movieList.push(movie);


    }else{
        if(movieQuieries[i].includes("directedBy")){
            let movieInfo=movieQuieries[i].split(" directedBy");
            let movieName=movieInfo[0];
            let directorName=movieInfo[1];
            let movie=movieList.find(function(elem){
            return elem.name===movieName;
            });
            
            if(movie){
                movie.director=directorName;
            }
            // console.log(movie);
        }
        else{
            if(movieQuieries[i].includes("onDate")){
                let movieInfo=movieQuieries[i].split(" onDate");
                let movieName=movieInfo[0];
                let movieDate=movieInfo[1];
                let movie=movieList.find(function(elem){
                    return elem.name===movieName;
                });
                
                if(movie){
                    movie.date=movieDate;
                }
            }
        }
    }
}
for (const movie of movieList) {
    let jsonObj=JSON.stringify(movie);
    console.log(jsonObj);
}

