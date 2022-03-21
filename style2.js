function myFirstApp(name, age) {
    alert(`Привет, меня зовут ${name} и это моя первая программа!`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        for (let i = 0; i < skills.length; i++) {
         console.log(`Я владею: ${skills[i]}`);
        }
        return skills;
    }
    showSkills();
    function checkAge() {
        if (age > 18) {
          return   console.log('У тебя есть шансы стать FrontEnd dev');
        } else  {
          return   console.log('Тебе ещё рано');
        }
    }
checkAge();
    function calcPow(num) {
        return num *= num;
    }
    console.log(calcPow(4));

    calcPow(4);
}
myFirstApp('Ivan', 32);
