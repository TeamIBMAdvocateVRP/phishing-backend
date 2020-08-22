const { Schema, model } = require('mongoose');

const PhishingRequestSchema = new Schema({
    url_img: {
     type: String,
     required: true,
     unique: true,
    },
    clasification_type: {
        type: String,
        enum: ['P','G']
    },
    is_active: {
        type: Boolean,
        default: true,
    }
}, {
 timestamps: true
});

// Exporto en module.exports el modelo de mongo sin nombre

module.exports = model('phishing-request', PhishingRequestSchema);