const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   // Basic Validation assertion
   const name = this.elements['from_name'].value;
   const email = this.elements['from_email'].value;
   const phone = this.elements['from_phone'].value;

   if(!name || !email || !phone) {
       alert("Vinsamlegast fylltu út nafn, netfang og símanúmer.");
       return;
   }

   btn.value = 'Sendi...';

   const serviceID = 'default_service';
   const templateID = 'template_r10dptc';
   
   var templateParams = {
        time: new Date().toISOString(),
        name: name,
        email: email,
        phone: phone,
        message: this.elements['message'].value
    };

   emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      btn.value = 'Skilaboð send!';
      alert('Skilaboð hafa verið send!');
      document.getElementById('form').reset(); // Clear form
    }, (err) => {
      btn.value = 'Villa!';
      alert("Villa kom upp: " + JSON.stringify(err));
    });
});