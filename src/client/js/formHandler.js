function handleSubmit(event) {
    event.preventDefault()
    let submitButtom = document.getElementById('submit')
    submitButtom.disabled  = true
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText))
        fetch(`http://localhost:8081/analyze?url=${formText}`)
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML = res
                submitButtom.disabled  = false
                console.log(res)
            })
    else
        alert("Please put valid URL")
}
function onBlur(){

}
export { handleSubmit ,onBlur}
