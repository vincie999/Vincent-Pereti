function showBio() {
    hideAllSections();
    document.getElementById('bio').style.display = 'block';
}

function showEducation() {
    hideAllSections();
    document.getElementById('education').style.display = 'block';
}

function showWork() {
    hideAllSections();
    document.getElementById('work').style.display = 'block';
}

function showProjects() {
    hideAllSections();
    document.getElementById('projects').style.display = 'block';
}

function showProjects() {
    hideAllSections();
    document.getElementById('contact').style.display = 'block';
}

function hideAllSections() {
    const sections = document.querySelectorAll('.hidden-section');
    sections.forEach(section => section.style.display = 'none');
}