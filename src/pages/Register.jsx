import React from 'react'
import { useForm } from "react-hook-form"

function Register() {

    const { register, handleSubmit } = useForm()

    const handleRegister = (value) => {
        console.log('============= value', value)
    }

    return (
        <div>
            <h2>Đăng kí người dùng</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
                <input type="text" placeholder='Họ' {...register("firstname")} />
                <input type="text" placeholder='Tên' {...register("lastName")} />
                <div>
                    <input id='radio1' type="radio" value="female"  {...register("gender")} />
                    <label htmlFor='radio1'>Nữ</label>
                    <input id='radio2' type="radio" value="male"  {...register("gender")} />
                    <label htmlFor='radio2'>Nam</label>
                </div>
                <input type="text" placeholder='mm/dd/yyyy' {...register("birthday")} />
                <input type="email" placeholder='Email' {...register("email")} />
                <input type="password" placeholder='Password' {...register("password")} />

                <input type="submit" value="Đăng kí" />
            </form>
        </div>
    )
}

export default Register