import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import { FormValues, FormValuesAccount } from '../../types/Product'
import axios from 'axios'
type Props = {}

const LogupPage = (props: Props) => {
 const {register,handleSubmit,formState:{errors}} = useForm<FormValuesAccount>()
 const onSubmit:SubmitHandler<FormValuesAccount> = async (data)=>{
    console.log(data)
    try {
        const users = await axios.post('http://localhost:3000/signup',data)
        alert("Đăng ký thành công")
    } catch (error) {
        console.log(error)
    }
 }
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
      Flowbite    
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create and account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" name="username" id="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" 
            {...register("username",{required:true, minLength:8})}
             />
             {errors.username && errors.username.type === "required" && <p className='text-red-500'>Không được để trống </p>}
             {errors.username && errors.username.type === "minLength" && <p className='text-red-500'>Ký tự không nhỏ hơn 8</p>}
          </div>
          <div>
            <label htmlFor="usename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            {...register("email",{required:true, minLength:10})} />
            {errors.email && errors.email.type === "required" && <p className='text-red-500'>Không được để trống</p>}
            {errors.email && errors.email.type === "minLength" && <p className='text-red-500'>Ký tự không nhỏ hơn 10</p>}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("password",{required:true,minLength: 8,maxLength :32})} />
            {errors.password && errors.password.type === "required" && <p className='text-red-500'>Không được để trống</p>}
            {errors.password && errors.password.type === "minLength" && <p className='text-red-500'>Ký tự không được dưới 8</p>}
            {errors.password && errors.password.type === "maxLength" && <p className='text-red-500'>Ký tự không được nhiều hơn 32</p>}
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
            </div>
          </div>
          <button type="submit" className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default LogupPage