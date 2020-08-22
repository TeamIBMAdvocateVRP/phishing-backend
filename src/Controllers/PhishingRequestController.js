const { createPhishingR } = require('../Services/PhishingRequestService');
const {classify} = require('../Utils/visualRecognition');

module.exports = {
    createPhishingRequest: async (req, res) => {
        try{
            const params = {};
            if(req.file) {
                if(req.file == undefined){
                    res.send({ msg: 'Error: Ningun Archivo Seleccionado!'});
                } else {
                    console.log(req.file.secure_url)
                    const file_c = req.file.secure_url;
                    const classifier_ids = [req.params.id == 1 ? "default":"Phishing_1126376895"];
                    params.url = req.file.secure_url;
                    params.classifier_ids = classifier_ids;
                    if (req.params.id == 2) params.owners = 'IBM,me';
                }
            }
            const answer = await classify(params);
            const pr = await createPhishingR({
                url_img: req.file.secure_url,
                clasification_type: req.params.id == 1 ? 'G':'P',  
                ...answer
            })
            res.send(pr);
        } catch(err) {
            res.send(err);
        };
    },
}