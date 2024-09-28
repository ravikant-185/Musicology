
// Menu Toggle
function myFunction(x) {
    x.classList.toggle("change");
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Register Now Button
document.querySelector('button').addEventListener('click', function () {
    alert('Registration functionality will go here.');
});

// Read More Button
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        alert('More details functionality will go here.');
    });
});





