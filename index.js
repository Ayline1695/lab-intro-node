class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>{
      return a-b
    });
    this.length = this.items.length 
    // lo llama de nuevo para que se actualice (ayuda Tomas)
  }

  get(pos) {
    let pos = 0;
if(pos<this.length){
    for (pos = 0; pos < this.length; pos++) {
      this.length.add(pos);
    }
}
else{
    throw new Error('OutOfBounds');
}
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}
const list= new SortedList()
list.add(2)
module.exports = SortedList;
