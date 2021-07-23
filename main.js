const {ipcRenderer} =  require('electron');

module.exports = {
    on : function(eventName,publishData, subscribeCallback){
        if(subscribeCallback!=null && subscribeCallback!= undefined){
            ipcRenderer.on(eventName,subscribeCallback);
        }
        ipcRenderer.send(eventName,publishData);
    }
}