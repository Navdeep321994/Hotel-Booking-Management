import React from 'react';
import {useEffect, useRef} from "react";

import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    // const onSubmit = data => console.log(data);

    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
            <form action="contact.php" method="post" encType="multipart/form-data" id="jobdetil" >
                <div className="row mb-n6">
                    <div className="col-lg-6 col-md-6 col-12 mb-6">
                        <input 
                            type="text" 
                            placeholder="Your Name *" 
                            name="name" 
                            {...register("name", {
                                required: "Name is required",
                            })} 
                        />
                        {errors?.name && <p>{errors.name?.message}</p>}
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mb-6">
                        <input 
                            type="email" 
                            placeholder="Email *" 
                            name="email" 
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            })} 
                        />
                        {errors?.email && <p>{errors.email?.message}</p>}
                    </div>
                    <div className="col-md-12 col-12 mb-6">
                        <input 
                            type="tel" 
                            placeholder="Phone *" 
                            name="phone" 
                            {...register("phone", {
                                required: "Phone is required",
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: "Invalid phone number",
                                },
                            })}
                        />
                        {errors?.phone && <p>{errors.phone?.message}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea 
                            name="message" 
                            placeholder="Message" 
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors?.message && <p>{errors.message?.message}</p>}
                    </div>
                    <div className="col-12 text-center mb-6">
                        <button type="submit" className="btn btn-primary btn-hover-secondary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
