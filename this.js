

this.table = 'window table';


const cleanTable = function(soap){
 
const innerFunction =   (_soap) => {
 console.log(`cleaning ${this.table} using ${_soap}`);
 }

innerFunction(soap);
};


this.garage = {
 table: 'garage table',
 
};

class createRoom{
 constructor(name){
  this.table = `${name}s table`
 }
 cleanTable(soap){
  console.log(`cleaning ${this.table} using ${soap}`);
 }
};


const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');

/*cleanTable.call(this.garage , 'some soap');
cleanTable.call(johnsRoom , 'some soap');
cleanTable.call(jillsRoom , 'some soap');*/

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap');


