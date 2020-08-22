const PhishingRequest = require('../Models/PhishingRequest');
         // {url_img, clasification_type}
// Siempre crea tu CRUD
module.exports = {
    createPhishingR: phishingR => PhishingRequest.create(phishingR),
    readAll: () => PhishingRequest.find( {is_active:true} ),
    readById: id => PhishingRequest.findById(id),
    updatePhishingRByUrl: (url, newPhishingR)  => PhishingRequest
        .findOneAndUpdate({ url_img: url}, newPhishingR, { new: true }),
    deletePhishingRByUrl: (url)  => PhishingRequest
        .findOneAndUpdate({ url_img: url, is_active: true }, { is_active: false }),   
}