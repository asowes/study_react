// ************************************************

class YEventEmitter {
  constructor() {
    this._events = this._events || new Map();
  }
}

YEventEmitter.prototype.addListener = function (type, fn) {
  const handler = this._events.get(type);
  if (!handler) {
    this._events.set(type, fn);
  } else if (handler && typeof handler === "function") {
    this._events.set(type, [handler, fn]);
  } else {
    handler.push(fn);
  }
};

YEventEmitter.prototype.removeListener = function (type, fn) {
  const handler = this._events.get(type);

  if (handler && typeof handler === "function") {
    this._events.delete(type);
  } else {
    let index;
    for (let i = 0; i < handler.length; i++) {
      if (handler[i] === fn) {
        index = i;
      } else {
        index = -1;
      }
    }
    if (index === -1) {
      return;
    }
    handler.splice(index, 1);
    if (handler.length === 1) {
      this._events.set(type, handler[0]);
    }
  }
};

YEventEmitter.prototype.emit = function (type, ...args) {
  const handler = this._events.get(type);
  if (!handler) {
    return;
  }
  if (Array.isArray(handler)) {
    for (let i = 0; i < handler.length; i++) {
      handler[i].apply(this, args);
    }
  } else {
    handler.apply(this, args);
  }
};

// Start Apply

const student = new YEventEmitter();
// student.addListener("change status", (identity, id) => {
//   console.log(`I'm ${identity} start sub 1. Id: ${id}`);
// });
//
// student.addListener("change status", (identity) => {
//   console.log(`I'm ${identity} start sub 2.`);
// });
//
student.addListener("change status", (identity) => {
  console.log(`I'm ${identity} start sub 3.`);
});

function test() {
  console.log("test test test");
}

student.addListener("change status", test);

// student.emit("change status", "student", "1");

student.removeListener("change status", test);

student.addListener("change status", (identity) => {
  console.log(`I'm ${identity || ""} start sub 2.`);
});

// student.emit("change status");

// ************************************************
// Function.prototype.myCall = function (context = window, ...args) {
//   let key = Symbol("key");
//   context[key] = this;
//
//   let result = context[key](...args);
//   delete context[key];
//   return result;
// };
//
// name = "windows name";
// function f(a, b) {
//   console.log(a + b);
//   console.log(this.name);
// }
// let obj = {
//   name: 1,
// };
// f(3, 4);
// f.myCall(obj, 3, 4);

// ************************************************

Function.prototype.call2 = function (context = window, ...args) {
  const key = Symbol("key");
  context[key] = this;
  context[key](...args);
  delete context[key];
};
//用法：f.call(obj,arg1)
function f(a, b) {
  console.log(a + b);
  console.log(this.name);
}
let obj = {
  name: 1,
};
f.call2(obj, 1, 2); //否则this指向window

// ************************************************

function _instanceof(left, right) {
  let _left = left.__proto__;
  const _right = right.prototype;
  while (true) {
    if (_left == null) {
      return false;
    }
    if (_left === _right) {
      return true;
    }
    _left = _left.__proto__;
  }
}

console.log(_instanceof(123, Number));

// ************************************************

class Person {
  constructor(age) {
    this.age = age;
    this._name = "";
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  static get love() {
    console.log("this is love");
  }
}

const person = new Person(18);
person.name = "666";
console.log(person);

// ************************************************

function Singleton(name) {
  this.name = name;
}

Singleton.prototype.getName = function () {
  console.log(this.name);
};

Singleton.getInstance = function (name) {
  if (this.instance) {
    return this.instance;
  } else {
    return (this.instance = new Singleton(name));
  }
};

const leton1 = Singleton.getInstance("xiao1");
const leton2 = Singleton.getInstance("xiao2");
console.log(leton1);
console.log(leton2);
