document.getElementById('calculateBtn').addEventListener('click', function() {
    let basePrice = 100;

    // Education
    let educationCoefficient = parseFloat(document.getElementById('education').value);
    
    // Family Net Worth
    let familyNetWorthCoefficient = parseFloat(document.getElementById('familyNetWorth').value);

    // Caste
    let castePrice = parseInt(document.getElementById('caste').value);

    // Skills
    let skillsPrice = 0;
    if (document.getElementById('musicalInstrument').checked) skillsPrice += 10;
    if (document.getElementById('goodCook').checked) skillsPrice += 20;
    if (document.getElementById('easygoing').checked) skillsPrice += 15;
    if (document.getElementById('singsWell').checked) skillsPrice += 10;

    // Age
    let ageCoefficient = 1;
    let ageRadios = document.getElementsByName('age');
    for (let radio of ageRadios) {
        if (radio.checked) {
            ageCoefficient = parseFloat(radio.value);
            break;
        }
    }

    // Reputation
    let reputationCoefficient = 1;
    if (document.getElementById('gossipsParents').checked) reputationCoefficient *= 0.85;
    if (document.getElementById('gossipsCharacter').checked) reputationCoefficient *= 0.9;
    if (document.getElementById('generalGossip').checked) basePrice -= 20;

    // Calculate final price
    let finalPrice = basePrice * educationCoefficient * familyNetWorthCoefficient + castePrice + skillsPrice;
    finalPrice *= ageCoefficient * reputationCoefficient;

    // Display result
    document.getElementById('result').textContent = `Final Price: $${finalPrice.toFixed(2)}`;
});
