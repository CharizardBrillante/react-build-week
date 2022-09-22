export const imgUploader = (selectedFile, token, section, mainId, callback, experience, expId) => {
    

    const expUrl = `experiences/${expId}`;
    const picture = section!=='posts'? '/picture' : '';
    const formData = new FormData();
    formData.append('post', selectedFile);
    const options = {
        method: "POST",
        headers: {
        "Authorization":
            `Bearer ${token}`,
        },
        body: formData
    }

    fetch(`https://striveschool-api.herokuapp.com/api/${section}/${mainId}${picture}`/*  + `${experience ? expUrl : ''}` */, options)
    .then(res => res.json())
    .then(data => {console.log('success', data); callback()})
    .catch(err => console.log('error', err))

    console.log('url: ',`https://striveschool-api.herokuapp.com/api/${section}/${mainId}${experience ? expUrl : ''}`)
}


