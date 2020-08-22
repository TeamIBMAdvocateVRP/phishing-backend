const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

const visualRecognition = new VisualRecognitionV3({
    version: '2019-05-29',
    iam_apikey: 'ewP62_O259-Y0CX9bqqVEUb_xAYwwdcmudfcCq-O3vfI'
});

module.exports = {
    classify: async (params) => {
        const x = await visualRecognition.classify(params)
        const obj = {};
        obj.whatClass = JSON.stringify(x.images[0].classifiers[0].classes[0].class, null, 2);
        obj.score = JSON.stringify(x.images[0].classifiers[0].classes[0].score, null, 2);
        obj.type_hierarchy = JSON.stringify(x.images[0].classifiers[0].classes[0].type_hierarchy, null, 2);
        return obj;
    }
};