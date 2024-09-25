// דף ראשון
document.getElementById('main2').style.display ='none'; 
document.getElementById('goodLuckH').style.display ='none';
document.getElementById('finishAndAgain').style.display='none';
document.getElementById('register').style.display='none';
let userName;
function registerForm(){
    document.getElementById('main').style.display='none';
    document.getElementById('register').style.display='block';
}
function moveToEnterPage(){
    document.getElementById('main').style.display='block';
    document.getElementById('register').style.display='none';
}
// הפונקציה שמפעילה את הכניסה לדף השני
function buttonEnter(){
    document.getElementById('register').style.display='none';
    userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    if (password=="1234"){
        document.getElementById('main').style.display = 'none';
        document.getElementById('main2').style.display = 'block';
        document.getElementById("userNameSecondPage").innerHTML = " "+ userName;
    }
    if (password != "1234")
    document.getElementById("p2").innerHTML="wrong password !";
}
let flag =true;
let mat1=
    [[5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]];
    let mat2 = 
    [[8,3,5,6,4,9,1,2,7],
    [7,9,4,1,2,3,8,6,5],
    [6,2,1,5,8,7,4,9,3],
    [1,4,7,9,5,8,2,3,6],
    [2,8,9,4,3,6,5,7,1],
    [5,6,3,7,1,2,9,8,4],
    [4,7,8,2,6,1,3,5,9],
    [9,5,2,3,7,4,6,1,8],
    [3,1,6,8,9,5,7,4,2]];
    let mat3 = 
    [[7,3,5,6,1,4,8,9,2],
    [8,4,2,9,7,3,5,6,1],
    [9,6,1,2,8,5,3,7,4],
    [2,8,6,3,4,9,1,5,7],
    [4,1,3,8,5,7,9,2,6],
    [5,7,9,1,2,6,4,3,8],
    [1,5,7,4,9,2,6,8,3],
    [6,9,4,7,3,8,2,1,5],
    [3,2,8,5,6,1,7,4,9]];
    let arr=[]; // המערך של המספרים שנעלמו
    let mainhtml;
    let div;
    let randomMat; // מגריל את הלוח סודוקו
    function levelsOfSoduko(level) // הפונקציה שבונה את הסודוקו עצמו
    {
        arrHints=[];
        randomMat=Math.floor(Math.random()*(4-1)+1);
        console.log(randomMat);
        document.getElementById('goodLuckH').style.display ='block';
        document.getElementById('finishAndAgain').style.display='block';    
        document.getElementById("main2").style.display="none";
        document.getElementById("main3").style.display="block";
        mainhtml=document.getElementById("main3");
        if (randomMat==1)
        buildbuard(1,level);
        if (randomMat==2)
        buildbuard(2,level);
        if (randomMat==3)
        buildbuard(3,level);
         // מפעיל את הפונקציה שמעלימה מספרים
     let startMin = 10;
let time = startMin*60;
let countdown = document.getElementById("countdown");
setInterval(update,1000);  // מפעיל את הפונקציה שמגבילה בזמן
function update(){ 
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    if (seconds<10)
    seconds= "0"+seconds;
countdown.innerHTML= `${minutes}:${seconds}`;
time--
if (minutes==0&&seconds==0)
{
alert ("time's up!");
resetGame(); // מאפס את המשחק אם נגמר הזמן
time=10*60;
}
}
    } // נגמרה הפונקציה של הסודוקו
    function buildbuard(rand,level){
        if (rand==1)
{
        for (let i=0;i<9;i++)
    {
        div = document.createElement("div");
        div.setAttribute("class","row");
        for (let j=0;j<9;j++)
        {
           let input= document.createElement("input");
            input.setAttribute('id',`td:${i}-${j}`);        
            input.setAttribute("value",mat1[i][j]);
            mainhtml.appendChild(div);
            div.appendChild(input);
            if (
                ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
                ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
                ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && i > 27 && i < 53) ||
                ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
                ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
              ) {
                input.setAttribute("class","uneven");
              }
                else{
          input.setAttribute("class","even");
                }
        }
    }
    randInside(level);
}
if (rand==2)
{
        for (let i=0;i<9;i++)
    {
        div = document.createElement("div");
        div.setAttribute("class","row");
        for (let j=0;j<9;j++)
        {
           let input= document.createElement("input");
            input.setAttribute('id',`td:${i}-${j}`);        
            input.setAttribute("value",mat2[i][j]);
            mainhtml.appendChild(div);
            div.appendChild(input);
            if (
                ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
                ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
                ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && i > 27 && i < 53) ||
                ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
                ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
              ) {
                input.setAttribute("class","uneven");
              }
                else{
          input.setAttribute("class","even");
                }
        }
    }
    randInside(level);
}
if (rand==3)
{
        for (let i=0;i<9;i++)
    {
        div = document.createElement("div");
        div.setAttribute("class","row");
        for (let j=0;j<9;j++)
        {
           let input= document.createElement("input");
            input.setAttribute('id',`td:${i}-${j}`);        
            input.setAttribute("value",mat3[i][j]);
            mainhtml.appendChild(div);
            div.appendChild(input);
            if (
                ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
                ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
                ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && i > 27 && i < 53) ||
                ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
                ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
              ) {
                input.setAttribute("class","uneven");
              }
                else{
          input.setAttribute("class","even");
                }
        }
    }
    randInside(level);
}
    }
let arr2=[]; // הפונקציה של המספרים הנעלמים, לא נעלמת אחרי שמאפסים את המקורית
    function randInside(level) // הפונקציה שמחליטה איזה רמת קושי המשתמש בחר
    {
        if (level==1)
        dissappear(20);
        if (level == 2)
        dissappear(40);
        else if (level == 3)
        dissappear(60);
    }
    function dissappear(num){ // הפונקציה עצמה שמעלימה את המספרים
    for(let k = 0 ; k<num ; k++)
    {    
let rrr = `td:${Math.floor(Math.random()*(9-0))}-${Math.floor(Math.random()*(9-0) )}`;  // המספר שנבחר לנעלם
//td:6-2
for (let i=0;i<arr.length;i++)
{
    if (rrr==arr[i])
    {
        rrr = `td:${Math.floor(Math.random()*(9-0))}-${Math.floor(Math.random()*(9-0) )}`;
        i=0;
    }
}
arr.push(rrr);
document.getElementById(`${rrr}`).value = '';
    }
    arr2=arr;
    arr=[];
}
let bolian=true;
let afterInput;
    function checkAllOnClick() // הפונקציה שבודקת אם הלוח תקין והמשתמש צדק או טעה
{
        // if (input !== Number)
        // alert("not good");
    if (randomMat==1)
    {
        for (let i=0;i<9;i++)
        {
                for (let j=0;j<9;j++)
            {
                afterInput = document.getElementById(`td:${i}-${j}`).value;
                    if (mat1[i][j] != afterInput)
                    {
                        bolian=false;
                    }
            }
        }
    }
    if (randomMat==2)
    {
        for (let i=0;i<9;i++)
        {
                for (let j=0;j<9;j++)
            {
                afterInput = document.getElementById(`td:${i}-${j}`).value;
                    if (mat2[i][j] != afterInput)
                    {
                        bolian=false;
                    }
            }
        }
    }
    if (randomMat==3)
    {
        for (let i=0;i<9;i++)
        {
                for (let j=0;j<9;j++)
            {
                afterInput = document.getElementById(`td:${i}-${j}`).value;
                    if (mat3[i][j] != afterInput)
                    {
                        bolian=false;
                    }
            }
        }
    }
        if (bolian==true)
        alert ("good!");
        else
        alert ("wrong");
        document.getElementById("main2").style.display = "none";
        document.getElementById("finishAndAgain").style.display = "none";
        document.getElementById("main3").style.display="none";
        document.getElementById('goodLuckH').style.display = "none";
        while (document.getElementById("main3").firstChild!= null)
        {
            document.getElementById("main3").removeChild(document.getElementById("main3").firstChild);
        }
        buttonEnter(); 
        randInside();
        // שולח ללוח השני , שהמשתמש ימשיך לשחק
}
    function resetGame(){ // הפונקציה מאפסת את המשחק על לחיצה על again
               for(let i=0;i<arr2.length;i++)
               {  
                document.getElementById(arr2[i]).value=" ";
               }
           }
           let arrHints=[];
    function hint(){ // כפתור רמז
        let answer;
        let colum;
        let roww;
        let theHint;
        theHint = document.getElementById(arr2[Math.floor(Math.random()*(arr2.length))]);
        for (let i=0;i<arrHints.length;i++)
        {
            if (theHint.id==arrHints[i])
            {
            theHint = document.getElementById(arr2[Math.floor(Math.random()*(arr2.length))]);
            i=0;
            }
        }
        arrHints.push(theHint.id);
        colum=theHint.id.charAt(5);
        roww= theHint.id.charAt(3);
                if (randomMat==1)
                answer= mat1[roww][colum];
                if (randomMat==2)
                answer= mat2[roww][colum];
                if (randomMat==3)
                answer= mat3[roww][colum];
        console.log(answer);
        document.getElementById("td:"+roww+"-"+colum).value =  answer; // לא הצלחתי לעשות עם הסימן של הדולר
        if (arrHints.length==3)
        alert ("pay attention, you are being using 3 hints so far!");
        if (arrHints.length==6)
        alert ("oh oh, remember - its not good to use too many hints");
    }