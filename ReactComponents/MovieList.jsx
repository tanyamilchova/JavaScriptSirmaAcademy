


export default function MovieList(props){
    return(
        <>
        <h2>[props.title]</h2>
        <ul>
            <li>[props.movies[0]]</li>
            <li>[props.movies[1]]</li>
            <li>[props.movies[2]]</li>
            <li>[props.movies[3]]</li>
        
        </ul>
        <MovieList title="Favourite Movies" movies={movies}/>
        <Button>Send</Button>
       
        </>
    )
}
// export default App