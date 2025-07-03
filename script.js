document.getElementById("rebrand-btn").addEventListener("click", () => {
    const brandNames = ["Coca-Cola AI", "Coke Future", "Coca-Cola Vision"];
    const taglines = ["AI Meets Refreshment", "The Future of Taste", "Revolutionizing Flavor"];
    const descriptions = ["AI-driven branding innovation", "Smart personalization for every sip", "Refreshing experiences powered by AI"];

    document.getElementById("brand-name").innerText = brandNames[Math.floor(Math.random() * brandNames.length)];
    document.getElementById("tagline").innerText = taglines[Math.floor(Math.random() * taglines.length)];
    document.getElementById("description").innerText = descriptions[Math.floor(Math.random() * descriptions.length)];
});