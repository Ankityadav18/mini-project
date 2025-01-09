let Students=[
    {
        id:1,
        sname:"Alex",
        age:22,
        imageUrl:"https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774"
    },
    {
        id:2,
        sname:"Elle",
        age:21,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9ZoIMy8n4kGvzoOXqW9MrYVRYpw1XdXaz2FKMthU5CfZ6rJawxqHwWHBvwfAyse6Nok&usqp=CAU"
    },
    {
        id:3,
        sname:"Chris",
        age:24,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1FLcrOvTMtJBK8o7uQziwNjl25g095oWbg&s"
    },
    {
        id:4,
        sname:"Peter",
        age:20,
        imageUrl:"https://m.media-amazon.com/images/M/MV5BYzI1MTM4Y2MtZmMzNC00MWY1LTk3MWEtOGU2NGEwY2QwYjJjXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id:5,
        sname:"Allen",
        age:25,
        imageUrl:"https://i.pinimg.com/236x/cf/d6/9a/cfd69a5f40b5c5717a54ef8f059982e4.jpg"
    }
]




import Student from "../Component/Student"
function StudentList(){

    return<table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>IMAGE</th>
                <th> Update</th>
                <th>View</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>


{Students.map((student)=>{
    return <Student key={student.id} {...student}/>
})}


        </tbody>
    </table>
       
}
export default StudentList;