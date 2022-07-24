import React from 'react'
import Head from "next/head";
import { FaRegEnvelope } from "react-icons/fa";
import {
  MdAddAlert,
  MdLockOutline,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FcPrivacy } from "react-icons/fc";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function regisForm() {

  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  return (
    <div className="items-center justify-center block h-screen p-4 bg-[url('/background_ww.jpg')] md:flex">
      <Head>
        <title>Register Page</title>
      </Head>
      <div className="max-w-screen-lg">
        <div className="flex flex-col bg-white rounded-2xl shadow-2xl w-full max-w-4xl md:flex-row">
          <div className="w-full p-3">
            <div className="w-full py-3 text-center">
              <h2 className="text-2xl font-bold text-center text-green-500 mb-4">
                ลงทะเบียน(Register)
              </h2>
              <div className="flex flex-col items-center">
              <form className="w-full" action="/api/regis" method = "POST"
                >
                  <div className="relative w-full">
                    <HiOutlineMail className="absolute bottom-2.5 left-2 text-center text-gray-400"/>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company"
                      className={`bg-gray-200 w-full block text-sm outline-none rounded-md py-2 pl-10 ${errors.company? 'border border-red-500' : null}`}
                      {...register("company", { required: "ลงชื่อบริษัทด้วย" })}
                    />
                    <BsCheckCircle className="hidden absolute top-3 right-7 text-green-700"/>
                    <BsExclamationCircle className="hidden absolute top-3 right-7 text-red-500"/>
                  </div>
                  <p className="text-left text-red-500 text-sm">{errors.company?.message}</p>
                  <div className="relative">
                      <MdOutlineAccountCircle className="absolute bottom-2.5 left-2 text-center text-gray-400"/>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="First Name/ชื่อLast Name/นามสกุล"
                        className={`bg-gray-200 w-full block text-sm outline-none rounded-md py-2 pl-10 mt-2 ${errors.name? 'border border-red-500' : null}`}
                        {...register("name", { required: "ลงชื่อ/นามสกุล ผู้ใช้งานด้วย", maxLength: 35 })}
                      />
                      <BsCheckCircle className="hidden absolute top-3 right-7 text-green-700"/>
                      <BsExclamationCircle className="hidden absolute top-3 right-7 text-red-500"/>
                    </div>  
                    <p className="text-left text-red-500 text-sm">{errors.name?.message}</p>
                   <div className="relative">
                    <HiOutlineMail className="absolute bottom-2.5 left-2 text-center text-gray-400"/>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className={`bg-gray-200 w-full block text-sm outline-none rounded-md py-2 pl-10 mt-2 ${errors.email? 'border border-red-500' : null}`}
                      {...register("email", { required: "Email Address is required"})}
                    />
                    <BsCheckCircle className="hidden absolute top-3 right-7 text-green-700"/>
                    <BsExclamationCircle className="hidden absolute top-3 right-7 text-red-500"/>
                    </div>
                    <p className="text-left text-red-500 text-sm">{errors.email?.message}</p>
                  <div className="relative">
                    <MdLockOutline className="absolute bottom-2.5 left-2 text-center text-gray-400" />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className={`bg-gray-200 w-full block text-sm outline-none rounded-md py-2 pl-10 mt-2 ${errors.password? 'border border-red-500' : null}`}
                      {...register("password", { 
                                                required: {value: true, message:"ไม่ได้ใส่ Password "}, 
                                                minLength: {value:6, message:"Password ต้องมีจำนวนมากกว่า 6 ตัวอักษร"}
                                                })}
                    />
                    <BsCheckCircle className="hidden absolute top-3 right-7 text-green-700"/>
                    <BsExclamationCircle className={`hidden absolute top-3 right-7 text-red-500" ${errors.password? 'invisible' : null}`}/>
                    </div>
                    <p className="text-left text-red-500 text-sm">{errors.password?.message}</p>
                  <div className="relative">
                    <FcPrivacy className="absolute bottom-2.5 left-2 text-center text-gray-400"/>
                    <input
                      type="password"
                      id="password1"
                      name="password1"
                      placeholder="Confirm Password"
                      className={`bg-gray-200 w-full block text-sm outline-none rounded-md py-2 pl-10 mt-2 ${errors.password1? 'border border-red-500' : null}`}
                      {...register("password1", { required: "Password ต้องตรงถูกต้องและตรงกัน", minLength: 6})}
                    />
                    <BsCheckCircle className="hidden absolute top-3 right-7 text-green-700"/>
                    <BsExclamationCircle className="hidden absolute top-3 right-7 text-red-500"/>
                    </div>
                    <p className="text-left text-red-500 text-sm">{errors.password1?.message}</p>
                  <button
                    type="submit"
                    className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 mt-3 cursor-pointer font-semibold hover:bg-green-500 hover:text-white"
                  >
                    Sing In
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-blue-600 text-white rounded-b-2xl py-10 px-2 md:rounded-br-2xl md:rounded-tr-2xl md:rounded-bl-none">
            <h2 className="text-xl text-center font-bold mb-2">
              Wire & Wireless Co.,Ltd.
            </h2>
            <p className="my-3 text-center text-xs">
              อาคาร อโยธยาทาวเวอร์ ชั้น 26 เลขที่ 240/64-67 ถนน รัชดาภิเษก
              แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}