import React from 'react';


export function Login() {
        const [formData, setFormData] = useState({
          email: "",
          password: "",
        })
      
        const handleChange = (e) => {
          const { name, value } = e.target;
      
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form values:", formData);
          // send to API or process formData here
        }

    return (
        <>
            <div className="h-scren"
                style={{

                    height: '100vh',
                    width: '100%',
                    backgroundImage: 'url(/src/img/Login1.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                <div class="grid grid-cols-12 gap-4 h-full"> {/* DIV que divide tudo */}

                    <div className=" col-span-3">

                    </div>
                    <div className="col-span-6"> {/* DIV central */}
                        <div class=" grid grid-rows-12 gap-4 h-full">{/* DIV que controla o centro */}
                            <div className="row-span-3">
                                <div className=" flex justify-center items-center h-full">
                                <h1 className="mt-10 text-3xl font-bold">Vamos crescer juntos, não é?</h1>
                                </div>
                            </div>

                            <div className="ml-15  mr-18 row-span-3 px-8 glass"> {/* Aqui fica os inputs */}
                                <div>

                                </div>
                                <form className="flex mt-8 flex-col items-center space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className=" mt-5 w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </form>
                            </div>
                            <div className="mr-30 ml-30 mt-5 mb-4 row-span-2 flex justify-center items-center"> {/* Aqui fica o botão Login */}
                                <button className="btn btn-info btn-xl btn-outline w-full h-full" >Login</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">

                    </div>
                </div>
            </div>
        </>
    );
}