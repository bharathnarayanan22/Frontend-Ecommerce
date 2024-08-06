
const Student = (props) => {
    const {student} = props;
    const {name, age} = student;
    console.log(props)
    return (
        <>
        <div>Student</div>
        {/* <div>Student Name: {name}</div>
        <div>Student Age: {age}</div> */}
        <div>Student Name: {name}</div>
        <div>Student Age: {age}</div>
        </>
    )
}
export default Student;
