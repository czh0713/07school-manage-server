const mongoose = require('mongoose')
const Schema= mongoose.Schema
const feld={
    name: String,
    //人物标签
    level:String,
    gender:String,
    stunum: Number,
    currnum:Number,
    currname:String,
    academy : { type: Schema.Types.ObjectId, ref: 'Academy' }
}
//自动添加更新时间创建时间:
let personSchema = new mongoose.Schema(feld, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})
module.exports= mongoose.model('curr',personSchema)
