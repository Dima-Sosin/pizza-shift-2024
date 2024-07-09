import styles from "./styles.module.css"
import { Button } from "../../../components/button/index.jsx"
import { Input } from "../../../components/input/index.jsx"
import { useContext } from "react"
import { PageContext } from "../cart-page.jsx"
import { useLoaderData } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addPerson, addReceiverAddress } from "../../../store/pizzaSlice.js"

export const DataEntry = () => {
    const {setStage} = useContext(PageContext)
    const user = useLoaderData().user
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        const person = {
            firstname: data.firstname,
            lastname: data.lastname,
            middlename: data.middlename,
            phone: data.phone
        }
        const  receiverAddress = parseAddress(data.address)
        dispatch(addPerson(person))
        dispatch(addReceiverAddress(receiverAddress))
        setStage("bankCard")
    }

    const parseAddress = (address) => {
        const addressParts = address.split(',').map(part => part.trim());

        const addressObject = {
            street: addressParts[1],
            house: addressParts[2],
            apartment: addressParts[3] || '',
            comment: addressParts[4] || ''
        };

        return addressObject;
    }

    return(
        <form className="form">
            <h1>Введите ваши данные</h1>
            <Input
                text="Фамилия*"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Фамилия"
                defaultValue={user?.lastname}
                register={register}
                label="lastname"
                required={{
                    required: true,
                    maxLength: 100
                }}
                error={errors?.firstname.message}
            />
            <Input
                text="Имя*"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Имя"
                defaultValue={user?.firstname}
                register={register}
                label="firstname"
                required={{
                    required: true,
                    maxLength: 100
                }}
                error={errors?.firstname.message}
            />
            <Input
                text="Отчество*"
                type="text"
                id="middlename"
                name="middlename"
                placeholder="Отчество"
                defaultValue={user?.middlename}
                register={register}
                label="middlename"
                required={{
                    required: true,
                    maxLength: 100
                }}
                error={errors?.middlename.message}
            />
            <Input
                text="Телефон*"
                type="text"
                id="phone"
                name="phone"
                placeholder="Телефон"
                defaultValue={user?.phone}
                register={register}
                label="phone"
                {...register("phone", {
                    required: "phone required",
                    pattern: {
                        value: /^(\+7|8)[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/i,
                        message: "Неправильный номер телефона!"
                    }
                })}
                error={errors?.phone.message}
            />
            <Input
                text="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                register={register}
                label="email"
                required={{
                    required: true,
                    pattern: {
                        required: "email required",
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i,
                        message: "Неправильный email!"
                    }
                }}
                error={errors?.email.message}
            />
            <Input
                text="Адрес"
                type="text"
                id="address"
                name="address"
                placeholder="Адрес"
                defaultValue={user?.city}
                register={register}
                label="address"
                required={{
                    required: true,
                    maxLength: 100
                }}
                error={errors?.address.message}
            />
            <div className={styles.buttons}>
                <Button type="default" onClick={() => setStage("purchases")}>
                    Назад
                </Button>
                <Button type="primary" onClick={handleSubmit(onSubmit)}>
                    Продолжить
                </Button>
            </div>
        </form>
    )
}