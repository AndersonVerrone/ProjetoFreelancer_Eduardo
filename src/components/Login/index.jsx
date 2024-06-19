import style from "./styles.module.scss";

export const Login = () => {
    return (
        <form>

            <label htmlFor="nome"></label>
            <input type="text" id="nome" name="nome" placeholder="Nome" />

            <label htmlFor="senha"></label>
            <input type="text" id="senha" name="senha" placeholder="Senha"/>

            <button>Logar</button> 
        </form>
    )
}