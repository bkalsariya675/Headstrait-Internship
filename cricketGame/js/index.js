// variable declaration
var score = 0;
let extra = 0;
let randomNumber;
let wicket = 0;
let totalBalls = 0;
let overCount = 0;
let bowlCount = 0; 
let start = 0;
let wides = 0, noBalls = 0, f = 0, s = 0; 
// arrays of players in order to check who is on striker and nonStriker end
let players = [
    'ROHIT SHARMA', 'SHIKHAR DHAWAN', 'VIRAT KOHLI',
    'KL RAHUL', 'RISHABH PANT', 'HARDIK PANDYA', 
    'RAVINDRA JADEJA', 'RAVI ASHWIN', 'BHUVNESHWAR KUMAR', 
    'MOHD. SHAMI','JASPRIT BUMRAH'
];
// inital striker and nonStriker before match starts
let striker = players[start];
let nonStriker = players[++start];
// array for runs, balls, fours, sixes of both the batsmen who are on striker and nonStriker end 
var run = [0,0], ball = [0,0], four = [0,0], six = [0,0];
// craeting array of objects in order to change the values of that particular batsmen
var player_runs = [
    {batsman: 'ROHIT SHARMA', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'SHIKHAR DHAWAN', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'VIRAT KOHLI', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'KL RAHUL', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'RISHABH PANT', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'HARDIK PANDYA', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'RAVINDRA JADEJA', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'RAVI ASHWIN', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'BHUVNESHWAR KUMAR', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'MOHD. SHAMI', runs: 0, balls: 0, fours: 0, sixes: 0},
    {batsman: 'JASPRIT BUMRAH', runs: 0, balls: 0, fours: 0, sixes: 0}
];
// onBUttonClick, playGame() will run
function playGame(){
    // The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
    // The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
    const matchInterval = setInterval(function(){
        if(totalBalls >= 60 || wicket >= 10) clearInterval(matchInterval);
        else{
            randomNumber = Math.floor((Math.random() * 10));
            if(randomNumber <= 6) Runs();
            else if(randomNumber == 7) Wicket();
            else if(randomNumber == 8 || randomNumber == 9) extraRuns(randomNumber);
            
            bowlCount++;
            if(bowlCount < 6){
                document.getElementById("bowl").innerHTML = bowlCount;
            } else{
                document.getElementById("bowl").innerHTML = 0;
                bowlCount = 0;
                overCount++;
                console.log("------------------OVER----------------");
                document.getElementById("this-over").innerHTML = "";
                let strikeChange = striker;
                striker = nonStriker;
                nonStriker = strikeChange;
                // The reverse() method reverses the order of the elements in an array.
                run.reverse();
                ball.reverse();
                four.reverse();
                six.reverse();
                document.getElementById("over").innerHTML = overCount;
            }
        }
        // [0] for striker and [1] for nonStriker
        player_runs.forEach(function(value) {   
            if(value.batsman == striker) {
                value.runs = run[0];  
                value.balls = ball[0];
                value.fours = four[0];
                value.sixes = six[0];
            }
            if(value.batsman == nonStriker) {
                value.runs = run[1];
                value.balls = ball[1];
                value.fours = four[1];
                value.sixes = six[1];
            }
        });
        var row = 3;
        // The cells collection returns a collection of all <td> or <th> elements in a table row.
        player_runs.forEach(function(value) {  
            document.getElementById('detailScore').rows[row].cells[1].innerHTML = value.runs;
            document.getElementById('detailScore').rows[row].cells[2].innerHTML = value.balls;
            document.getElementById('detailScore').rows[row].cells[3].innerHTML = value.fours;
            document.getElementById('detailScore').rows[row].cells[4].innerHTML = value.sixes;
            row++;
        });
    }, 1000);
}
// TOTAL RUNS
function Runs(){
    document.getElementById("striker").innerHTML = `${striker}*`;
    document.getElementById("non-striker").innerHTML = nonStriker;
    console.log(striker,randomNumber,"runs");
    if(randomNumber == 0 || randomNumber == 2 || randomNumber == 4 || randomNumber == 6){
        document.getElementById("this-over").innerHTML += `  ${randomNumber}, `;
        score = score + randomNumber;
        document.getElementById("run").innerHTML = score;
        totalBalls++;
        ball[0]++;
        run[0] += randomNumber;
        if(randomNumber == 4){
            four[0]++;
            f++;
            document.getElementById("f").innerHTML = `${f},`;
        } 
        else if (randomNumber == 6){
            six[0]++;
            s++;
            document.getElementById("s").innerHTML = s;
        }        
    } 
    else if(randomNumber == 1 || randomNumber == 3 || randomNumber == 5){
        document.getElementById("this-over").innerHTML += ` ${randomNumber}, `;
        score = score + randomNumber;
        document.getElementById("run").innerHTML = score;
        totalBalls++;
        ball[0]++;
        run[0] += randomNumber;
        console.log("STRIKE CHANGED");
        let strikeChange = striker;
        striker = nonStriker;
        nonStriker = strikeChange;
        run.reverse();
        ball.reverse();
        four.reverse();
        six.reverse();
    }
}
// TOTAL WICKETS
function Wicket(){
    document.getElementById("this-over").innerHTML += ` wicket, `;
    console.log("OUT",striker);
    totalBalls++;
    ball[0]++;
    wicket++;
    document.getElementById("wicket").innerHTML = wicket;
    
    player_runs.forEach(function(value) {
        if(value.batsman == striker) {
            value.runs = run[0];
            value.balls = ball[0];
            value.fours = four[0];
            value.sixes = six[0];
        }
    });
    striker = players[++start];
    run[0] = 0;
    ball[0] = 0;
    four[0] = 0;
    six[0] = 0;
}
// TOTAL EXTRAS
function extraRuns(extraruns){
    if(extraruns == 8){
        document.getElementById("this-over").innerHTML += ` wide, `;
        console.log("WIDE");
        score = score + 1;
        extra++;
        wides++;
        document.getElementById("wides").innerHTML = `${wides},`;
        document.getElementById("bowl").innerHTML = bowlCount--;
        document.getElementById("run").innerHTML = score;
        document.getElementById("extra").innerHTML = extra;
    } else{
        document.getElementById("this-over").innerHTML += ` no ball, `;
        console.log("NO BALL");
        score = score + 1;
        extra++;
        noBalls++;
        document.getElementById("noballs").innerHTML = `${noBalls}`;
        document.getElementById("bowl").innerHTML = bowlCount--;
        document.getElementById("run").innerHTML = score;
        document.getElementById("extra").innerHTML = extra;
    }    
}

