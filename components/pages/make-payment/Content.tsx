"use client"
import Image from 'next/image'
import React from 'react'
import { useForm } from "react-hook-form";

const Content = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="flex flex-row justify-center gap-12 py-20 px-6 xl:px-80">
            <div className="w-96">
                <form onSubmit={handleSubmit(onSubmit)} className="mb-24 p-4 border border-gray-500">
                    <h3 className="text-2xl">Payment Form</h3>
                    <p className="text-gray-500 mt-6">Enter the payment details and submit</p>
                    <input {...register("reference", { required: true })} type="text" className="w-full bg-gray-100 p-2 mt-4" placeholder="Payment Reference" />
                    <input {...register("amount", { required: true })} type="number" className="w-full bg-gray-100 p-2 mt-4" placeholder="Amount to Pay" />
                    <button className="w-full shadow-lg bg-black text-white px-6 py-2 hover:bg-gray-900 mt-4">Make Payment</button>
                </form>
            </div>
        </div>
    )
}

export default Content