import { Button } from "../Button/Button.jsx"
import { Modal } from "../Modal/Modal.jsx"

export const LogOut = ({ onClose, setIsAuth }) => {
    const onClick = () => {
        localStorage.removeItem("token")
        setIsAuth(localStorage.getItem("token"))
        onClose()
    }

    return (
        <Modal onClose={onClose}>
            <h2>Вы действительно хотите выйти?</h2>
            <br />
            <Button type="default" onClick={onClose}>
                Отменить
            </Button>
            <br />
            <Button type="primary" onClick={() => onClick()}>
                Выйти
            </Button>
        </Modal>
    )
}
