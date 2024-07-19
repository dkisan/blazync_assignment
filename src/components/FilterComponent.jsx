import { useDispatch, useSelector } from "react-redux";
import { searchHandler, setPerPage, setStatus, sortStudent } from "../store/studentslice";

const FilterComponent = () => {
    const searchName = useSelector(state => state.student.searchName)
    const pageview = useSelector(state => state.student.pageview)
    const sortStatus = useSelector(state => state.student.sortStatus)

    const dispatch = useDispatch()

    return (

        <div className="flex justify-between flex-wrap gap-2 sm:gap-0 text-xs sm:text-sm md:text-base">
            <div className="text-xs">
                <h1
                    className="text-center">
                    Search Students
                </h1>
                <input type="text" name="" onChange={(e) => dispatch(searchHandler(e.target.value))} value={searchName} className="px-2 shadow-md m-1 rounded focus:outline-none" id="" />
            </div>
            <div className="text-xs">

                <div className="mt-2">
                    <label htmlFor="rollno">Sort By :  </label>
                    <select
                        className="bg-white border focus:outline-none border-gray-400 hover:border-gray-500 rounded shadow" id="roll-number-filter"
                        onChange={(e) => dispatch(sortStudent(e.target.value))}>

                        <option value="rna">RollNo-Ascending</option>
                        <option value="rnd">RollNo-Descending</option>
                        <option value="fa">Fees-Low to High</option>
                        <option value="fd">Fees-High to Low</option>
                        <option value="na">Name-Ascending</option>
                        <option value="nd">Name-Descending</option>

                    </select>
                </div>

                <div className="mt-2 mb-1">
                    <label htmlFor="rollno">Status :  </label>
                    <select
                        value={sortStatus}
                        className="bg-white border focus:outline-none border-gray-400 hover:border-gray-500 rounded shadow" id="roll-number-filter"
                        onChange={(e) => {
                            dispatch(setStatus(e.target.value))
                        }}>

                        <option value="all">All</option>
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>

                    </select>
                </div>

            </div>
            <div className="flex items-center gap-1 text-xs mb-1">

                <label htmlFor="perpage">Records per page :</label>
                <select name="" id="perpage"
                    value={pageview}
                    onChange={(e) => {
                        dispatch(setPerPage(e.target.value))
                    }}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>

                </select>
            </div>
        </div>
    )
}

export default FilterComponent;