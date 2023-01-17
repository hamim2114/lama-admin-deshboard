import { useContext, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import "./login.scss"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setError(false)
      const user = userCredential.user;
      dispatch({type:"LOGIN", payload:user})
      navigate('/')
    })
    .catch((error) => {
      setError(true)
    });

  }
  return (
    <div className=" h-screen flex items-center justify-center bg-gray-300">
      <form className="flex flex-col gap-2" onSubmit={handleLogin}>
        <input onChange={ e => setEmail(e.target.value)} className="border w-[30rem] py-2 pl-2 " type="email"  placeholder="email"/>
        <input onChange={ e => setPassword(e.target.value)} className="border w-[30rem] py-2 pl-2 " type="password" placeholder="passsword"/>
        <button className=" bg-blue-700 p-2 text-white px-6" type="submit">Login</button>
        { error && <span className=" text-red-700 text-center">wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login