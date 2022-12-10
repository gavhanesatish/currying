class student {
 static count = 0;
constructor(name,age,pno,marks){
  this.name = name;
  this.age = age;
  this.pno = pno;
  this.marks = marks;
  student.countStudent();
 }
 static countStudent(){
  return(student.count++);
 }
 eligible(){
  if(this.marks<40)
  {
   console.log(`${this.name} is not eligible`);
  }
  else
  {
    console.log(`${this.name} is eligible`);
  }
 }
 }
 const rohit = new student('Rohit',20,2234,78);
 const rohan = new student('Rohan',21,3234,37);
 const roshan = new student('Roshan',19,2284,67);
 const roman = new student('Roman',22,2224,46);
 const rutik = new student('Rutik',18,2634,39);

 console.log(student.countStudent());

 rohit.eligible();
 rohan.eligible();
 roshan.eligible();
 roman.eligible();
 rutik.eligible();


