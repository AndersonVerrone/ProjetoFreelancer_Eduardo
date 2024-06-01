import { Header } from "../Header"

export const TemplatePage = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        </>
    )
}