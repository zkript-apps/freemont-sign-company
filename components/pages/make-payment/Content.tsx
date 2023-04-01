"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

type FormData = {
    reference: string,
    amount: number,
};

const Content = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitLoading, setIsSubmitLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const onSubmit = async (data: FormData) => {
        setIsSubmitLoading(true);
        const toSubmit = {
            email: "jepoyyy0225@gmail.com",
            subject: "Make Payment",
            message: `<p>Someone submitted a payment details in your website https://fremontsigncompany.com/make-payment</p><p>Reference: <b>${data.reference}</b></p><p>Amount: <b>${data.amount}</b></p>`
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
    };
    return (
        <div className="flex flex-row justify-center gap-12 py-20 px-6 xl:px-80">
            <div className="w-96">
                {!isSuccess && errorMessage ? <p className="text-red-500 mb-4">{errorMessage}</p> : null}
                {errors.reference || errors.amount ? <p className="text-red-500 mb-4">Some required fields are empty</p> : null}
                <form onSubmit={handleSubmit(onSubmit)} className="mb-24 p-4 border border-gray-500">
                    <h3 className="text-2xl">Payment Form</h3>
                    <p className="text-gray-500 mt-6">Enter the payment details and submit</p>
                    <input {...register("reference", { required: true })} type="text" className="w-full bg-gray-100 p-2 mt-4 disabled:opacity-80 disabled:cursor-progress" placeholder="Payment Reference" disabled={isSubmitLoading} />
                    <input {...register("amount", { required: true })} type="number" className="w-full bg-gray-100 p-2 mt-4 disabled:opacity-80 disabled:cursor-progress" placeholder="Amount to Pay" disabled={isSubmitLoading} />
                    <button className="w-full shadow-lg bg-black text-white px-6 py-2 hover:bg-gray-900 mt-4 disabled:opacity-80 disabled:cursor-progress" disabled={isSubmitLoading}>Make Payment</button>
                </form>
            </div>
        </div>
    )
}

export default Content