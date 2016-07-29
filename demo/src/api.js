export default {
    getLabels() {
        const labels = [{
            "icon": "/resources/smile.png",
            "label": "Analysis",
            "value": "analyis"
        }, {
            "icon": "/resources/smile.png",
            "label": "Benchmark",
            "value": "benchmark"
        }, {
            "icon": "/resources/smile.png",
            "label": "Breaking",
            "value": "breaking"
        }, {
            "icon": "/resources/smile.png",
            "label": "Bug",
            "value": "bug"
        }, {
            "icon": "/resources/smile.png",
            "label": "Build",
            "value": "build"
        }, {
            "icon": "/resources/smile.png",
            "label": "Critical",
            "value": "critical"
        }, {
            "icon": "/resources/smile.png",
            "label": "Deprecation",
            "value": "deprecation"
        }, {
            "icon": "/resources/smile.png",
            "label": "Docs",
            "value": "docs"
        }, {
            "icon": "/resources/smile.png",
            "label": "Enchancement",
            "value": "enchancement"
        }, {
            "icon": "/resources/smile.png",
            "label": "Feature",
            "value": "feature"
        }, {
            "icon": "/resources/smile.png",
            "label": "Regression",
            "value": "regression"
        }, {
            "icon": "/resources/smile.png",
            "label": "Settings",
            "value": "settings"
        }, {
            "icon": "/resources/smile.png",
            "label": "Stats",
            "value": "stats"
        }];
        return new Promise((resolve, reject) => {
            window.setTimeout(() => {
                resolve(labels)
            }, 700);
        });
    }
}
