//1.map() with Array
function App(){
  const branches=["CSE","MECH","ECE","CIVIL"];
  return(
    <div>
      <h1>1.map() with Array</h1>
      {branches.map((name)=>(
        <h2>{name}</h2>
      ))}
    </div>
  );
}
//2.map() with index
function App1(){
  const branches=["CSE","MECH","ECE","CIVIL"];
  return(
    <div>
      <h1>2.map() with index</h1>
      {branches.map((branches,index)=>(
          <p key={index}>
            {index+1}.{branches}
          </p>
      ))}
    </div>
  );
}
//3.map() with object
function App2(){
  const students=[
    {id:1,name:"Navya",age:19},
    {id:2,name:"Neha",age:20},
    {id:3,name:"Sita",age:19}
  ];
  return(
    <div>
      <h1>3.map() with object</h1>
      {students.map((student)=>(
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          </div>
      ))}
    </div>
  );
}
export {App,App1,App2};
