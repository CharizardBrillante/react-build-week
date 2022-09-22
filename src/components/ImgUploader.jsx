import { BsCardImage } from 'react-icons/bs';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ImgUploader = (props) => {
    //------------------------------------------> PROPS : section, experience, expId, mainId, size, color <------------------------------------------------
    
    const token = useSelector(state => state.loggedUser.token);
    const [selectedFile, setSelectedFile] = useState(null);
    const section = props.section; //profile || posts
    const experience = props.experience; // boolean
    const expUrl = `experiences/${props.expId}`; 


    const submitForm = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
        const options = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization":
                `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
        }

        fetch(`https://striveschool-api.herokuapp.com/api/${section}/${props.mainId}${experience ? expUrl : ''}`, options)
        .then(res => res.json())
        .then(data => console.log('success', data))
        .catch(err => console.log('error', err))
    }
    return (
        <>
            <input
                type="file"
                value={selectedFile}
                onChange={e => setSelectedFile(e.target.files[0])}
            />
            <BsCardImage 
                size={props.size} 
                color={props.color}
                onClick={submitForm}
            />
        </>
    )
}

export default ImgUploader;
