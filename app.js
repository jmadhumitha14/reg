// app.js
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', userCredential.user.uid), {
            email: email,
            // Additional user data can be added here
        });
        successMessage.style.display = 'block'; // Show success message
        registrationForm.reset(); // Reset form fields
        setTimeout(() => {
            successMessage.style.display = 'none'; // Hide success message after 3 seconds
        }, 3000);
    } catch (error) {
        alert(error.message);
    }
});
