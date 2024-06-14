import style from "./styles.module.scss";

export const FormInfoRequest = () => {
    return (
        <form>

            <label htmlFor="nome"></label>
            <input type="text" id="nome" name="nome" placeholder="Nome" />

            <label htmlFor="endereco"></label>
            <input type="text" id="endereco" name="endereco" placeholder="Endereço"/>

            <label htmlFor="area_de_atuacao"></label>
            <select id="area_de_atuacao" name="area_de_atuacao">
                <option value="">Selecione a área de atuação</option>
            </select>

            <label htmlFor="telefone"></label>
            <input type="tel" id="telefone" name="telefone" placeholder="Telefone" />

            <label htmlFor="PDF"></label>
            <input type="file" id="PDF" name="PDF" accept=".pdf" />
             
        </form>
    )
}