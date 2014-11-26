Ext.define('ys.controller.BannerCtrl',{
    extend : 'Ext.app.Controller',
    refs : [{
        ref : 'mainPanel',
        selector : "#mainPanel"
    },{
        ref : 'banner',
        selector : "#banner"
    },{
        ref : 'test',
        selector:'#test'
    }],
    init : function() {
        this.control({
            '#banner' : {
                afterrender : this.showMenus
            },
            '#banner toolbar #save' : {
                click : this.save
            },
            '#banner toolbar #submit' : {
                click : this.submit
            },
            '#banner toolbar #exit' : {
                click : this.exit
            },
            '#banner toolbar #export' :{
                click : this.exportFun
            },
            '#banner toolbar #export' :{
                click : this.testFun
            }
        });
    },
    showMenus : function(){
        var banner = this.getBanner();
        var mainPanel = this.getMainPanel();
        mainPanel.removeAll();

//                            mainPanel.add(Ext.create("eval.view.report.paper.PaperPanel",{itemId:"paperPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.writingsAndPatent.WritingsAndPatentPanel",{itemId:"writingsAndPatentPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.award.AwardPanel",{itemId:"awardPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.project.ProjectPanel",{itemId:"projectPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.conference.ConferencePanel",{itemId:"conferencePanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.teaching.TeachingPanel",{itemId:"teachingPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.instructor.InstructorPanel",{itemId:"instructorPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.postAndDirector.PostAndDirectorPanel",{itemId:"postAndDirectorPanel",closable:false}));
                            mainPanel.add(Ext.create("ys.view.other.OtherPanel",{itemId:"otherPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.help.NotePanel",{itemId:"notePanel",closable:false}));
                            mainPanel.add(Ext.create("ys.view.other.PerformancePanel",{itemId:"performancePanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.paper.PaperPanel",{itemId:"paperPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.writingsAndPatent.WritingsAndPatentPanel",{itemId:"writingsAndPatentPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.award.AwardPanel",{itemId:"awardPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.project.ProjectPanel",{itemId:"projectPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.conference.ConferencePanel",{itemId:"conferencePanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.teaching.TeachingPanel",{itemId:"teachingPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.instructor.InstructorPanel",{itemId:"instructorPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.postAndDirector.PostAndDirectorPanel",{itemId:"postAndDirectorPanel",closable:false}));
//                            mainPanel.add(Ext.create("eval.view.report.help.NotePanel",{itemId:"notePanel",closable:false}));
    },
    testFun : function() {
        var arr = ["13-14","14-15"];
        var str = "13-14,2;13-14,3;14-15,1;14-15,2;14-15,3";
        var data = str.split(";");
        console.log(data);
        var xnobj = {"id":"",name:""};
        var xnData = [];
        var xqData = [{"id":"",name:""}];
        Array.prototype.del = function() {
            var a = {}, c = [], l = this.length;
            for (var i = 0; i < l; i++) {
                var b = this[i];
                var d = (typeof b) + b;
                if (a[d] === undefined) {
                    // 1, 2, "2", 3 被 push
                    c.push(b);
                    // 这里 = 1 只是给此属性一个值，例如 a = {number2: 1}
                    a[d] = 1;
                }
            }
            return c;
        }
        for(var i = 0;i<data.length;i++){
            var val  = data[i].split(",").shift();
            xnData.push(val);
            xqData.push(data[i].split(",").pop());
        }
        console.log(xnData);
        var result = [];
        for (var i = 0; i < xnData.del().length; i++) {
            var obj = {id: xnData[i], name: xnData[i]};
            result.push(obj);
        }
        console.log(result);
    },
    save : function() {
        Ext.Msg.alert("提示","保存！");
        var banner = this.getBanner();
        var self = this;
        this.getAllGrid();//获取grid
        var excuteGrid = [];
    },
    submit : function() {
        Ext.Msg.alert("提示","提交！");
    },
    exportFun : function() {
        Ext.Msg.alert("提示","导出！");
    },
    exit : function() {
        Ext.Msg.alert("提示","退出！");
    },
    getAllGrid : function(){
        //获取要打印页面的grid
        var self = this;
        paperCompleteGrid = self.getPaper().down('#completePaperGrid');
    }
});
