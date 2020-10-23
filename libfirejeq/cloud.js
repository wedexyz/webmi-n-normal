var firebaseConfig = {

    databaseURL:'https://megaboth007.firebaseio.com/',
    
    };
    firebase.initializeApp(firebaseConfig);
    var dbRef = firebase.database();

   

    window.setTimeout("waktu()", 1000);
 
    function waktu() {
      var waktu = new Date();
      setTimeout("waktu()", 1000);
      document.getElementById('waktu').innerHTML = waktu.getHours()+" :"+  waktu.getMinutes() +" :"+ waktu.getSeconds();
      
    }
  
var dbRef = firebase.database();
//membuat database untuk halaman login-----------------------------------------------------------------------------
var database = firebase.database();
//video------------------------------------------------------------------------------------------------------------

var baca_jarak = document.getElementById('jarak');
var baca_suhuc =document.getElementById('suhuc');
dbRef.ref("/Jarak").on('value', snap => baca_jarak.innerHTML= snap.val());
dbRef.ref("/Suhuc").on('value', snap => baca_suhuc.innerHTML= snap.val());
//melihat content
var baca_jarak = document.getElementById('jarak');
dbRef.ref("/Jarak").on('value', snap => baca_jarak.value= snap.val());
//melakukan call back pada node firebase      
var db = firebase.database();
var ref = db.ref("/Suhuc");

ref.on("value", function(snapshot) {
 //logika jarak
if (snapshot.val()>37){
  setTimeout(function(){  fire(); }, 1000); 
  //fire();
  document.getElementById('kondisi').innerHTML="bahaya";
//setTimeout(function(){   window.location.assign("face.html"); }, 1000);  

}else{
 document.getElementById('kondisi').innerHTML="aman";
}

}, function (errorObject) {
 console.log("The read failed: " + errorObject.code);
}
);



function tampilData()
  {
  // Buat referensi database firebase---------------------
    var dbRef = firebase.database();
    var statusAlat = dbRef.ref("deteksi_wajah");
  // Dapatkan referensi table
    var table = document.getElementById("query").getElementsByTagName('tbody')[0];
  // Membuang semua isi table	---------------
    $("#deteksi_wajah").find("tr:gt(0)").remove();

  // Memuat Data------------------------
    statusAlat.on("child_added", function(data, prevChildKey) {
         var newstatusAlat= data.val();
         var row = table.insertRow(table.rows.length);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);
         //var cell6 = row.insertCell(5);
         cell1.innerHTML = newstatusAlat.id; 
         cell2.innerHTML = newstatusAlat.nama;
         cell3.innerHTML = newstatusAlat.jarak_deteksi;
         cell4.innerHTML = newstatusAlat.suhu_c;
        // cell5.innerHTML = newstatusAlat.suhu_f;
         cell5.innerHTML = newstatusAlat.waktu;
       
       
    });
  }

     
             //-----------------sheet database

            

            
           
        