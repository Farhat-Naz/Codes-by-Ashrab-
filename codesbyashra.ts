//store a person name
let personName:string="Eric";
console.log(`"Hello" ${personName}, "would you like to learn some Python today?"`);

let personName:string="Eric";

//to Lowercase
console.log("lower case", personName.toLowerCase());
// to Upper case
console.log("Upper Case", personName.toUpperCase());
//to title case
console.log("Title Case", personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());

let poetName:string="Albert Einstein";
let quout:string="A person who never made a mistake never tried anything new.";
console.log(`${poetName} once said, "${quout}"`);


//4th day

let famous_person:string="Albert Einstein";
let message:string="A person who never made a mistake never tried anything new.";
console.log(`${famous_person} once said, "${message}"`);

//5day

let namee:string="\t\n Farhat Naz \t\n";
console.log(namee);//print name with white spaces
console.log(namee.trim());


//addition subtraction multiplication
//for addition

console.log(5+3);

//for subtraction

console.log(10-2);

// for multiplication

console.log(4*2);

//8th
var n = 4;
console.log("\"My favourite number is\", ".concat(n));

//print name

let myName:string="farhat Naz";
console.log(`My name is ${myName}`);


// print or using Array
let names:string[]=["Maliha","Hafsa","Mishal"];
for(let i=0;i<names.length;i++){
console.log(names[i]);
}

// print message for each person  using Array
let namess:string[]=["Maliha","Hafsa","Mishal"];
for(let i=0;i<namess.length;i++){
console.log("Hello How are you",namess[i]);
}


// list of transport using array
let Transport:string[]=["Honda Motor cycle","car","Bike","Suzuki"];
Transport.forEach(elem=>{
    console.log(`I would like to own a ${elem}` );
});





//newq14

let guest:string[]=["Shareq","Nashit","Ali","Akbar"];
let invite=guest.forEach(elm=>{
    console.log(`"you are invited to dinner" ${elm}`);
});

let guestt:string[]=["Shareq","Nashit","Ali","Akbar"];
// console.log(`"you are not invited", ${guestt[0]}`);
// let invitee=guestt.slice(1)
// for(let i=0; i<invitee.length; i++)
//     console.log(`"you are invited to dinner" ${invitee[i]}`);
// console.log(`"you are still in list",${guestt}`);

// Q14 Answer:
// let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });


// Q15 Answer:
let unabletoAttend = "Shareq";
console.log(`${unabletoAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Mishal";
guestt[guestt.indexOf(unabletoAttend )] = newGuest;

// New invitations
guestt.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


let places:string[]=["Newzeland","Germany","Saudiarab","UAE"];
console.log("original order",places);
// alphabetical order
console.log("alphabetical order",[...places].sort());
//original order
console.log("orginal order",places);
//reverse alphabetical order 
console.log("reverse order",[...places].sort().reverse());
//orignal order
console.log("orginal order",places);
//reverse order
places.reverse()
console.log("reverse order",places);
places.sort();
console.log("alphabetical order",places);
places.reverse();
console.log("places reversed",places);
places.sort();
console.log(places);


q17


let guest:string[]=["Shareq","Nashit","Ali","akbar"];
console.log("you can invite only two people for dinner");
while(guest.length>2){
    let removedguest=guest.pop();
    console.log(`You ${removedguest} not invited`)
}
   let remainingguest=guest.forEach(elem=>{
    console.log(`Your ${elem} are still invited to dinner`)});
guest.splice(0,guest.length);
console.log(`this is new list ${guest}`);


let places:string[]=["Newzeland","Germany","Saudiarab","UAE"];
console.log("original order",places);
// alphabetical order
console.log("alphabetical order",[...places].sort());
//original order
console.log("orginal order",places);
//reverse alphabetical order 
console.log("reverse order",[...places].sort().reverse());
//orignal order
console.log("orginal order",places);
//reverse order
places.reverse()
console.log("reverse order",places);
places.sort();
console.log("alphabetical order",places);
places.reverse();
console.log("places reversed",places);
places.sort();
console.log(places);


 //let guestlist:string[]=["Farhat","Mishal","Shareq","Nashit"];
// for(let i=0; i<guestlist.length; i++){
//     console.log(`"Dear ${guestlist[i]} are still invited to dinner"`);
// }

//or
// console.log(` I am inviting ${guestlist.length} people to dinner`)


//Question  20

// let newArr:string[]=["Karachi","Lahore","Peshawer","Mirpurkhas"]
// let arr=newArr.map(elem=>{
//     console.log(elem);
//});

//question 21

let book:{title:string, auther:string, publishedyear:number}={
    title:"the hobbit",
    auther: "J.R.R. Tolkien",
    publishedyear: 1937
};
console.log(`book title ${book.title} and auther ${book.auther}, ${book.publishedyear} are"`);



let arr:string[]=["Ali","Salman","Rashid"];
console.log(arr[3])//intentional error
arr[2]="Rashid";//accessing a valid index



//q21
let car='subaru';
console.log("Is car=='sabura' i predict true")
console.log(car=="sabaru");

console.log("Is care=='Toyota'? I predict false")
console.log(car=="Toyota");

console.log("Is car=='Mahran'? I predict tru");
console.log(car=="Mehran");



console.log("Testing enequility test");
console.log("apple==Apple");//false
console.log("apple==apple");//true

//using the lower case function

console.log("using lower case function");
console.log("Apple".toLowerCase()=="apple");
//numerical test

console.log(5>2); // true
console.log(3<5); //true
console.log(5>10); //false

//test using && and ||

console.log(true && false); //false
console.log(true|| false);  //true

// test wether an item is in array

let fruits=["apple","banana","Cherry"];
console.log("is apple in array");
console.log(fruits.includes("apple"));

console.log("is mango in array?");
console.log(fruits.includes("mango"));

//q25

let alien_color ="green";
if(alien_color == "green"){
    console.log("you earned 5 points");
}

let alien_color="red";
if(alier_color == "green"){
    no output
}

q26
alien_color="green";

if(alien_color=="green")
    {
        console.log("you earned 5 points");
    }
        else {
            console.log("You earned just 10 poits ")
        }
    


        alien_color="red";
         if(alien_color=="green"){
            console.log("You earned 5 points");
         }
         else{
            console.log("You earned 10 points");


         }


            q27

            alien_color="green";
            if(alien_color=="green"){
                console.log("You earned 10 points");
            }
            else if(alien_color=="yellow"){
                console.log("You earned 10 points");
            }
            else if(alien_color=="red"){
                console.log("you earned 10 points");
            }

            

            alien_color="yellow";
            if(alien_color=="green"){
                console.log("You earned 10 points");
            }
            else if(alien_color=="yellow"){
                console.log("You earned 10 points");
            }
            else if(alien_color=="red"){
                console.log("you earned 10 points");
            }


            
            alien_color="red";
            if(alien_color=="green"){
                console.log("You earned 10 points");
            }
            else if(alien_color=="yellow"){
                console.log("You earned 10 points");
            }
            else if(alien_color=="red"){
                console.log("you earned 10 points");
            }

            //q29
 let age:number=2;
 if(age<2){
    console.log("persone is baby")
 }

 else if( age<4){
    console.log("person istoddler");
 }
 else if(age<13){
    console.log("person is kid");
 }

 q30

 let favourite_fruit:string[]=["banan","apple","mango"];

 if(favourite_fruit.includes("banan")){
    console.log("you really like banana");


 }

 else if(favourite_fruit.includes("apple")){
    console.log("You also like apple");
 }

 q30

 let username:string[]=["admin","user1","user2","user3","user4"];

 username.forEach((usernam)=>{
    if(usernam=="admin"){
        console.log("Hello admin");
    }
    else{
        console.log(`hello ${usernam}`);}
    });

 
    // //q31
// let usernamee:string[]=[];
// if(username.length==0){
//     console.log("no user");
// }
// else {
//     console.log("greeting");
// }

//q32

// let current_user:string[]=["Ali","kamran","Danyal","Naeem"];
// let new_user:string[]=["Saman","Ali","Kamran","Faraht","Naeem"];
// new_user.forEach((user)=>{
//     if
//     (current_user.some((currentuser)=>{
//         currentuser.toLowerCase()==user.toLowerCase()}
//     ))
// }
//     {
//         console.log(`${user} need a login`);
//     }
//     else{
//         console.log(`${user} is available`);}
//     }

// )
//q33

let numbers=[1,2,3,4,5,6,7,8,9,];
numbers.forEach((numb)=>{
   let suffix="th";
   
    if(numb==1){
        suffix="st";
    }
        else if(numb==2){
            suffix="2nd";

        }
        else{
            suffix="rd";
        }
        console.log(`${numb}${suffix}`);
    });



    //q34
// let pizza:string[]=["peproni","Tikka","mashroom"];
// pizza.forEach(elem=>{
//     console.log(`"I like ${elem} pizza`)
// })
// console.log("I really love pizza");

//q35

// let animals:string[]=["cat","dog","got"];
// animals.forEach(animal=>{
//     console.log(`I have ${animals}`);
// })
// console.log("I like pet animals");

//q36

// function make_shirt(size:number, message:string){
//     console.log(`the size of ${size} and print ${message} on it`)
// }
// make_shirt(40,"Hello");


//q37

// function make_shirt(size:string="Large", message:string="I Love Typescript"){
//     console.log(` I have ${size} of shirt and print ${message}`);
// }
// make_shirt();
// make_shirt("medium");
// make_shirt("small","Hello");


//Q38
// function describe_city(city:string="Karachi", country:string="Pakistan"){
//     console.log(`${city} is in ${country}`);
// }
// describe_city();
// describe_city("Lahore");
// describe_city("washigton","America");

//Q39

function city_country(city:string, country:string){
    return `${city},${country}`;

}
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Tokyo","Japan"));
console.log(city_country("Riaz","SaudiArab"));












