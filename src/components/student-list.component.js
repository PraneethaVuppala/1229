import React from "react";
import axios from "axios";
 export default class StudentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            students:[]
        }
       
    }
    deleteStudent(id){
        axios.delete("http://localhost:3001/students/"+id)
        this.showItems()
    }
    showItems(){
        axios.get("http://localhost:3001/students")
        .then(res=>{
            this.setState({students:res.data})
        })
    }
        componentDidMount(){
            this.showItems()
        axios.get("http://localhost:3001/students")
        .then(res=>{
          this.setState({students:res.data})
        })
    }
    render(){
        return(
            <table className="table table-striped table-bordered">
                <thead>
                    <tr >
                        <th>Id</th><th>Name</th><th>Email</th><th>Information</th><th>Update</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.students.map((student)=>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td><button className="btn btn-info">Info</button></td>
                        <td><button className="btn btn-primary">Edit</button></td>
                        <td> <button className="btn btn-danger" onClick ={()=>this.deleteStudent(student.id)}>Delete</button></td>
                        
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}
// export default StudentList;