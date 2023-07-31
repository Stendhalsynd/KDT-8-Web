class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mew() {
    console.log(`${this.name} : `, "야옹");
  }
  eat() {
    console.log(`${this.name} : `, "먹이를 먹습니다.");
  }
}

let cat1 = new Cat("나비", 1);
let cat2 = new Cat("냥이", 2);

cat1.mew();
cat1.eat();

cat2.mew();
