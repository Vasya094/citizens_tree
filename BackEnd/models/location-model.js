import mongoose from 'mongoose'


const { Schema } = mongoose;

const locationSchema = new Schema( {
  type: {
    type: String,
    unique: true
  }
} )

const Location = mongoose.model( 'Location', locationSchema )

export default Location