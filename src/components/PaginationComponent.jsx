import { useDispatch, useSelector } from "react-redux"
import { paginationHandler } from "../store/studentslice"

const PaginationComponent = (props) => {
    
    const dispatch = useDispatch()
    const pageno = useSelector(state => state.student.pageno)
    const { pagination } = props

    return (
        <div className="flex justify-end">
            <ul className="flex justify-end gap-2">
                {pagination.map(p => {
                    return <li
                        onClick={() => dispatch(paginationHandler(p))}
                        key={p}
                        className={`${p === pageno + 1 ? 'font-bold text-blue-700' : ''} cursor-pointer`}>{p}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default PaginationComponent;