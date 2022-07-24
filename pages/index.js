import Head from "next/head";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from 'next/link';


export default function login() {
  return (
    <div className="items-center justify-center block h-screen p-4 bg-[url('/background_ww.jpg')] md:flex">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="max-w-screen-lg">
        <div className="flex flex-col bg-white rounded-2xl shadow-2xl w-full max-w-4xl md:flex-row">
          <div className="w-full p-3">
            <div className="w-full py-5 text-center">
              <h2 className="text-2xl font-bold text-center text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="flex flex-col items-center">
                <form className="w-full" action="/api/checklogin" method="POST">
                  <div className="bg-gray-100 p-2 flex items-center m-3 rounded-md">
                    <FaRegEnvelope className="text-gray-400 m-2"/>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 w-4/5 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 p-2 flex items-center m-3 rounded-md">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 w-4/5 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="block my-3 sm:flex sm:justify-between">
                    <Link href="/register">
                    <a className="block text-left mx-2 p-2 text-xs">
                      ลงทะเบียน(Register)
                    </a>
                    </Link>
                    <Link href="#">
                    <a className="block text-left mx-2 p-2 text-xs">
                      Forget Password?
                    </a>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
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
            {/* <div className="border-2 w-10 border-white inline-block mb-2"></div> */}
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
