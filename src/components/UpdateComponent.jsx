import { useDispatch, useSelector } from "react-redux";
import { toggleUpdate, updateData } from "../store/studentslice";
import { useState } from "react";


const UpdateComponent = () => {
    const dispatch = useDispatch()
    const studentInfo = useSelector(state => state.student.studentInfo)

    const [name, setName] = useState(studentInfo.name);
    const [rollno, setRollno] = useState(studentInfo.rollno);
    const [fees, setFees] = useState(studentInfo.fees);
    const [status, setStatus] = useState(studentInfo.status);

    const nameHandler = (e) => {
        setName(e.target.value);
    };

    const rollnoHandler = (e) => {
        setRollno(e.target.value);
    };

    const feesHandler = (e) => {
        setFees(e.target.value);
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    const updateHandler = () => {
        dispatch(updateData({ name, rollno, fees, status }))
    }

    return (
        <div
            className="absolute top-0 left-0 w-full h-full bg-gray-800/40 flex justify-center items-center"
            onClick={() =>
                dispatch(toggleUpdate())
            }>
            <div
                className="p-3 shadow-lg w-[40vw] bg-white rounded"
                onClick={(e) => e.stopPropagation()

                }>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    updateHandler()
                }}
                    action="" className="flex flex-col gap-1">

                    <label htmlFor="name">Name</label>
                    <input
                        className="shadow-md focus:outline-none px-2 py-1" type="text" name="name" id=""
                        onChange={nameHandler}
                        value={name}
                    />

                    <label htmlFor="rollno">Roll No</label>
                    <input
                        className="shadow-md focus:outline-none px-2 py-1" type="text" name="rollno" id=""
                        onChange={rollnoHandler}
                        value={rollno}
                    />

                    <label htmlFor="fees">Fees</label>
                    <input
                        className="shadow-md focus:outline-none px-2 py-1" type="text" name="fees" id=""
                        onChange={feesHandler}
                        value={fees}
                    />

                    <div className="flex justify-between items-center py-3">
                        <label htmlFor="status">Status :</label>
                        <select name="" id=""
                            className="border p-1"
                            onChange={statusHandler}
                            value={status}
                        >
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                        </select>
                    </div>

                    <button type="submit"
                        className="bg-blue-500 py-2 active:scale-90 rounded text-white font-bold">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateComponent;