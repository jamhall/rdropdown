import labels from './labels.json';

export default {
    getLabels() {
        return new Promise((resolve, reject) => {
            window.setTimeout(() => { resolve(labels) }, 700);
        });
    }
}
