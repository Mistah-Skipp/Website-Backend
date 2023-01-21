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
        {$.post("https://website-backend-wbz8.onrender.com/send", dataVal);}
        window.location.href = window.location.href
        console.log("data logged");
    }
})//submit button function


$.put = function(url, data, callback, type){
  if ( $.isFunction(data) ){
    type = type || callback,
    callback = data,
    data = {}
  }
 
  return $.ajax({
    url: url,
    type: 'PUT',
    success: callback,
    data: data,
    contentType: type
  });
}