
//把這當成是每次輸入的案名
 let inputText = () => String.fromCodePoint(Math.round(Math.random() * 20901) + 19968);
 let textArr = ['口湖牛','佳里牛','鳳農','渤海','展城'];
let save = new Array();
 let delayTime = () => Math.random()*10000;
 let finish = 0;
 displayProgress = (cases=finish,totalArrLength=textArr.length) =>{
    console.log(cases/totalArrLength*100+'%');
    if(finish == totalArrLength){
        console.log('finished');
    }
 } ;





//async simulation by setTimeout 
uploadSingle = (inputTextt,time) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(inputTextt);
        },time);
    });
};

comma = (i,text) =>{
    if(i<= text.length-2){return ','}else{return ''};
};




uploadAllString = (text=textArr) =>{
    if(text){
        // return text.forEach(item => {
        //     //console.log(item);
        //     save = ['uploadSingle('+item+',delayTime()).then(()=>finish++,displayProgress()),'];
        // });
        //將每一筆array的資料塞入字串'uploadSingle('+item+',delayTime()).then(()=>finish++,displayProgress()),'
        for(i=0;i<=text.length-1;i++){
            save[i] = 'uploadSingle('+text[i]+','+delayTime()+').then(()=>finish++,displayProgress())'+comma(i=i,text=textArr);
        }
    }
}
uploadAllString();

//save.forEach(item => console.log(item));
//upload(inputText(),delayTime()).then((value)=>console.log(value));
// upload.then((value)=>console.log(value));


//等下要用喔
Promise.all([uploadSingle('口湖牛',1377.7608201672597).then(()=>{console.log('case count :'+finish++),displayProgress()}),
    uploadSingle('佳里牛',1934.6714224638206).then(()=>{console.log('case count :'+finish++),displayProgress()}),
    uploadSingle('鳳農',9084.237787395146).then(()=>{console.log('case count :'+finish++),displayProgress()}),
    uploadSingle('渤海',8749.74134827932).then(()=>{console.log('case count :'+finish++),displayProgress()}),
    uploadSingle('展城',3592.61801715012).then(()=>{console.log('case count :'+finish++),displayProgress()})]);
    



//這是範例Promise.all([uploadSingle().then(()=>finish++,displayProgress()),uploadSingle().then(()=>finish++,displayProgress())])

// function processing(time, inputing){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve(`${inputing}`)},time)});
// }

//這裡要執行２０次嗎？ＮＯ
//用promise.all
// async function getInputText(){
//     const result = await processing(delayTime(),inputText());
//     console.log(result);
// }
// getInputText();


// for(let i=1;i<=20;i++){
//     //console.log(inputText());
// }
// let sayhi = async () => await Promise.resolve('hello');
// sayhi();