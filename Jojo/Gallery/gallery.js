// Get modal elements
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const modalTreatment = document.getElementById('modal-treatment');
const closeModal = document.querySelector('.close');

// Data for each pet
const petData = {
    "Charlie": {
        description: "Loves belly rubs and chasing squirrels.",
        treatment: "Full Grooming, Ozone Therapy"
    },
    "Luna": {
        description: "Enjoys quiet naps and laser pointers.",
        treatment: "Cat Grooming: Wash & Go"
    },
    "Max": {
        description: "Loves long walks and peanut butter treats.",
        treatment: "Full Grooming, Ultrasound Teeth Cleaning"
    },
    "Milo": {
        description: "Curious about everything and loves head scratches.",
        treatment: "Lion Cut, Anti-Flea Shampoo"
    },
    "Bella": {
        description: "Adores playing fetch and swimming in lakes.",
        treatment: "Keep It Up, Traditional Teeth Cleaning"
    },
    "Whiskers": {
        description: "Prefers cozy blankets and sunbathing spots.",
        treatment: "Cat Grooming: Lion Cut"
    },
    "Daisy": {
        description: "Enjoys running around and playing with toys.",
        treatment: "Full Grooming, Anti-Flea Shampoo"
    },
    "Simba": {
        description: "Loves high perches and bird-watching.",
        treatment: "Cat Grooming: Keep It Up"
    },
    "Buddy": {
        description: "Gentle giant who loves cuddles and treats.",
        treatment: "Wash & Go, Ozone Therapy"
    },
    "Nala": {
        description: "Queen of the house, enjoys being pampered.",
        treatment: "Full Grooming, Dematting"
    }
};

// Add click event to each gallery item
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        const petName = img.nextElementSibling.textContent; // Get pet's name
        const petInfo = petData[petName]; // Look up pet's data

        if (petInfo) {
            modalImage.src = img.src;
            modalName.textContent = petName;
            modalDescription.textContent = petInfo.description;
            modalTreatment.textContent = `Treatments: ${petInfo.treatment}`;
            modal.style.display = 'block'; // Show modal
        }
    });
});

// Close modal on 'X' click
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
