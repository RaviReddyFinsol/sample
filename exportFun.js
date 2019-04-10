let cnt = 0;

const print = () => {
    console.log(cnt);
    cnt++;
};

const change = (cntr) => {
    console.log(cnt);
    cnt = cntr+cnt;
};

function Student(name,age)
{
    this.name = name;
    this.age = age;
    this.increaseAge = function() {
        return this.age+10;
    }
};

module.exports = {
    print,change,Student
};