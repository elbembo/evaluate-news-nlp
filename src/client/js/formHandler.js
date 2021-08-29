function handleSubmit(event) {
    event.preventDefault()
    let submitButtom = document.getElementById('submit')
    submitButtom.disabled  = true
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText))
        fetch(`/analyze?url=${formText}`)
            .then(res => res.json())
            .then(function (res) {
                let resHtml = `<div>
                <div><h3>Model :</h3> ${res.model}</div>
                <div><h3>Score tag :</h3> ${res.score_tag}</div>
                <div><h3>Agreement :</h3> ${res.agreement}</div>
                <div><h3>Subjectivity :</h3> ${res.subjectivity}</div>
                <div><h3>Confidence :</h3> ${res.confidence}</div>
                <div><h3>Irony :</h3> ${res.irony}</div>
                <div><h3>status :</h3> ${JSON.stringify(res.status)}</div>
            </div>`
                document.getElementById('results').innerHTML = resHtml
                submitButtom.disabled  = false
                console.log(res)
            })
    else
        alert("Please put valid URL")
}
function onBlur(){

}
export { handleSubmit ,onBlur}
