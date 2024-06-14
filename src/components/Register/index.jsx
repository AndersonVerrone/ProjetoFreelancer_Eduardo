import style from "./styles.module.scss";

export const Register = () => {
    return (
        <form>

            <label htmlFor="username"></label>
            <input type="text" id="username" name="username" placeholder="Nome" />

            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" placeholder="Email"/>

            <label htmlFor="senha"></label>
            <input type="text" id="senha" name="senha" placeholder="Senha"/>

            <button>Registrar</button>
        </form>
    )
}