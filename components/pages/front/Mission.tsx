"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

type FormData = {
    name: string,
    email: string,
    subject: string,
    file: any,
    message: string,
}

const Mission = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitLoading, setIsSubmitLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const fileToBase64 = (file: any) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
        });
      };
    const onSubmit = async (data: FormData) => {
        setIsSubmitLoading(true); 
        fileToBase64(data.file[0]).then(async (result) => {
            const toSubmit = {
                email: "jepoyyy0225@gmail.com",
                subject: "Free Consultation & Quote",
                message: `<p>Someone submitted a  Free Consultation & Quote in your website https://fremontsigncompany.com</p><p>Name: <b>${data.name}</b></p><p>Email: <b>${data.email}</b></p><p>Subject: <b>${data.subject}</b></p><p>Message: <b>${data.message}</b></p>`,
                file: result,
            }
            const submit = await fetch('/api/mailer', {
                method: "POST",
                mode: "cors",
                cache: "no-cache", 
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: "follow",
                referrer: "no-referrer",
                body: JSON.stringify(toSubmit)
            })
            const res = await submit.json();
            if(res.success) {
                setIsSuccess(true);
                setErrorMessage("");
                reset();
                alert("Form was submitted!")
            } else {
                setErrorMessage("Something went wrong")
            }
            setIsSubmitLoading(false);
        });
    };
    return (
        <div className="py-24 px-8 xl:px-80">
            <div className="flex flex-col xl:flex-row gap-8">
                <div className="flex-none xl:w-[300px]">
                    <div className="bg-white shadow-lg p-6 w-full">
                        <h3 className="text-xl text-giants-orange">
                            GET YOUR FREE <span className="text-oxford-blue">CONSULTATION &<br/>QUOTE</span>
                        </h3>
                        {!isSuccess && errorMessage ? <p className="text-red-500 mb-4">{errorMessage}</p> : null}
                        {Object.keys(errors).length > 0 ? <p className="text-red-500 mb-4">Some required fields are empty</p> : null}
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                            <input {...register("name", { required: true })} type="text" className="w-full bg-gray-100 p-2 disabled:opacity-80 disabled:cursor-progress" placeholder="Name*" disabled={isSubmitLoading} />
                            <input {...register("email", { required: true })} type="email" className="w-full bg-gray-100 p-2 mt-4 disabled:opacity-80 disabled:cursor-progress" placeholder="Email*" disabled={isSubmitLoading} />
                            <input {...register("subject", { required: true })} type="text" className="w-full bg-gray-100 p-2 mt-4 disabled:opacity-80 disabled:cursor-progress" placeholder="Subject*" disabled={isSubmitLoading} />
                            <input {...register("file", { required: true })} type="file" className="mt-4 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                            <textarea {...register("message", { required: true })} rows={4} className="w-full bg-gray-100 p-2 mt-4 disabled:opacity-80 disabled:cursor-progress" placeholder="Message*" disabled={isSubmitLoading}></textarea>
                            <button className="w-full shadow-lg bg-black text-white px-6 py-2 hover:bg-gray-900 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading}>Send</button>
                        </form>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-4xl text-giants-orange">
                        WE ARE EXPERT IN<br />
                        <span className="text-oxford-blue">DIFFERENT SOLUTIONS</span>
                    </h3>
                    <div className="flex flex-col xl:flex-row gap-8 mt-6">
                        <div className="flex flex-col gap-6 flex-1">
                            <Image
                                src="/signage-1.png"
                                width="512"
                                height="1080"
                                alt="Message"
                            />
                            <h3 className="text-giants-orange text-2xl">Manufacturing</h3>
                            <p className="text-md">Our strength and value comes from many decades of experience, combined with a commitment to continually improve our manufacturing processes.</p>
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                            <Image
                                src="/signage-2.png"
                                width="512"
                                height="1080"
                                alt="Message"
                            />
                            <h3 className="text-giants-orange text-2xl">Project Management</h3>
                            <p className="text-md">Extensive, up-front planning is the key ingredient to managing large signage conversion projects. The customer’s wants, needs and expectations are always kept as our top priority.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 h-[1px] w-full bg-gray-200 px-72 hidden lg:block"></div>
            <div className="mt-12">
                <h3 className="font-bold text-4xl text-giants-orange text-center">
                    MISSION STATEMENT <span className="text-oxford-blue">STATEMENT</span>
                </h3>
                <p className="mt-6 text-center">To become the “Industry Leader” of custom signage encompassing design, fabrication, installation, and service, by establishing a cohesive organization that is committed to working together, dedicated to providing excellent service to its customers, and by recognizing that our relationship with our employees is the key to our success.</p>
            </div>
        </div>
    )
}

export default Mission