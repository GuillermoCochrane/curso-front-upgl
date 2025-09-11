import { createProductSection } from '../components/components.js';

function createApp() {
    const sections = ['nike', 'adidas', 'new-balance', 'puma', 'topper'];
    let counter = 0;
    for (const section of sections) {
        counter++;
        createProductSection(section, counter);
    }
}


document.addEventListener('DOMContentLoaded', createApp);