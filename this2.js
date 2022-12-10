﻿//'use strict'



this.table = 'window table';

//console.log(window.table);



const cleanTable = function(soap){

 console.log(`cleaning ${this.table} using ${soap}`)

};



cleanTable.call(this , 'some soap');


this.garage = {

 table: 'garage table',

 cleanTable(){

 console.log(`cleaning ${this.table}`)

 }

};



let johnsRoom = {

 table: 'johns table',

 cleanTable(){

 console.log(`cleaning ${this.table}`)

 }

};



//console.log(this.garage.table);



//this.garage.cleanTable();

//johnsRoom.cleanTable();
