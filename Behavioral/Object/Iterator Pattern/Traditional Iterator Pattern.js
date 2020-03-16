/*
Allows You To Create Your Own Rules On How To Traverse A Collection Of Objects.
*/
//                  Using An Array Instead OF An Object
const items = [1, false, "Devsage", 3.14];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function() {
    return this.index < this.items.length;
  },
  next: function() {
    return this.items[this.index++];
  }
};

const iter = new Iterator(items);

console.log(iter.hasNext());

while (iter.hasNext()) console.log(iter.next());

console.log(iter.hasNext());
