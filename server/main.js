import { Meteor } from 'meteor/meteor';
import { observable, computed } from 'mobx';


Meteor.startup(() => {
  // code to run on server at startup
});

const f = async () => {
  const h = await new Promise((resolve) => {
    setTimeout(() => resolve('hello'), 100)
  });
  console.log(h)
};
f();

class A {
  @observable x = 1

  @computed get y() {
    return this.x + 2;
  }
}

new A();
