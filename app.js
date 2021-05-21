//console.log('Class NodeJs')
/*
const helper = require('./helper');

console.log(helper.user('Tina'));
console.log(helper.id('1'));
console.log(helper.lastName('Sadowski'));
*/

/*Read amd write files*/

const fs = require('fs');

//read a file sincronosly
// const readFile = fs.readFileSync('./hello.text' ,'utf-8');
// console.log(readFile)

//write a file syncronously \

//fs.writeFileSync('newFile.txt' , readFile);

//read a file async
/*
const asyncRead = fs.readFile('./hello.text' , 'utf-8' , (error , data)=>{
    if(error){
        console.log('File corrupted')
    }else
    {
        console.log(data)
    }
})
*/
//with method unlink you can remove a directory (file)

// fs.unlink('./newFile.txt' , (error)=>{
//     console.log(error)
// })

//another way to do it is using mkdir , rmdir

fs.mkdir('myFolder' , ()=>{

    fs.readFile('./hello.text' , 'utf-8' , (error , data) =>{

      if(error){
          console.log(error)
      }else{
          fs.writeFile('./myFolder/newFile.txt' , data , ()=>{
              
          })
      }

    })//end of the readFile
})//end of the mkdir