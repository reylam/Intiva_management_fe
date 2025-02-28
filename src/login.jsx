import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const loginHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://192.168.161.74:8004/login", {
                email,
                password: pass
            });
            console.log(response);
            localStorage.setItem("token", response.data.data.accessToken);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
            <div className='flex flex-col items-center w-3/4 lg:w-1/3 bg-white shadow-2xl border border-gray-200 rounded-3xl p-8'>
                <img 
                    src="https://media.licdn.com/dms/image/v2/C560BAQHNLQPouoktLA/company-logo_200_200/company-logo_200_200/0/1630657060117?e=2147483647&v=beta&t=2-OIxaZtXUcSPaC-iKB5h3jh5v6gwTE271uhVD-te6Q" 
                    alt="Logo Company" 
                    className='w-16'
                />
                <p className='font-semibold text-lg font-[Poppins]'>Intiva Announcement</p>
                <p className='text-2xl font-light font-[Poppins] mt-2'>Login</p>

                <form onSubmit={loginHandle} className='w-full mt-6 flex flex-col gap-4'>
                    <input 
                        type="email" 
                        className='px-4 py-2 border border-yellow-500 rounded-2xl placeholder:text-yellow-500 focus:outline-none hover:border-yellow-700 hover:shadow-lg transition-all duration-200' 
                        placeholder='Email' 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className='relative'>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className='px-4 py-2 border border-yellow-500 rounded-2xl placeholder:text-yellow-500 focus:outline-none hover:border-yellow-700 hover:shadow-lg transition-all duration-200 w-full' 
                            placeholder='Password' 
                            required
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <span 
                            className='absolute right-3 top-3 cursor-pointer text-yellow-500' 
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </div>

                    <button 
                        type='submit' 
                        className='text-white bg-yellow-400 font-medium rounded-2xl text-sm w-full py-2.5 text-center hover:bg-yellow-700 focus:ring-4 focus:outline-none'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
