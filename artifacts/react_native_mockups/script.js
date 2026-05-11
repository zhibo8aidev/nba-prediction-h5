let selectedOption = null;
let isSubmitted = false;

function selectOption(el, type) {
    if (isSubmitted) return;

    // Remove selected class from all
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add to current
    el.classList.add('selected');
    selectedOption = type;

    // Activate submit button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.classList.add('active');
}

function showIntentModal() {
    if (!selectedOption || isSubmitted) return;
    document.getElementById('intentModal').style.display = 'flex';
}

function closeModal(modalId, isWilling) {
    document.getElementById(modalId).style.display = 'none';
    
    if (modalId === 'intentModal') {
        console.log('User willingness:', isWilling);
        // Show success modal
        document.getElementById('successModal').style.display = 'flex';
    }
}

function finalizeSubmission() {
    document.getElementById('successModal').style.display = 'none';
    isSubmitted = true;

    // Update UI to submitted state
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.classList.remove('active');
    submitBtn.classList.add('submitted');
    submitBtn.innerText = '已提交';

    // Lock options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.style.cursor = 'default';
        if (!btn.classList.contains('selected')) {
            btn.style.opacity = '0.6';
        }
    });
}
