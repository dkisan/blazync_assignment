import { useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "./TableComponent";
import UpdateComponent from "./UpdateComponent";
import PaginationComponent from "./PaginationComponent";
import FilterComponent from "./FilterComponent";
import ViewComponent from "./ViewComponent.jsx";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/studentslice.js";
import { BiLogOut } from "react-icons/bi";


const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const showStudentData = useSelector(state => state.student.student)

    const menu = useSelector(state => state.student.menu)
    const update = useSelector(state => state.student.update)
    const view = useSelector(state => state.student.view)
    const pageview = useSelector(state => state.student.pageview)
    const isLogin = useSelector(state => state.student.isLogin)

    const pagination = []

    useEffect(() => {
        if (!isLogin) navigate('/')
    })

    const maxPage = Math.ceil(showStudentData.length / pageview)

    for (let i = 1; i <= maxPage; i++) {
        pagination.push(i)
    }

    const menuHandler = () => {
        setMenu((prev) => !prev)
    }


    return (
        <div className="flex w-full h-screen ">

            {/* View Component  */}
            {view && <ViewComponent />}

            {/* Sidebar */}
            <div
                className="w-1/12 md:flex justify-between md:flex-col items-center hidden bg-gradient-to-tr from-blue-800 to-blue-200 text-white font-semibold">
                <div
                    className="flex justify-center items-center mt-2 w-full text-center bg-red-800 p-2">
                    <MdDashboard />
                    <span
                        className="text-sm">
                        Dashboard
                    </span>
                </div>


                <button
                    class="bg-blue-500 w-full hover:bg-blue-700 inline-flex items-center gap-1 active:scale-90 text-white font-bold py-2 px-4 rounded shadow-md mb-4"
                    onClick={() => {
                        dispatch(logOut())
                    }}>
                    <BiLogOut /> Logout
                </button>


            </div>

            {/* Main Content Area */}
            <div
                className="w-full overflow-y-scroll bg-gray-100 p-2">

                <div
                    className="flex items-center">

                    
                    <h1
                        className="text-center mx-auto  shadow-md mb-2 w-full">
                        Student Details
                    </h1>

                    <button
                        class="bg-blue-500 w-max md:hidden  hover:bg-blue-700 inline-flex items-center gap-1 active:scale-90 text-white font-bold py-1 px-4 rounded shadow-md mb-4"
                        onClick={() => {
                            dispatch(logOut())
                        }}>
                        <BiLogOut /> Logout
                    </button>

                </div>

                <FilterComponent />

                <TableComponent />

                <PaginationComponent
                    pagination={pagination}
                />


            </div>

            {/* Edit Section */}
            {update && <UpdateComponent />}

        </div>
    )
}


export default Dashboard;

