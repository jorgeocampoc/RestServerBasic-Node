const { response:res, request:req } = require('express')

const usersGet = (req, res )=>{
    res.json({
        msg:'get'
    })
}

const usersDelete = (req, res)=>{
    const { id } = req.params;
    res.json({
        msg:'delete',
        id,
  })
}


//opbeniendo query aprams
const usersUpdate = (req, res)=>{
    const {id=100, name='juan'} = req.query ;
    res.json({
        msg:'update',
        id,
        name
    })
}
const usersPost = (req, res)=>{
    const user = req.body;
    res.json({
        msg:'post',
        data:user
    })
}

module.exports = {
    usersGet,
    usersDelete,
    usersUpdate,
    usersPost

}