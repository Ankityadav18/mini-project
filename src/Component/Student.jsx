import StudentAge from "./StudentAge";
import StudentImage from "./StudentImage";
import StudentName from "./StudentName";
import Button from "./Button";

 function Student({sname,age,imageUrl,id}){
    return (
        <tr>
            <td>{id}</td>
           <StudentName sname={sname}></StudentName>
          <StudentAge age={age}></StudentAge>
            <StudentImage imageUrl={imageUrl}></StudentImage>
            <td>
                <Button text="Edit" btnclass="edit-btn"></Button>
            </td>
            <td>
                <Button text="View" btnclass="view-btn"></Button>
            </td>
            <td>
                <Button text="Delete" btnclass="delete-btn"></Button>
            </td>
        </tr>

    )

 }
 export default Student;