# File Scan OPSWAT
The program  to scan every files using OPSWAT's MetaDefender API.

# Initial

This solution uses Node.JS LTS (8.x). I also tested it using the  Node 10 and that also seems to work, so anything above 8 would work. 

Install npm to run program:

``` npm install ```


Place your API key on `opswat.js:6`.

```
  ...
  const OpswatAPI = {
  baseUrl: 'https://api.metadefender.com/v2',
  apiKey: 'ebb942673054be06dbb4e36ddf416294',  // Copy paste the API key keep quotes and comma
  
  ...
```

I've successfully tested and ran the solution on  Windows it would work as well given the  Node environment.

# How to run

To scan a file use below command with file name

```
  node scan.js sample.txt
```

it took some time. wait couple of minutes

# Steps
The given steps follwed

1. Calculate the hash of the given samplefile.txt
2. Perform a hash lookup against metadefender.opswat.com and see if their are previously cached results for the file
3. If results found then skip to 6
4. If results not found then upload the file, receive a data_id
5. Repeatedly pull on the data_id to retrieve results
6. Display results 

The abbreviated code snippet below (original found around scan.js:20) attempts to clearly illustrate these steps.

```  
  // 1. Calculate the hash of the given samplefile.txt
  return hashFile(targetFile)
  
  // 2. Perform a hash lookup against metadefender.opswat.com and see if their are previously cached results for the file
  .then((hash) => OpswatAPI.getHashLookup(hash))
  
  .then((response) => {
    // 3. If results found then skip to 6
    if (response.file_id) 
      return response;
    // 4. If results not found then upload the file, receive a data_id
    else {
      return scanFile(targetFile); 
    }
  })
  
  // 6. Display results
  .then((results) => printResults(targetFile, results))
  
 ```
 


![Screenshot](output.png)

# Conclusion

- All HTTP requests in `opswat.js`.
- Used promises.

