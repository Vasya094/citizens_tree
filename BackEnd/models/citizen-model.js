import mongoose from 'mongoose'


const { Schema } = mongoose;

const citizenSchema = new Schema( {
  name: {
    type: String,
    required: true
  },
  groups: [
    {
      type: {
      type: String,
    },
      name: {
      type: String,
    },
  }
  ]
} )

const Citizen = mongoose.model( 'Citizen', citizenSchema )

export default Citizen