import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setPassword, setRepeatPassword } from '../redux/rootSlice';

export const Step3 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const password = useSelector(state => state.password);
    const repeatpassword = useSelector(state => state.repeatpassword);
    const { register, handleSubmit, watch, formState: {errors}  } = useForm({ mode: "onTouched", defaultValues: { password, repeatpassword }})
    const pass = useRef({});
    pass.current = watch("password", "");



    const onSubmit = ( data ) => {
        if (data.password === data.repeatpassword) {
            dispatch(setPassword(data.password));
            dispatch(setRepeatPassword(data.repeatpassword));
            history.push("./result");
        }
        else {
            
        }
        
    }

    
   
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{border: "3px solid lightblue", padding: "50px", borderRadius: "25px"}}>

            <div>
                <label htmlFor="password">Задайте пароль:</label>
                <input type="password" id="password" name="password"  {...register("password", {
                    validate: {
                        required: (value) => Boolean(value),
                        minimum: (value) => Boolean(value.length >= 6)
                    }
                })}/>
                
                {errors.password && errors.password.type === "required" && (
                <p className="text-danger">Обязательное поле</p>
                )}
                {errors.password && errors.password.type === "minimum" && (
                <p className="text-danger">Минимум 6 символов</p>
                )}
            </div>

            <div>
                <label htmlFor="repeatpassword">Повторите пароль:</label>
                <input type="password" id="repeatpassword" name="repeatpassword"  {...register("repeatpassword", {
                   
                    validate: {
                        eq: (value) => Boolean(value === pass.current)
                    }
                    
                })}/>
               {errors.repeatpassword && errors.repeatpassword.type === "eq" && (
                   <p className="text-danger">Пароли должны совпадать</p>
               )}
            </div>

            <button className="btn btn-primary">Зарегестрироваться</button>
        </form>
    )
}