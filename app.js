// function get(url){
//     const request = new XMLHttpRequest()
//     return new Promise((resolve,reject)=> {
//         request.onload = function(){
//             if (request.readyState !==4) return;

//             if (request.status >= 200 && request.status < 300){
//                 resolve(request.response)
//             }
//             else{
//                 reject(request.status)
//             }
//         }
//         request.onerror = function handleError(){
//             request = null
//             reject("NETWORK ERROR")
//         }
//         request.open("GET",url)
//         request.send()
//     })
// }
// // Part 1.1 v1
// get("http://numbersapi.com/9?json")
// .then(res=>console.log(res))
// // Part 1.2 v1
// get("http://numbersapi.com/1,2,4,9?json")
// .then(res=>console.log(res))
// // Part 1.3 v1
// get("http://numbersapi.com/9?json")
// .then(res=>{
//     console.log(res)
//     return get("http://numbersapi.com/9?json")
// })
// .then(res=>{
//     console.log(res)
//     return get("http://numbersapi.com/9?json")
// })
// .then(res=>{
//     console.log(res)
//     return get("http://numbersapi.com/9?json")
// })
// .then(res=>{
//     console.log(res)
// })


// function get(url){
//     const request = new XMLHttpRequest()
//     return new Promise((resolve,reject)=> {
//         request.onload = function(){
//             if (request.readyState !==4) return;

//             if (request.status >= 200 && request.status < 300){
//                 resolve(request.response)
//             }
//             else{
//                 reject(request.status)
//             }
//         }
//         request.onerror = function handleError(){
//             request = null
//             reject("NETWORK ERROR")
//         }
//         request.open("GET",url)
//         request.send()
//     })
// }

// // Part 2.1 v1
// get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
// .then(res=>{
//     console.log(`${JSON.parse(res).cards[0].value} of ${JSON.parse(res).cards[0].suit}`)
//  })

// // Part 2.2 v1 
// get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
// .then(res=>{
//     console.log(`${JSON.parse(res).cards[0].value} of ${JSON.parse(res).cards[0].suit}`)
//     return get(`https://deckofcardsapi.com/api/deck/${JSON.parse(res).deck_id}/draw/?count=1`)
//  })
//  .then(res=>{
//     console.log(`${JSON.parse(res).cards[0].value} of ${JSON.parse(res).cards[0].suit}`)
//  })

// // 2.3 v1
// const button = $('button')
// const ul = $('ul')
// let count = 0
// let deckId;

// console.log(button);
// button.on('click',function(e){
//     e.preventDefault()
//     if (count == 0){
//         final = get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
//         .then(res => {
//             const li = $("<li></li>")
//             const img = $(`<img src=${JSON.parse(res).cards[0].image}>`)
//             console.log(JSON.parse(res).cards[0])
//             li.append(img)
//             ul.append(li)
//             deckId = JSON.parse(res).deck_id
//             console.log(deckId)
//         })
//     }
//     else{
//         console.log(deckId,"this is deck")
//         get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//         .then(res => {
//             const li = $("<li></li>")
//             const img = $(`<img src=${JSON.parse(res).cards[0].image}>`)
//             console.log(JSON.parse(res).cards[0])
//             li.append(img)
//             ul.append(li)
//     })
//     }
//     count+=1
// })


