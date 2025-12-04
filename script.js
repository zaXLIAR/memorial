
document.addEventListener('DOMContentLoaded', function() {
    // Load timeline data
    loadTimeline();
    
    // Initialize all feather icons on the page
    if (window.feather) {
        feather.replace();
    }
});
function loadTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    // This would typically come from an API
    const timelineData = [
        {
            date: "May 25, 2020",
            title: "Death of George Floyd",
            description: "The tragic death of George Floyd in Minneapolis sparks global protests against police brutality and racial injustice."
        },
        {
            date: "June 2020",
            title: "Global Protests",
            description: "Millions around the world participate in Black Lives Matter protests demanding systemic change."
        },
        {
            date: "April 20, 2021",
            title: "Derek Chauvin Convicted",
            description: "Former police officer Derek Chauvin is convicted of murder in George Floyd's death."
        }
    ];
    
    // Clear loading message
    timelineContainer.innerHTML = '';
    
    // Add timeline items
    timelineData.forEach((event, index) => {
        const isEven = index % 2 === 0;
        
        const timelineItem = document.createElement('div');
        timelineItem.className = `relative mb-8 ${isEven ? 'timeline-left' : 'timeline-right'} animate-fade-in`;
        timelineItem.style.animationDelay = `${index * 0.2}s`;
        
        timelineItem.innerHTML = `
            <div class="flex flex-col md:flex-row items-center md:items-start ${isEven ? 'md:flex-row-reverse' : ''}">
                <div class="md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'} mb-4 md:mb-0">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="text-blue-800 font-medium mb-2">${event.date}</div>
                        <h3 class="text-xl font-playfair font-bold mb-2">${event.title}</h3>
                        <p class="text-gray-600">${event.description}</p>
                    </div>
                </div>
                <div class="hidden md:block md:w-1/2"></div>
            </div>
            <div class="absolute top-4 left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white z-10"></div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}