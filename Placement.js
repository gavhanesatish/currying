class Student{
 constructor(name , age , marks)
 {
  this.name = name;
  this.age = age;
  this.marks = marks;
 }

 setPlacementAge(minPlacementAge){
  console.log(this);
  return (minMarks) =>{
   console.log('inside eligibleForcurrentCompany',this)

   if(this.marks > minMarks && this.age > minPlacementAge){
    console.log(this.name + "is ready for placements")
   }
   else
   {
    console.log(this.name + "is not ready for placements")
   }
  }
 }
}

const stud1 = new Student('stud1',21,76);
const stud2 = new Student('stud2',14,34);

stud1.setPlacementAge(20)(60);
stud2.setPlacementAge(20)(60);