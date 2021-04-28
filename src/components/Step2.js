import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setEmail } from '../redux/rootSlice';

export const Step2 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const email = useSelector(state => state.email);
    const { register, handleSubmit, formState: {errors}  } = useForm({ mode: "onTouched", defaultValues: { email }})

    const onSubmit = ( data ) => {
        dispatch(setEmail(data.email));
        history.push("./step3");
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{border: "3px solid lightblue", padding: "50px", borderRadius: "25px"}}>

            <div>
                <label htmlFor="email">Введите Email:</label>
                <input type="email" id="email" name="email" {...register("email", {
                    validate: {
                        required: (value) => Boolean(value),
                        emailReg: (value) => Boolean(reg.test(value))
                    }
                })}/>
                 {errors.email && errors.email.type === "required" && (
                <p className="text-danger">Email - обязательное поле</p>
                )}
                {errors.email && errors.email.type === "emailReg" && (
                <p className="text-danger">Введите корректный Email-адрес.<br/> Email-адрес может содержать буквы<br/> латинского алфавита,
                цифры, <br/>точки и знаки минуса. </p>
                )}
            </div>

            <button className="btn btn-primary">Далее</button>
        </form>
    )
}