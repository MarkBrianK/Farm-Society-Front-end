import React, {useState} from "react"
function Login({onLogin}){

  const [email, setEmail]= useState("")
  const [password, setPassword] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://immense-dawn-24558.herokuapp.com/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }
    return(
        <div>

<div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 class="font-bold text-center text-2xl mb-5"></h1>
    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <form class="px-5 py-7" >
        <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={email} onChange = {(e) => setEmail(e.target.value)}/>
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
        <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={password} onChange = {(e)=> setPassword(e.target.value)} />
        <button onClick={handleSubmit} type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      </form>


      </div>
    </div>

  </div>
</div>
)
}
export default Login
