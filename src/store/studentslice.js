import { createSlice } from "@reduxjs/toolkit";
import jsPDF from "jspdf";

const student = [
    {
        name: 'Kensley Huynh',
        rollno: 1,
        fees: 4865,
        status: 'Paid'
    },
    {
        name: 'Katie Barajas',
        rollno: 2,
        fees: 1258,
        status: 'Paid'
    },
    {
        name: 'Mikaela Schmitt',
        rollno: 3,
        fees: 98536,
        status: 'Unpaid'
    },
    {
        name: 'Mariah Richard',
        rollno: 4,
        fees: 1457,
        status: 'Unpaid'
    }, {
        name: 'Annie Moyer',
        rollno: 5,
        fees: 5649,
        status: 'Paid'
    }, {
        name: 'Cora Gutierrez',
        rollno: 6,
        fees: 13216,
        status: 'Unpaid'
    }, {
        name: 'Drew Nguyen',
        rollno: 7,
        fees: 13148,
        status: 'Paid'
    }, {
        name: 'Stella Enriquez',
        rollno: 8,
        fees: 6545,
        status: 'Paid'
    }, {
        name: 'John Doe',
        rollno: 9,
        fees: 4821,
        status: 'Paid'
    }, {
        name: 'Treasure Webster',
        rollno: 10,
        fees: 6496,
        status: 'Unpaid'
    }, {
        name: 'Ace Gutierrez',
        rollno: 11,
        fees: 1316,
        status: 'Unpaid'
    }, {
        name: 'Kalel McLean',
        rollno: 12,
        fees: 16549,
        status: 'Unpaid'
    }, {
        name: 'Yousef Rocha',
        rollno: 13,
        fees: 11645,
        status: 'Paid'
    }, {
        name: 'Logan Roman',
        rollno: 14,
        fees: 14564,
        status: 'Paid'
    }, {
        name: 'Dakota Higgins',
        rollno: 15,
        fees: 85923,
        status: 'Unpaid'
    }, {
        name: 'Nadia Kaur',
        rollno: 16,
        fees: 15964,
        status: 'Paid'
    }, {
        name: 'Tru Frank',
        rollno: 17,
        fees: 189987,
        status: 'Unpaid'
    }, {
        name: 'Gwen Peck',
        rollno: 18,
        fees: 16416,
        status: 'Paid'
    }, {
        name: 'Elsie Berg',
        rollno: 19,
        fees: 456496,
        status: 'Unpaid'
    }, {
        name: 'Emmeline Fleming',
        rollno: 20,
        fees: 54613,
        status: 'Unpaid'
    }, {
        name: 'Kamilah Mann',
        rollno: 21,
        fees: 1231,
        status: 'Paid'
    }, {
        name: 'Steven Mendoza',
        rollno: 22,
        fees: 4500,
        status: 'Paid'
    }
]

const data = {
    student: student,
    menu: true,
    update: false,
    searchName: '',
    sortStudent: 'rna',
    sortStatus: 'all',
    pageview: 5,
    pageno: 0,
    isLogin: false,
    view: false,
    studentInfo: {
        name: '',
        rollno: null,
        fees: null,
        status: null
    }
}
const studentSlice = createSlice({
    name: 'student',
    initialState: data,
    reducers: {
        logIn: (state) => {
            state.isLogin = true
        },
        logOut: (state) => {
            state.isLogin = false
        },
        updateData: (state, action) => {
            let updatedStudent = [...state.student]
            let studentIndex = updatedStudent.findIndex((s) => s.rollno === +action.payload.rollno)
            if (studentIndex > -1) {
                updatedStudent[studentIndex] = {
                    name: action.payload.name,
                    rollno: +action.payload.rollno,
                    fees: action.payload.fees,
                    status: action.payload.status,
                }
            } else {
                alert('some error occured')
            }
            let update = false
            return { ...state, update, student: updatedStudent }
        },
        deleteData: (state, action) => {
            let updatedStudent = state.student.filter(s => s.rollno !== action.payload.rollno)
            return { ...state, student: updatedStudent }
        },
        sendInvoice: (state, action) => {
            const data = state.student.filter(s => s.rollno === action.payload)[0]

            const doc = new jsPDF()
            doc.setFont("helvetica");
            doc.setFontSize(18);

            doc.text("INVOICE", 100, 20);

            doc.setLineWidth(0.5)
            doc.setDrawColor(0, 0, 0)
            doc.line(95, 22, 130, 22)

            doc.text(`Name: ${data.name}`, 20, 35);
            doc.text(`Rollno: ${data.rollno}`, 20, 45);

            doc.text("Description", 20, 70);
            doc.text("Amount", 150, 70);
            doc.line(20, 72, 185, 72)

            doc.text("Tuition Fee", 20, 90);
            doc.text(`${data.fees} /-`, 155, 90);

            doc.line(20, 172, 185, 172)
            doc.text("Total Due:", 20, 180);
            doc.text(`Rs. ${data.fees} /-`, 150, 180);
            doc.line(20, 183, 185, 183)

            doc.text("Payment Instructions:", 20, 200);
            doc.text("Please pay the amount due by the due date to avoid late fees.", 30, 210);


            doc.save('invoice.pdf')
        },
        toggleUpdate: (state) => {
            let update = !state.update
            return { ...state, update: update }
        },
        sortStudent: (state, action) => {
            const sortStudent = action.payload;
            const pageno = 0
            let showStudentData;

            switch (sortStudent) {
                case 'rna':
                    showStudentData = [...state.student].sort((a, b) => a.rollno - b.rollno);
                    break;
                case 'rnd':
                    showStudentData = [...state.student].sort((a, b) => b.rollno - a.rollno);
                    break;
                case 'fa':
                    showStudentData = [...state.student].sort((a, b) => a.fees - b.fees);
                    break;
                case 'fd':
                    showStudentData = [...state.student].sort((a, b) => b.fees - a.fees);
                    break;
                case 'na':
                    showStudentData = [...state.student].sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'nd':
                    showStudentData = [...state.student].sort((a, b) => b.name.localeCompare(a.name));
                    break;
                default:
                    showStudentData = student.sort((a, b) => b.rollno - a.rollno);
            }

            return { ...state, pageno, sortStudent, student: showStudentData };
        },
        paginationHandler: (state, action) => {
            let pageno = action.payload - 1
            return { ...state, pageno }
        },
        pageViewHandler: (state, action) => {

        },
        searchHandler: (state, action) => {
            let searchName = action.payload
            return { ...state, searchName }
        },
        editHandler: (state, action) => {
            let studentIndex = state.student.findIndex(s => s.rollno === +action.payload)
            let studentInfo = {
                name: state.student[studentIndex].name,
                rollno: state.student[studentIndex].rollno,
                fees: state.student[studentIndex].fees,
                status: state.student[studentIndex].status,
            }
            let update = true
            return { ...state, update, studentInfo }
        },
        setStatus: (state, action) => {
            state.sortStatus = action.payload
        },
        setPerPage: (state, action) => {
            state.pageview = +action.payload
        },
        viewStudent: (state, action) => {
            let studentIndex = state.student.findIndex(s => s.rollno === +action.payload)
            let studentInfo = {
                name: state.student[studentIndex].name,
                rollno: state.student[studentIndex].rollno,
                fees: state.student[studentIndex].fees,
                status: state.student[studentIndex].status,
            }
            let view = true
            return { ...state, view, studentInfo }
        },
        closeView: (state) => {
            state.view = false
        }

    }
})

export const {
    logIn,
    logOut,
    updateData,
    deleteData,
    sendInvoice,
    toggleUpdate,
    sortStudent,
    paginationHandler,
    pageViewHandler,
    searchHandler,
    editHandler,
    setStatus,
    setPerPage,
    viewStudent,
    closeView
} = studentSlice.actions

export default studentSlice.reducer