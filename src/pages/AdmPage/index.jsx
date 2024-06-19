import { useState } from "react"
import { UploadContainer } from "../../fragments/UploadContainer"
import { ShowPdf } from "../../components/ShowPdf"


export const AdmPage = () => {
    const [doc,setDoc] = useState(null)
    return (
        <>
        <h1>AdmPage</h1>
        <UploadContainer setDoc={setDoc}/>
        {doc&&<ShowPdf doc={doc} />}
        
        </>
    )
}