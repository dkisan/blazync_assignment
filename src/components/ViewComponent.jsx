import { useDispatch, useSelector } from "react-redux";
import { closeView } from "../store/studentslice";


const ViewComponent = () => {
    const dispatch = useDispatch()
    const { name, rollno, fees, status } = useSelector(state => state.student.studentInfo)


    return (
        <div
            className="absolute top-0 left-0 w-full h-full bg-gray-800/40 flex justify-center items-center"
            onClick={() =>
                dispatch(closeView()
                )} >
            <div
                className="p-3 shadow-lg w-[40vw] bg-white rounded"
                onClick={(e) =>
                    e.stopPropagation()
                }>

                <h1
                    className="underline text-center mb-5">
                    Student Details
                </h1>

                <div>
                    <h1>Name : {name}</h1>
                    <h1>Rollno : {rollno}</h1>
                    <h1>Fees : {fees}</h1>
                    <h1>Status : {status}</h1>
                </div>

                <button
                    className="bg-blue-600 text-white font-bold px-3 py-1 rounded "
                    onClick={() =>
                        dispatch(closeView())
                    }>
                    Ok
                </button>

            </div>
        </div>
    )
}

export default ViewComponent;