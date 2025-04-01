document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let service = document.getElementById('service').value;
    
    let phoneNumber = "447351456396"; // Use full international format (without +)
    let message = `Hello, my name is ${name}. I would like to book a ${service} service.`;
    
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
});