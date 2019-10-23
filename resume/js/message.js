! function () {
    var view = document.querySelector('.message')
    var model ={
        init:function () {
            var APP_ID = 'cAEycXVm5glh3cfzEJ96HKd5-gzGzoHsz'
            var APP_KEY = 'eKUOQ5d5u9gn3m9mg2xgUJ8X'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch:function(){
            var query = new AV.Query('Message');
            return query.find()  //promise对象
        },
        save:function(name,content){
            var Message = AV.Object.extend('Message');
                var message = new Message()
                message.set('name', name)
                message.set('content', content)
                return message.save()
        }
    }
    var controller = {
        view: null,
        messageList: null,
        model:null,
        form:null,
        init: function (view,model) {
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function () {
            this.model.fetch().then( (messages)=> {
                // 获取需要更新的 todo
                let arr = messages.map((item) => item.attributes)
                //   console.log(arr)
                arr.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    //   console.log(item)
                    this.messageList.appendChild(li)
                })
            }).then(() => {}, (error) => {
                console.log(error)
            })
        },
        bindEvents: function () {
            
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm = this.form
            
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            console.log(content)
            console.log(name)
            this.model.save(name,content).then(function (e) {
                let li = document.createElement('li')
                li.innerText = `${name}:${content}`
                console.log(content)
                console.log(name)
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
            })
        }
    }


controller.init(view,model)


}.call()

//创建TestObject表
//var TestObject = AV.Object.extend('TestObject');
// 在表中创建一条数据
//var testObject = new TestObject();
//数据内容是words：xxx
//testObject.set('words', 'Hello world!');
//如果保存成功则打印出保存成功 
//testObject.save().then(function (testObject) {
//console.log('保存成功。')
//})