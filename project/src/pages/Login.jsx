const Login = () => {
  return (
    <div style={{  marginTop:"40px",   width:"400px", paddingTop:"20px",paddingBottom:"30px",  margin:"auto", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}  className="w-8 border-4 border-red-500">
      <div className="max-w-md w-full   bg-white rounded-lg shadow-md p-8  ">
        <h1 style={{textAlign:"center", marginBottom:"20px"}} className="text-2xl  font-semibold mb-8">Create Your Account</h1>
        <form style={{padding:"30px 50px"}}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <br />
            <input  style={{border:"2px solid black", borderRadius:"4px"}}type="text" id="name" name="name" className="border border-gray-300 rounded-md shadow-sm  px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <br />
            <input style={{border:"2px solid black", borderRadius:"4px"}} type="email" id="email" name="email" className="border border-gray-300 rounded-md shadow-sm  px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <br />
            <input style={{border:"2px solid black", borderRadius:"4px"}} type="password" id="password" name="password" className="border border-gray-300 rounded-md shadow-sm  px-4 py-2 w-full" />
          </div>
          <button style={{marginLeft:"50px", marginTop:"30px"}} type="submit" className="bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Create Account</button>
        </form>
        <p style={{textAlign:"center", marginBottom:"20px"}} className="mt-4 text-gray-600 text-center">Have an account? <a href="#" className="text-blue-500">LOGIN</a></p>
      </div>
    </div>
  );
}

export default Login;
