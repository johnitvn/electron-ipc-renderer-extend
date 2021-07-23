# electron-ipc-renderer-extend

This package provides a simpler use for ipcRenderer in electron

## Install

This package can install via npm 
 	
	npm install electron-ipc-renderer-extend

## Example

### 1. Trigger one event with no data need to send

    const IpcRendererExt =  require('electron-ipc-renderer-extend');
	
	IpcRendererExt.on('EVENT_NAME');
	
### 2. Trigger one event with attack data

    const IpcRendererExt =  require('electron-ipc-renderer-extend');
	const data = {name: 'example', type: 'string'}
	IpcRendererExt.on('EVENT_NAME',data);
	
### 3. Trigger one event with attack data and callback when event reply

    const IpcRendererExt =  require('electron-ipc-renderer-extend');
	const data = {name: 'example', type: 'string'}
	IpcRendererExt.on('EVENT_NAME',data, (event, data)=> {
		console.log(data)
	});

```
ipcMain need to reply with the same event name if you are using this pagekage
```
