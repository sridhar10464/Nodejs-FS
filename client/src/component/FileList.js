import React, { useEffect, useState } from "react";
import axios from "axios";

const FileList = () =>
{
    const [files, setFiles] = useState([]);

    useEffect(() =>
    {
        axios.get("http://localhost:5000/api/get-files")
            .then(response =>
            {
                setFiles(response.data);
            })
            .catch(error =>
            {
                console.error(`Error retriving files: ${error.message}`)
            });
    }, []);

    return (
        <div>
            <h2>All Files</h2>
            <ul>
                {files.map(file => (
                    <li key={file}>{file}</li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;