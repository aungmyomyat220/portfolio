"use client";
import React, { useState } from "react";
import Love from "../../../../public/image/i-love-you.png";
import Rocket from "../../../../public/image/startup.png";
import Image from "next/image";
import { sendMailHook } from '../../../../hook/sendMailHook'
import { RocketIcon } from "@radix-ui/react-icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const Page = ({ theme }) => {
  const [noti, showNoti] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailData, setEmailData] = useState({
    email: "",
    name: "",
    content: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async() => {
    if (emailData.email && emailData.name && emailData.content) {
      setLoading(true)
      const response = await sendMailHook(emailData)
      if(response.statusCode === 200){
        showNoti(true)
        setLoading(false)
        setTimeout(() => {
          showNoti(false);
        }, 4000);
        setEmailData({
          email: "",
          name: "",
          content: "",
        })
      }
    }
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center relative sm:pb-0 pb-24 mt-40 sm:mt-0 ${
        theme === "dark" ? "text-white" : "text-cyan-950"
      }`}
      id="contact"
    >
      {
          noti &&
          <div className={'z-30 absolute top-0 right-0 mt-5 mr-5 w-80 animate-fade-left animate-once animate-duration-[800ms] animate-delay-300'}>
            <Alert>
              <RocketIcon className="h-4 w-4"/>
              <AlertTitle>Email Sent!</AlertTitle>
              <AlertDescription>
                We will contact you.
              </AlertDescription>
            </Alert>
          </div>
      }
      <div
          className={"w-full h-screen max-w-6xl flex justify-center items-center"}
      >
        <div className={"sm:grid sm:grid-cols-2"}>
          <div className={"flex flex-col text-left justify-center mx-7"}>
            <span className={"text-5xl mb-3"}>Let&apos;s Chat.</span>
            <span className={"text-5xl mb-5"}>Tell me about your project</span>
            <span className={"flex"}>
              <span className={"text-orange-400"}>
                Let&apos;s create something together
              </span>
              <Image
                src={Love}
                alt="Love"
                width={0}
                height={0}
                className="w-5 h-5 ml-2"
              />
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30558.752418851513!2d96.10597783165991!3d16.784432563870954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb0dddf12fa9%3A0x2176e236e4fa957d!2sAhlone%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1708319503306!5m2!1sen!2smm"
              width="450" height="260" loading="lazy" className={'mt-5 rounded-lg'}></iframe>
          </div>
          <div className={"flex justify-center items-center mt-20"}>
            <div
              className={`flex flex-col p-7 w-80 h-96 ${
                theme === "dark"
                  ? "bg-white text-cyan-950"
                  : "bg-cyan-950 text-white"
              } rounded-xl`}
            >
              <div className={"flex justify-start mb-5"}>
                <span className={"text-xl justify-start"}>
                  Send us a message
                </span>
                <Image src={Rocket} alt="email" width={30} height={25} />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={emailData.email}
                  className={
                    "outline outline-0 border border-black py-2 px-3 rounded-md text-sm mb-5 w-full focus:border-2 focus:border-blue-500"
                  }
                  placeholder={"Email Address"}
                />
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={emailData.name}
                  className={
                    "outline outline-0 border border-black py-2 px-3 rounded-md text-sm mb-5 w-full focus:border-2 focus:border-blue-500"
                  }
                  placeholder={"Your name"}
                />
                <textarea
                  name="content"
                  rows="4"
                  onChange={handleChange}
                  value={emailData.content}
                  className={
                    "outline outline-0 w-64 border border-black rounded-md p-2 resize-none placeholder:text-sm focus:border-2 focus:border-blue-500"
                  }
                  placeholder={"Tell us more about your project"}
                ></textarea>

                {
                  loading ?
                      <button className={"mt-5 bg-blue-600 rounded-lg px-3 py-1"}>
                          <div>
                            <div role="status" className={'px-6 py-1 rounded-lg'}>
                              <svg aria-hidden="true"
                                   className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                   viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                              </svg>
                          </div>
                        </div>
                      </button> :
                      <button id="send-btn" className={"mt-5"} onClick={handleClick}>
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                  fill="currentColor"
                                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <span>Send</span>
                      </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
