//// [/root/folder1/file1.ts]


//// [/root/folder1/file1_1/index.d.ts]


//// [/root/generated/folder1/file2.ts]


//// [/root/generated/folder2/file3.ts]


Resolving "./file2" from /root/folder1/file1.ts
Resolution:: {
  "resolvedModule": {
    "resolvedFileName": "/root/generated/folder1/file2.ts",
    "extension": ".ts",
    "isExternalLibraryImport": false
  },
  "failedLookupLocations": [
    "/root/folder1/file2.ts",
    "/root/folder1/file2.tsx",
    "/root/folder1/file2.d.ts",
    "/root/folder1/file2/package.json",
    "/root/folder1/file2/index.ts",
    "/root/folder1/file2/index.tsx",
    "/root/folder1/file2/index.d.ts"
  ],
  "affectingLocations": [],
  "resolutionDiagnostics": []
}

Resolving "../folder1/file1" from /root/generated/folder2/file3.ts
Resolution:: {
  "resolvedModule": {
    "resolvedFileName": "/root/folder1/file1.ts",
    "extension": ".ts",
    "isExternalLibraryImport": false
  },
  "failedLookupLocations": [
    "/root/generated/folder1/file1.ts",
    "/root/generated/folder1/file1.tsx",
    "/root/generated/folder1/file1.d.ts",
    "/root/generated/folder1/file1/package.json",
    "/root/generated/folder1/file1/index.ts",
    "/root/generated/folder1/file1/index.tsx",
    "/root/generated/folder1/file1/index.d.ts"
  ],
  "affectingLocations": [],
  "resolutionDiagnostics": []
}

Resolving "../folder1/file1_1" from /root/generated/folder2/file3.ts
Resolution:: {
  "resolvedModule": {
    "resolvedFileName": "/root/folder1/file1_1/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": false
  },
  "failedLookupLocations": [
    "/root/generated/folder1/file1_1.ts",
    "/root/generated/folder1/file1_1.tsx",
    "/root/generated/folder1/file1_1.d.ts",
    "/root/generated/folder1/file1_1/package.json",
    "/root/generated/folder1/file1_1/index.ts",
    "/root/generated/folder1/file1_1/index.tsx",
    "/root/generated/folder1/file1_1/index.d.ts",
    "/root/folder1/file1_1.ts",
    "/root/folder1/file1_1.tsx",
    "/root/folder1/file1_1.d.ts",
    "/root/folder1/file1_1/package.json",
    "/root/folder1/file1_1/index.ts",
    "/root/folder1/file1_1/index.tsx"
  ],
  "affectingLocations": [],
  "resolutionDiagnostics": []
}

//// [/root/folder1/file1.ts]


//// [/root/folder1/file1_1/index.d.ts]


//// [/root/generated/folder1/file2.ts]


//// [/root/generated/folder2/file3.ts]


Resolving "./file2" from /root/folder1/file1.ts with host that doesnt have directoryExists
Resolution:: {
  "resolvedModule": {
    "resolvedFileName": "/root/generated/folder1/file2.ts",
    "extension": ".ts",
    "isExternalLibraryImport": false
  },
  "failedLookupLocations": [
    "/root/folder1/file2.ts",
    "/root/folder1/file2.tsx",
    "/root/folder1/file2.d.ts",
    "/root/folder1/file2/package.json",
    "/root/folder1/file2/index.ts",
    "/root/folder1/file2/index.tsx",
    "/root/folder1/file2/index.d.ts"
  ],
  "affectingLocations": [],
  "resolutionDiagnostics": []
}

Resolving "../folder1/file1" from /root/generated/folder2/file3.ts with host that doesnt have directoryExists
Resolution:: {
  "resolvedModule": {
    "resolvedFileName": "/root/folder1/file1.ts",
    "extension": ".ts",
    "isExternalLibraryImport": false
  },
  "failedLookupLocations": [
    "/root/generated/folder1/file1.ts",
    "/root/generated/folder1/file1.tsx",
    "/root/generated/folder1/file1.d.ts",
    "/root/generated/folder1/file1/package.json",
    "/root/generated/folder1/file1/index.ts",
    "/root/generated/folder1/file1/index.tsx",
    "/root/generated/folder1/file1/index.d.ts"
  ],
  "affectingLocations": [],
  "resolutionDiagnostics": []
}

Resolving "../folder1/file1_1" from /root/generated/folder2/file3.ts with host that doesnt have directoryExists
Resolution:: {
  "resolvedModule": {
    "resolvedFileName": "/root/folder1/file1_1/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": false
  },
  "failedLookupLocations": [
    "/root/generated/folder1/file1_1.ts",
    "/root/generated/folder1/file1_1.tsx",
    "/root/generated/folder1/file1_1.d.ts",
    "/root/generated/folder1/file1_1/package.json",
    "/root/generated/folder1/file1_1/index.ts",
    "/root/generated/folder1/file1_1/index.tsx",
    "/root/generated/folder1/file1_1/index.d.ts",
    "/root/folder1/file1_1.ts",
    "/root/folder1/file1_1.tsx",
    "/root/folder1/file1_1.d.ts",
    "/root/folder1/file1_1/package.json",
    "/root/folder1/file1_1/index.ts",
    "/root/folder1/file1_1/index.tsx"
  ],
  "affectingLocations": [],
  "resolutionDiagnostics": []
}
