function greting(greetingHandler,name){
   greetingHandler(name)
}
// const name ='halim khau mama'
// const number =[3,3,4,56,7,3]
// const person ={
//     name:'abul',id:7
// }
function greetingHandler(name){
    console.log('how are you',name)
}
 function greetinMorning(name){
     console.log('Good morning',name)
 }
 function greetinNight(name){
     console.log('Good Night',name)
 }
 function greetingnoon(name){
    console.log('Good noon',name)
}
greting(greetingHandler, 'jonh')
 greting(greetinMorning,'shimu')
greting(greetinMorning,'takia')
greting(greetinNight,'shila')
greting(greetingnoon,'sadika')