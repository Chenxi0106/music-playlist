const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const playlistSchema = new Schema(
    {
        name: { type: String, required: true },
        ownerEmail: { type: String, required: true },
        songs: { type: [{
            title: String,
            artist: String,
            youTubeId: String,
            comments:[String]
        }], required: true },
        publish:{type:Boolean, required:true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Playlist', playlistSchema)
