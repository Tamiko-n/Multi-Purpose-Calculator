let courseCount = 0;

function addCourse() {
    courseCount++;
    const container = document.getElementById('courses-container');
    
    const courseRow = document.createElement('div');
    courseRow.className = 'course-row';
    courseRow.innerHTML = `
        <input type="text" class="calculator-input" placeholder="Course Name">
        <select class="calculator-input">
            <option value="4.0">A (4.0)</option>
            <option value="3.7">A- (3.7)</option>
            <option value="3.3">B+ (3.3)</option>
            <option value="3.0">B (3.0)</option>
            <option value="2.7">B- (2.7)</option>
            <option value="2.3">C+ (2.3)</option>
            <option value="2.0">C (2.0)</option>
            <option value="1.7">C- (1.7)</option>
            <option value="1.3">D+ (1.3)</option>
            <option value="1.0">D (1.0)</option>
            <option value="0.0">F (0.0)</option>
        </select>
        <input type="number" class="calculator-input" placeholder="Credits" min="1" max="6">
    `;
    
    container.appendChild(courseRow);
}

function calculateGPA() {
    const courseRows = document.getElementsByClassName('course-row');
    let totalPoints = 0;
    let totalCredits = 0;
    
    for (let row of courseRows) {
        const grade = parseFloat(row.children[1].value);
        const credits = parseFloat(row.children[2].value);
        
        if (!isNaN(credits)) {
            totalPoints += grade * credits;
            totalCredits += credits;
        }
    }
    
    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    document.getElementById('final-gpa').textContent = gpa.toFixed(2);
}

// Add initial course row
addCourse();