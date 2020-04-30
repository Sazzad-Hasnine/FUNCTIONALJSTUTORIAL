// function name(firstName, lastName, gender) {
// var output;
// if (gender === 'male') {
//      output = 'Mr. ' + firstName + '' + lastName;
    
// }
// else if (gender === 'female') {
//     output = 'Ms. ' + firstName + '' + lastName;

// }
// return output ;
// }
// var fullname = name('HM', 'Nayem', 'male')
// console.log(fullname);

function example () {
    return {
        name: 'HM Nayem',
        skill: ['Java', 'Javascript'],
        print: function(){
            console.log(this.name, this.skill);
            
        }
    }
}
var obj = example();
obj.print();