import { createProductSection } from '../components/components.js';
import { modalHandler } from './modalHandler.js';

function createApp() {
    const sections = ['nike', 'adidas', 'new-balance', 'puma', 'topper'];
    let counter = 0;
    for (const section of sections) {
        counter++;
        createProductSection(section, counter);
    }
    modalHandler();
}


document.addEventListener('DOMContentLoaded', createApp);