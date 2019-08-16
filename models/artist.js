const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

/**
 * id and uri should become required after v2
 **/
const ArtistSchema = new mongoose.Schema({
  id: {
    type: String,
    required: false,
    unique: false,
  },
  uri: {
    type: String,
    required: false,
  },
  images: {
    type: [ImageSchema],
    default: [],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  popularity: {
    type: Number,
    required: false,
  },
  genres: {
    type: [String],
    default: [],
    required: true,
  },
  followerCount: {
    type: Number,
    required: true,
  },
})

mongoose.model('Artist', ArtistSchema)
