

//Melange firebase

//Initialize Firebase


  firebase.initializeApp(config);
  console.log(config);
  
  //create refences
const dbRefObject = firebase.database().ref().child('events');
//for melange events list
const divCard =  document.getElementById('eventcardid');
dbRefObject.on('child_added',snap=>{
  var eventName = snap.child("EventName").val();
  var eventcomm = snap.child("MangingCommittee").val();
 // var eventTiming = snap.child("EventTiming").val();
 // var eventDate = snap.child("EventDate").val();
  var eventId = snap.child("EventID").val();
  const path="../assets/melange2019/img/hotels/";
      divCard.innerHTML += ' <div class="col-lg-3 col-md-6"><div  class="hotel">'+
              '<a href="eventDetails?id='+eventId+'"><div class="hotel-img">'+
                '<img src="'+path+'1.jpg" alt="Hotel 1" class="img-fluid">'+
              '</div>'+
              '<h3>'+eventName+'</h3>'+
           //   '<p> <strong>Time: </strong>'+ eventTiming+'</p>'+
          //    '<p><strong>Date: </strong>'+eventDate+'</p>
          '</a></div></div>'
})


    

    
  
  

