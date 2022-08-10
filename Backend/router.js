const express = require('express')
//创建一个路由容器
const bodyParser = require('body-parser')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false}))
router.use(bodyParser.json())


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/task')
const Task = require('./schema')
//把路由都挂载到router路由容器中
router.get('/',function(req,res){
    // const newTask = new Task({
    //     task:'1232132'
    // })
    // newTask.save(function(err,ret){
    //     if(err){
    //         console.log('保存失败');
    //     }else{
    //         console.log('保存成功');
    //         console.log(ret);
    //     }
    // })
    Task.find(function(err,tasks){
        if(err){
            return res.status(500).send('Server error')
        }else{
            res.render('index.html',{
                tasks:tasks
            })
        }
    })
})
router.post('/new',function(req,res){
    new Task(req.body).save(function(err){
        if(err){
            return res.status(500).send('server error')
        }
        res.redirect('/')
    })
})
router.get('/delete',function(req,res){
    Task.remove({_id:req.query.id},function(err){
        if(err){
            console.log('删除失败');
        }else{
            console.log('删除成功');
            res.redirect('/')
        }
    })
})
router.post('/change',function(req,res){
    console.log(req.body);
    Task.findByIdAndUpdate(req.query.id,{
        task:req.body.task
    },function(err){
        if(err){
            console.log('更改失败');
        }else{
            console.log('更改成功');
            res.redirect('/')
        }
    })
})
//导出router
module.exports = router