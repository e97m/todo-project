let theName = prompt('Enter your name')
let gender = prompt('What is your gender? (male/female)')

// while (gender != "male" && gender !="female" && gender !="Male" && gender !="Female") {
//     alert('Invalid value! please enter one of the folwing words (male/female)')
//     gender = prompt('What is your gender? (male/female)')
// }

let age =  prompt('How old are you? (enter a number)')

while (isNaN(age)){
    alert('Invalid value! Please enter an integer number!')
    age = parseInt (prompt('How old are you? (enter a number)'))
}

while (age <= 0) {
    alert('Invalid value! Please enter a positive number!')
    age = prompt('How old are you? (enter a number)')
}


function yesNo (input){
    while (input != "yes" && input !="no" && input !="Yes" && input !="No") {
        alert('Invalid value!')
        input= prompt('Enter a valid value like (yes/no)!')
    }  
    finalInput=input
    return finalInput

}

let show = prompt('Show welcome message?(yes/no)')
yesNo(show)

if (show == "yes" || show =="Yes") {
    if (gender == 'male' || gender == 'Male'){
        alert('Welcome Mr ' + theName+ '!')
    } else if (gender == 'female' || gender == 'Female') {
        alert('Welcome Ms ' + theName + '!')
    }
        else {alert('Welcome ' + theName + '!')}
}

let arr=[]

let q1 = prompt('Do you live in Jordan? (yes/no)')
yesNo(q1)
arr.push(['Q1', finalInput])

let q2 = prompt('Do you speack German? (yes/no)')
yesNo(q2)
arr.push(['Q2', finalInput])

let q3 = prompt('Can you code using JS? (yes/no)')
yesNo(q3)
arr.push(['Q3', finalInput])

console.log(arr)

for (let i=0; i<arr.length ; i++) {
    for (let j=0; j<2 ; j++){
        console.log(arr[i][j])
    }
}
