const express=require('express');
console.log('Hello expres');

const app=express();
// TEST MIDDLEWARE
// const testMiddleware = require('./middlewares/middleware.js');
// app.use(testMiddleware);

app.use(express.static('public')); //направи тази папка публично достъпна

// MIDDLEWARE LOGGER
const loggerMiddleware = require('./middlewares/loggerMiddleware.js');
app.use(loggerMiddleware);
// app.use('/users',loggerMiddleware); // Само за заявки започващи с /users

// HANDLEBARS
const handlebars=require('express-handlebars');
app.engine('hbs', handlebars.engine(
    { extname:'hbs'})
    // { extname:'hbs',layoutsDir:'secondary'})
);
app.set('view engine','hbs');


// // app.use(loggerMiddleware);

// app.use(express.static('public'));

// FIRST REQUEST
// app.get('/',(req, res)=>{
//     console.log('<h1>Hello</h1>');
//     res.send('<h1>Hello Express</h1>');
//   });

// SECOND REQUEST

const movies=[
        {id:1, title:'Man of Steal',
            img:'/img/Man of steel.png',
            discription:'An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth',
        },
        {id:2, title:'Lord of the Ring',
            img:'/img/Lord.jpg',
            discription:'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        },
        {id:3, title:'Harry Potter',
            img:'/img/Harry.webp',
            discription:'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
        },
        {id:4, title:'Case for Christ',
            img:'/img/The Case for Christ.jpg',
            discription:'An investigative journalist and self-proclaimed atheist sets out to disprove the existence of God after his wife becomes a Christian.',
        },
     

];
app.get('/',(req, res)=>{
    
    // res.render('home', {layout:false} );
    // res.render('home', {layout:false, id:1,title: 'Movie List' } );
    // res.render('home', {id:1,title: 'Movie List',items:movies } );
    res.render('home', {id:1,title: 'Movie List',items:movies, message:'Some quote here:' } );
    // res.render('home', {layout:'secondary',id:1,title: 'Movie List',items:movies, message:'Some quote here:' } );
 
});
app.get('/movies/:movieId',(req, res)=>{
    const currentMovie=movies.find(movie=>movie.id==req.params.movieId);
    res.render('details',currentMovie);   
   
});
app.get('/books',(req, res)=>{
    
    // res.render('home', {layout:false} );
    // res.render('home', {layout:false, id:1,title: 'Book List' } );
    res.render('home', { id:1,title: 'Book List' } );
 
});

app.get('/test',(req, res)=>{
    console.log('Test');
    // res.status(201);
    // res.send('Test');
    res
    .status(201)
    .send('Test');
   
});
app.listen(5000,()=> console.log('Server is listening on http://localhost:5000...'));



app.get('/users/Pesho',(req,res) =>{
    console.log('get-> users/Pesho');
    res.send('Special user');
});

// // param
app.get('/users/:username',(req,res) =>{
    let username=req.params.username;
    console.log(username);
    res.send(`Useername: ${username}`);
});

// rout chaning

app.route('/users')
.get( (req, res)=>{

})
.post( (req, res)=>{

})
// 
 methods:
//  res.download
//  res.end
//  res.json
//  res.redirect
//  res.sendFile
//  res.render


app.get('/data/json',(req,res) =>{
    let obj={
        name:'Pesho' ,
        age:32,
    }
    res.json(obj);
});


app.get('/data/img',(req, res) =>{
   res.download('cute.jpg'); // force download on client
//  res.sendFile(__dirname+'/cute.jpg');

    // res.attachment('/cute.jpg');
    // res.end();
});