import { Meteor } from 'meteor/meteor';

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
