var theName = prompt('Enter you name')
var gender = prompt('What is your gender? (male/female)')

while (gender != "male" && gender !="female" && gender !="Male" && gender !="Female") {
    alert('please enter one of the folwing words (male/female)')
    gender = prompt('What is your gender? (male/female)')
}

var age =  prompt('How old are you? (enter a number)')

while (isNaN(age)){
    alert('Please enter an integer number!')
    age = parseInt (prompt('How old are you? (enter a number)'))
}

while (age <= 0) {
    alert('Please enter a positive number!')
    age = prompt('How old are you? (enter a number)')
}

var show = prompt('Show welcome message?(yes/no)')

while (show != "yes" && show !="no" && show !="Yes" && show !="No") {
    alert('please enter one of the folwing words (yes/no)')
    show = prompt('Show welcome message?(yes/no)')
}

if (show == "yes" || show =="Yes") {
    if (gender == 'male' || gender == 'Male'){
        alert('Welcome Mr ' + theName)
    } else {alert('Welcome Ms ' + theName)}
}

