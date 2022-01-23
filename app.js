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

let show = prompt('Show welcome message?(yes/no)')

while (show != "yes" && show !="no" && show !="Yes" && show !="No") {
    alert('Invalid value! please enter one of the folwing words (yes/no)')
    show = prompt('Show welcome message?(yes/no)')
}

if (show == "yes" || show =="Yes") {
    if (gender == 'male' || gender == 'Male'){
        alert('Welcome Mr ' + theName+ '!')
    } else if (gender == 'female' || gender == 'Female') {
        alert('Welcome Ms ' + theName + '!')
    }
        else {alert('Welcome ' + theName + '!')}
}

