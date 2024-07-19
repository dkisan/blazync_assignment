import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logIn } from "../store/studentslice"

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const credential = {
    email: 'admin',
    password: 'admin123'
  }

  const loginHandler = (e) => {
    e.preventDefault()
    if (!emailRef.current.value) emailRef.current.focus()
    else if (!passwordRef.current.value) passwordRef.current.focus()
    else if (emailRef.current.value !== credential.email || passwordRef.current.value !== credential.password) alert('Wrong Credentials')
    else if (emailRef.current.value === credential.email || passwordRef.current.value === credential.password) {
      dispatch(logIn())
      navigate('/dashboard')
    }
  }

  return (
    <div
      className="w-full h-svh flex justify-center items-center bg-gradient-to-tr from-slate-500 to-indigo-400">
      <form
        onSubmit={loginHandler}
        className="w-[60vw] md:w-[40vw] lg:w-[20vw]  p-6 bg-white shadow-md rounded flex flex-col gap-2">

        <label
          className="font-bold" htmlFor="un">
          Email
        </label>

        <input
          ref={emailRef}
          className="shadow border py-1 px-2 focus:outline-none" type="text" name="" id="un" />

        <label
          className="font-bold" htmlFor="pw">
          Password
        </label>

        <input
          ref={passwordRef}
          className="shadow border py-1 px-2 focus:outline-none" type="password" name="" id="pw" />

        <button type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 w-max rounded">
          Log In
        </button>

      </form>
    </div>

  )
}
export default Login;