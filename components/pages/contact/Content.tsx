"use client"
import Image from 'next/image'
import React from 'react'
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
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                <h3 className="text-2xl">Service Request Form</h3>
                <p className="text-gray-300">Fields marked with an * are required</p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <p className="text-giants-orange italic">Customer Information</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Name</label>
                            <input type="text" {...register("piName", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Email</label>
                            <input {...register("piEmail", { required: true })} className="w-full bg-gray-100 p-2 mt-2" type="email" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Customer Address 01</label>
                            <input type="text" {...register("piAddress01", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Customer Address 02</label>
                            <input {...register("piAddress02", { required: true })} className="w-full bg-gray-100 p-2 mt-2" type="text" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">City</label>
                            <input type="text" {...register("piCity", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">US States</label>
                            <input {...register("piUSState", { required: true })} className="w-full bg-gray-100 p-2 mt-2" type="text" />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Zip</label>
                            <input {...register("piZip", { required: true })} className="w-full bg-gray-100 p-2 mt-2" type="text" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Phone</label>
                            <input type="text" {...register("piPhone", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                    </div>
                    <p className="text-giants-orange italic mt-12">Service Location</p>
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Company</label>
                            <input type="text" {...register("slCompany", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Customer Address 01</label>
                            <input type="text" {...register("slAddress01", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">Customer Address 02</label>
                            <input {...register("slAddress02", { required: true })} className="w-full bg-gray-100 p-2 mt-2" type="text" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">City</label>
                            <input type="text" {...register("slCity", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                        <div>
                            <label className="text-sm text-gray-500">US States</label>
                            <input {...register("slUSState", { required: true })} className="w-full bg-gray-100 p-2 mt-2" type="text" />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Zip</label>
                            <input {...register("slZip", { required: true })} className="w-full bg-gray-100 p-2 mt-2" type="text" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Point of Contact</label>
                            <input type="text" {...register("slPointContact", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Point of Contact Number</label>
                            <input type="text" {...register("slPointContactNumber", { required: true })} className="w-full bg-gray-100 p-2 mt-2" />
                        </div>
                    </div>
                    <hr className="mt-8" />
                    <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
                        <div>
                            <label className="text-sm text-gray-500">Additional Comments</label>
                            <textarea rows={4} {...register("slAdditionalComment", { required: true })} className="w-full bg-gray-100 p-2 mt-4"></textarea>
                        </div>
                    </div>
                    <button className="shadow-lg bg-giants-orange text-white px-6 py-2 hover:bg-gray-900 mt-6">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Content