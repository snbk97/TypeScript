Info 0    [00:00:17.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:00:18.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/b/moduleFile1.ts"
      },
      "seq": 1,
      "type": "request"
    }
Before request
//// [/a/b/moduleFile1.ts]
export function Foo() { };

//// [/a/b/file1Consumer1.ts]
import {Foo} from "./moduleFile1"; let y = Foo();

//// [/a/b/tsconfig.json]
{
                        "compileOnSave": true,
                        "files": ["/a/b/file1Consumer1.ts"]
                    }

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:00:19.000] Search path: /a/b
Info 3    [00:00:20.000] For info: /a/b/moduleFile1.ts :: Config file name: /a/b/tsconfig.json
Info 4    [00:00:21.000] Creating configuration project /a/b/tsconfig.json
Info 5    [00:00:22.000] FileWatcher:: Added:: WatchInfo: /a/b/tsconfig.json 2000 undefined Project: /a/b/tsconfig.json WatchType: Config file
Info 6    [00:00:23.000] Config: /a/b/tsconfig.json : {
 "rootNames": [
  "/a/b/file1Consumer1.ts"
 ],
 "options": {
  "configFilePath": "/a/b/tsconfig.json"
 }
}
Info 7    [00:00:24.000] FileWatcher:: Added:: WatchInfo: /a/b/file1Consumer1.ts 500 undefined WatchType: Closed Script info
Info 8    [00:00:25.000] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info 9    [00:00:26.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 10   [00:00:27.000] DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/tsconfig.json WatchType: Type roots
Info 11   [00:00:28.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/b/node_modules/@types 1 undefined Project: /a/b/tsconfig.json WatchType: Type roots
Info 12   [00:00:29.000] Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 13   [00:00:30.000] Project '/a/b/tsconfig.json' (Configured)
Info 14   [00:00:31.000] 	Files (3)
	/a/lib/lib.d.ts
	/a/b/moduleFile1.ts
	/a/b/file1Consumer1.ts


	../lib/lib.d.ts
	  Default library for target 'es3'
	moduleFile1.ts
	  Imported via "./moduleFile1" from file 'file1Consumer1.ts'
	file1Consumer1.ts
	  Part of 'files' list in tsconfig.json

Info 15   [00:00:32.000] -----------------------------------------------
Info 16   [00:00:33.000] Project '/a/b/tsconfig.json' (Configured)
Info 16   [00:00:34.000] 	Files (3)

Info 16   [00:00:35.000] -----------------------------------------------
Info 16   [00:00:36.000] Open files: 
Info 16   [00:00:37.000] 	FileName: /a/b/moduleFile1.ts ProjectRootPath: undefined
Info 16   [00:00:38.000] 		Projects: /a/b/tsconfig.json
After request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/file1consumer1.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 16   [00:00:39.000] response:
    {
      "responseRequired": false
    }
Info 17   [00:00:40.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/b/file1Consumer1.ts"
      },
      "seq": 2,
      "type": "request"
    }
Before request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/b/file1consumer1.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 18   [00:00:41.000] FileWatcher:: Close:: WatchInfo: /a/b/file1Consumer1.ts 500 undefined WatchType: Closed Script info
Info 19   [00:00:42.000] Search path: /a/b
Info 20   [00:00:43.000] For info: /a/b/file1Consumer1.ts :: Config file name: /a/b/tsconfig.json
Info 21   [00:00:44.000] Project '/a/b/tsconfig.json' (Configured)
Info 21   [00:00:45.000] 	Files (3)

Info 21   [00:00:46.000] -----------------------------------------------
Info 21   [00:00:47.000] Open files: 
Info 21   [00:00:48.000] 	FileName: /a/b/moduleFile1.ts ProjectRootPath: undefined
Info 21   [00:00:49.000] 		Projects: /a/b/tsconfig.json
Info 21   [00:00:50.000] 	FileName: /a/b/file1Consumer1.ts ProjectRootPath: undefined
Info 21   [00:00:51.000] 		Projects: /a/b/tsconfig.json
After request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 21   [00:00:52.000] response:
    {
      "responseRequired": false
    }
Info 22   [00:00:53.000] request:
    {
      "command": "compileOnSaveAffectedFileList",
      "arguments": {
        "file": "/a/b/moduleFile1.ts",
        "projectFileName": "/a/b/tsconfig.json"
      },
      "seq": 3,
      "type": "request"
    }
Before request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

After request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 23   [00:00:54.000] response:
    {
      "response": [
        {
          "projectFileName": "/a/b/tsconfig.json",
          "fileNames": [
            "/a/b/moduleFile1.ts",
            "/a/b/file1Consumer1.ts"
          ],
          "projectUsesOutFile": false
        }
      ],
      "responseRequired": true
    }
Info 24   [00:00:55.000] request:
    {
      "command": "change",
      "arguments": {
        "file": "/a/b/moduleFile1.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "export var T: number;"
      },
      "seq": 4,
      "type": "request"
    }
Before request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

After request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 25   [00:00:56.000] response:
    {
      "responseRequired": false
    }
Info 26   [00:00:57.000] request:
    {
      "command": "compileOnSaveAffectedFileList",
      "arguments": {
        "file": "/a/b/moduleFile1.ts",
        "projectFileName": "/a/b/tsconfig.json"
      },
      "seq": 5,
      "type": "request"
    }
Before request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 27   [00:00:58.000] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info 28   [00:00:59.000] Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 29   [00:01:00.000] Different program with same set of files
After request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 30   [00:01:01.000] response:
    {
      "response": [
        {
          "projectFileName": "/a/b/tsconfig.json",
          "fileNames": [
            "/a/b/moduleFile1.ts",
            "/a/b/file1Consumer1.ts"
          ],
          "projectUsesOutFile": false
        }
      ],
      "responseRequired": true
    }
Info 31   [00:01:02.000] request:
    {
      "command": "change",
      "arguments": {
        "file": "/a/b/moduleFile1.ts",
        "line": 1,
        "offset": 1,
        "endLine": 1,
        "endOffset": 1,
        "insertString": "var T1: number;"
      },
      "seq": 6,
      "type": "request"
    }
Before request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

After request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 32   [00:01:03.000] response:
    {
      "responseRequired": false
    }
Info 33   [00:01:04.000] request:
    {
      "command": "compileOnSaveAffectedFileList",
      "arguments": {
        "file": "/a/b/moduleFile1.ts",
        "projectFileName": "/a/b/tsconfig.json"
      },
      "seq": 7,
      "type": "request"
    }
Before request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 34   [00:01:05.000] Starting updateGraphWorker: Project: /a/b/tsconfig.json
Info 35   [00:01:06.000] Finishing updateGraphWorker: Project: /a/b/tsconfig.json Version: 3 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 36   [00:01:07.000] Different program with same set of files
After request

PolledWatches::
/a/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/b/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

Info 37   [00:01:08.000] response:
    {
      "response": [
        {
          "projectFileName": "/a/b/tsconfig.json",
          "fileNames": [
            "/a/b/moduleFile1.ts"
          ],
          "projectUsesOutFile": false
        }
      ],
      "responseRequired": true
    }