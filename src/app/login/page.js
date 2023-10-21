"use client"

import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Login() {
    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/todos',
    })

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password, remember } = data;

        await login({
            email,
            password,
            remember,
            setError,
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='box'>
            <div className='mb-3'>
                <label className='label'>Email</label>
                <input type='email' className={'input'} placeholder='Email' id='email' {...register("email", {
                    required: "This is required.",
                })} />

                {errors.email && (
                    <span className='has-text-danger'>{errors.email.message}</span>
                )}
            </div>

            <div className='mb-3'>
                <label className='label'>Password</label>
                <input type='password' className={'input'} placeholder='Password' id='password' {...register("password", { required: true })} />
                {errors.password && <span className={'has-text-danger'}>Password field is required</span>}
            </div>

            <div className='mb-3'>
                <label className="checkbox">
                    <input type="checkbox" {...register('remember')} /> Remember me
                </label>
            </div>

            <div>
                <button type='submit' className={'button is-success ' + (isSubmitting && 'is-loading')} value={"submit"}>Submit</button>
            </div>
        </form>
    );
}
