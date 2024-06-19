import { Document, Page } from "react-pdf"

export const ShowPdf = ({doc}) => {
    return (
        <div>
            <Document file={doc}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}