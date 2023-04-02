"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useForm } from "react-hook-form";

const containerStyle = {
    width: "100%",
    height: "800px",
};

const center = {
    lat: 37.506089,
    lng: -121.950789,
};

type FormData = {
    ciName: string,
    ciEmail: string,
    ciAddress01: string,
    ciAddress02: string,
    ciCity: string,
    ciPhone: string,
    ciUSState: string,
    ciZip: string,
    slCompany: string,
    slAddress01: string,
    slAddress02: string,
    slCity: string,
    slUSState: string,
    slZip: string,
    slPointContact: string,
    slPointContactNumber: string,
    slAdditionalComment: string,
};

const Content = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyB-Og1uzNQZVJ6Onne-56491DlQ1IMlovY",
    });
    const renderMap = () => {
        return isLoaded ? (
            <GoogleMap mapContainerStyle={containerStyle} zoom={14} center={center}>
                <Marker
                    position={{
                        lat: 37.506089,
                        lng: -121.950789,
                    }}
                />
            </GoogleMap>
        ) : (
            <></>
        );
    };
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitLoading, setIsSubmitLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const onSubmit = async (data: FormData) => {
        setIsSubmitLoading(true);
        const toSubmit = {
            email: "jepoyyy0225@gmail.com",
            subject: "Service Request Form",
            message: `<p>Someone submitted a service request form in your website https://fremontsigncompany.com/contact</p>
            <p><b>Customer Information</b></p>
            <p>Name: <b>${data.ciName}</b></p>
            <p>Email: <b>${data.ciEmail}</b></p>
            <p>Customer Address 01: <b>${data.ciAddress01}</b></p>
            <p>Customer Address 02: <b>${data.ciAddress02}</b></p>
            <p>City: <b>${data.ciCity}</b></p>
            <p>US States: <b>${data.ciUSState}</b></p>
            <p>Zip: <b>${data.ciZip}</b></p>
            <p>Phone: <b>${data.ciPhone}</b></p>
            <p><b>Service Location</b></p>
            <p>Company: <b>${data.slCompany}</b></p>
            <p>Customer Address 01: <b>${data.slAddress01}</b></p>
            <p>Customer Address 02: <b>${data.slAddress02}</b></p>
            <p>City: <b>${data.slCity}</b></p>
            <p>US States: <b>${data.slUSState}</b></p>
            <p>Zip: <b>${data.slZip}</b></p>
            <p>Point of Contact: <b>${data.slPointContact}</b></p>
            <p>Point of Contact Number: <b>${data.slPointContactNumber}</b></p>
            <p>Additional Comments: <b>${data.slAdditionalComment}</b></p>`
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
        if (res.success) {
            setIsSuccess(true);
            setErrorMessage("");
            reset();
            alert("Form was submitted!")
        } else {
            setErrorMessage("Something went wrong")
        }
        setIsSubmitLoading(false);
    };

    return (
        <div className="py-20 px-6 xl:px-80">
            <div className="flex flex-col xl:flex-row gap-12">
                <div>
                    <p className="text-gray-300 italic">Do not hesitate to contact us anytime.</p>
                    <h4 className="font-bold text-2xl mt-6">CALL US!</h4>
                    <h4 className="text-2xl italic mt-6">Reach out. Tell us how we can help.</h4>
                    <p className="mt-6">Our service pros are here and ready to discuss your specific branding challenges, work with you on estimates and provide whatever information you may need. Just give us a call, email or fill out the brief form below and well get right back to you.</p>
                </div>
                <div>
                    <p className="text-gray-300 italic">Fremont Sign Company Headquarters</p>
                    <p className="font-bold mt-6">GENERAL</p>
                    <p className="mt-6">Fremont Sign Company</p>
                    <p>44279 Fremont Blvd. Unit P</p>
                    <p>Fremont, CA 94538</p>
                    <p>510-573-3162</p>
                    <p className="font-bold my-6">EMAIL</p>
                    <Link href="mailto:fremontsigncompany@gmail.com" className="text-giants-orange hover:text-gray-500">fremontsigncompany@gmail.com</Link>
                </div>
            </div>
            <div className="mt-32">{renderMap()}</div>
            <div className="mt-32">
                {!isSuccess && errorMessage ? <p className="text-red-500 mt-4 mb-4">{errorMessage}</p> : null}
                {Object.keys(errors).length > 0 ? <p className="text-red-500 mt-4 mb-4">Some required fields are empty</p> : null}
                <h3 className="text-2xl">Service Request Form</h3>
                <p className="text-gray-300">Fields marked with an * are required</p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <p className="text-giants-orange italic">Customer Information</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Name<span className="text-red-500">*</span></label>
                            <input type="text" {...register("ciName", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Email<span className="text-red-500">*</span></label>
                            <input {...register("ciEmail", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" type="email" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Customer Address 01<span className="text-red-500">*</span></label>
                            <input type="text" {...register("ciAddress01", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Customer Address 02</label>
                            <input {...register("ciAddress02")} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" type="text" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">City<span className="text-red-500">*</span></label>
                            <input type="text" {...register("ciCity", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">US States<span className="text-red-500">*</span></label>
                            <input {...register("ciUSState", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" type="text" disabled={isSubmitLoading} />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Zip<span className="text-red-500">*</span></label>
                            <input {...register("ciZip", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" type="text" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Phone<span className="text-red-500">*</span></label>
                            <input type="text" {...register("ciPhone", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <p className="text-giants-orange italic mt-12">Service Location</p>
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Company<span className="text-red-500">*</span></label>
                            <input type="text" {...register("slCompany", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Customer Address 01<span className="text-red-500">*</span></label>
                            <input type="text" {...register("slAddress01", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Customer Address 02</label>
                            <input {...register("slAddress02")} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" type="text" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">City<span className="text-red-500">*</span></label>
                            <input type="text" {...register("slCity", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">US States<span className="text-red-500">*</span></label>
                            <input {...register("slUSState", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" type="text" disabled={isSubmitLoading} />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Zip<span className="text-red-500">*</span></label>
                            <input {...register("slZip", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" type="text" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Point of Contact<span className="text-red-500">*</span></label>
                            <input type="text" {...register("slPointContact", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Point of Contact Number<span className="text-red-500">*</span></label>
                            <input type="text" {...register("slPointContactNumber", { required: true })} className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading} />
                        </div>
                    </div>
                    <hr className="mt-8" />
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Additional Comments</label>
                            <textarea rows={4} {...register("slAdditionalComment")} className="w-full bg-gray-100 p-2 mt-4 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading}></textarea>
                        </div>
                    </div>
                    <button className="shadow-lg bg-giants-orange text-white px-6 py-2 hover:bg-gray-900 mt-6 disabled:opacity-80 disabled:cursor-progress">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Content