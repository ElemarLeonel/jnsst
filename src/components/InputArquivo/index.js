import React from 'react';
import FileUpload from "react-mui-fileuploader";

export default function InputArquivo() {
    return (
        <FileUpload
            multiFile={true}
            disabled={false}
            title="Ficha de Registro do Colaborador"
            header="[Drag to drop]"
            leftLabel="or"
            rightLabel="to select files"
            buttonLabel="click here"
            buttonRemoveLabel="Remove all"
            maxFileSize={10}
            maxUploadFiles={0}
            maxFilesContainerHeight={357}
            errorSizeMessage={'fill it or move it to use the default error message'}
            allowedExtensions={['jpg', 'jpeg', 'pdf']}
            imageSrc={'path/to/custom/image'}
            bannerProps={{ elevation: 0, variant: "outlined" }}
            containerProps={{ elevation: 0, variant: "outlined" }}
            />
    )
}