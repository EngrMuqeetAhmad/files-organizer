# files-organizer
A JavaScript program to organize files inside any directory


**Run Files Organizer**
To run this program clone this directory

```js
  node index.js "foder path from root"
```



**For Linux OS:**
In Linux kindly Replace all "\\" with "//", all set.
For Instance 
...js
fs.existsSync(absolutePath + `\\${folder}`)
...
With
...js
fs.existsSync(absolutePath + `//${folder}`)
...