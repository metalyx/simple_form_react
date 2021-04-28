import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setFirstname, setLastname, setSurname, setBirthDate } from '../redux/rootSlice';

export const Step1 = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const firstname = useSelector(state => state.firstname);
    const surname = useSelector(state => state.surname);
    const lastname = useSelector(state => state.lastname);
    const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onTouched", defaultValues: { firstname, surname, lastname }})
    // const { register, handleSubmit, errors } = useForm()
    const onSubmit = ( data ) => {
       
        dispatch(setFirstname(data.firstname));
        dispatch(setSurname(data.surname));
        dispatch(setLastname(data.lastname));
        dispatch(setBirthDate((data.birthdate).toString()));
        history.push("./step2");
        
    }

    const latin = new RegExp("^[a-zA-Z]{3,}$");
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{border: "3px solid lightblue", padding: "50px", borderRadius: "25px"}}>

            <div>
                <label htmlFor="firstname">Введите имя:</label>
                <input type="text" id="firstname" name="firstname"
                {...register("firstname", {
                    validate: { 
                        Required: (value) => Boolean(value),
                        Latin: (value) => Boolean(value.match(latin)),
                    }
                  })} />
                {errors.firstname && errors.firstname.type === "Latin" && (
                <p className="text-danger">Необходимо вводить только латинские буквы,<br/> минимум 3 символа</p>
                )}
                {errors.firstname && errors.firstname.type === "Required" && (
                <p className="text-danger">Имя - обязательное поле</p>
                )}
            </div>

            <div>
                <label htmlFor="surname">Введите фамилию:</label>
                <input type="text" id="surname" name="surname" defaultValue="" {...register("surname", {
                    validate: {
                        Required: (value) => Boolean(value),
                        Latin: (value) => Boolean(value.match(latin)),
                    }
                })}/>
                {errors.surname && errors.surname.type === "Latin" && (
                <p className="text-danger">Необходимо вводить только латинские буквы,<br/> минимум 3 символа</p>
                )}
                {errors.surname && errors.surname.type === "Required" && (
                <p className="text-danger">Фамилия - обязательное поле</p>
                )}
            </div>

            <div>
                <label htmlFor="lastname">Введите отчество:</label>
                <input type="text" id="lastname" name="lastname" defaultValue="" {...register("lastname", {
                     validate: {
                        Required: (value) => Boolean(value),
                        Latin: (value) => Boolean(value.match(latin)),
                    }
                })}/>
                 {errors.lastname && errors.lastname.type === "Latin" && (
                <p className="text-danger">Необходимо вводить только латинские буквы,<br/> минимум 3 символа</p>
                )}
                {errors.lastname && errors.lastname.type === "Required" && (
                <p className="text-danger">Отчество - обязательное поле</p>
                )}
            </div>
            <div>
                <label htmlFor="birthdate">Введите дату:</label>
                <input type="date" id="birthdate" name="birthdate" defaultValue="" {...register("birthdate", {
                    validate: {
                        Required: (value) => Boolean(value),
                    }
                })}/>
                {errors.birthdate && errors.birthdate.type === "Required" && (
                <p className="text-danger">Дата рождения - обязательное поле</p>
                )}
            </div>
            <button className="btn btn-primary">Далее</button>
        </form>
    )
}