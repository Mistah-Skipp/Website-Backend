$("#submit").click(function() {

    var dbName = document.querySelector('#gameName').value;
    var dbStatus = document.querySelector('#status').value;
    var dbPlat = document.querySelector('#gplat').value;
    var dbPlan = document.querySelector('#gplan').value;
    var dbNote = document.querySelector('#gnote').value;
    var dataVal = { title: dbName, status: dbStatus, platform: dbPlat, plan: dbPlan , notes: dbNote};
    //console.log(dataVal);
    if(dbName == ""){
        alert("Enter Game Name");
    }else{
        if(true)
        {$.put("https://w2-78xz.onrender.com/send", dataVal);}
        window.location.href = window.location.href
        console.log("data logged");
    }
})//submit button function

