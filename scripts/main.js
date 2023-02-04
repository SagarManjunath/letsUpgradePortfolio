function saveData(){
   // let, var, const
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let description = document.getElementById('description').value;
    let myData = {
        Name:name,
        Email:email,
        Subject:subject,
        Description:description
    }
    console.log(myData);
    //api
    //saveuserinfo(myData);
}