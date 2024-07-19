import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { editHandler, sendInvoice, viewStudent } from "../store/studentslice";

const TableComponent = () => {

    let showStudentData = useSelector(state => state.student.student)
    const pageview = useSelector(state => state.student.pageview)
    const pageno = useSelector(state => state.student.pageno)
    const searchName = useSelector(state => state.student.searchName)
    const sortStudent = useSelector(state => state.student.sortStudent)
    const status = useSelector(state => state.student.sortStatus)


    showStudentData = showStudentData.filter(s => s.name.toLowerCase().includes(searchName.toLowerCase()))

    if (status === 'Paid') {
        showStudentData = showStudentData.filter(s => s.status === 'Paid')
    } else if (status === 'Unpaid') {
        showStudentData = showStudentData.filter(s => s.status === 'Unpaid')
    }

    const dispatch = useDispatch()
    return (
        <table
            className="w-full table-auto text-xs text-left">
            <thead
                className="bg-blue-600 text-white sticky -top-2">
                <tr>
                    <th></th>
                    <th>
                        <div className="flex items-center">
                            <span>
                                {sortStudent === 'nd' && <IoMdArrowDropup width={40} />}
                                {sortStudent === 'na' && <IoMdArrowDropdown width={40} />}
                            </span>
                            Name
                        </div>
                    </th>
                    <th>
                        <div className="flex items-center">
                            <span>
                                {sortStudent === 'rnd' && <IoMdArrowDropup width={40} />}
                                {sortStudent === 'rna' && <IoMdArrowDropdown width={40} />}
                            </span>
                            Roll No
                        </div>
                    </th>
                    <th>
                        <div className="flex items-center">
                            <span>
                                {sortStudent === 'fd' && <IoMdArrowDropup width={40} />}
                                {sortStudent === 'fa' && <IoMdArrowDropdown width={40} />}
                            </span>
                            Fees
                        </div>
                    </th>
                    <th>Status</th>
                    <th className="text-end pr-10">Actions</th>
                </tr>
            </thead>

            <tbody className="overflow-y-scroll w-full">

                {!showStudentData.length && <tr className="text-center text-red-400">
                    <td colSpan={6}>No Matching Records...</td>
                </tr>}

                {
                    showStudentData.slice(pageno * pageview, (pageno + 1) * pageview).map(s => {
                        return <tr className="even:bg-gray-100 odd:bg-white border" key={s.rollno}>

                            <td><input type="checkbox" name="" id="" /></td>
                            <td
                                className="cursor-pointer"
                                onClick={() => {
                                    dispatch(viewStudent(s.rollno))
                                }}>
                                {s.name}
                            </td>

                            <td>{s.rollno}</td>

                            <td>Rs {s.fees}/-</td>

                            <td>{s.status}</td>

                            <td className="flex gap-3 items-center flex-row-reverse">

                                <button
                                    onClick={() => dispatch(editHandler(s.rollno))}
                                    className="active:scale-90 bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 md:py-1 md:px-2 rounded flex items-center">
                                    <BiEdit className="md:mr-2" />
                                    <span
                                        className="hidden md:block">
                                        Edit
                                    </span>
                                </button>


                                {s.status === 'Unpaid' &&
                                    <button
                                        onClick={() => dispatch(sendInvoice(s.rollno))}
                                        className="active:scale-90 inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold p-1 md:py-1 md:px-2 rounded shadow-md">
                                        <LiaFileInvoiceDollarSolid />
                                        <span
                                            className="hidden md:block">
                                            Send Invoice
                                        </span>
                                    </button>
                                }

                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default TableComponent;