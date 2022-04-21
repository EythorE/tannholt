const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sendi...';

   const serviceID = 'default_service';
   const templateID = 'template_r10dptc';
   var templateParams = {
   		time: new Date().toISOString(),
        name: this.elements['from_name'].value,
        email: this.elements['from_email'].value,
        phone: this.elements['from_phone'].value,
        message: this.elements['message'].value
    };

   emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      btn.value = 'Skilaboð send!';
      alert('Skilaboð send!');
    }, (err) => {
      btn.value = 'Villa!';
      alert(JSON.stringify(err));
    });
});