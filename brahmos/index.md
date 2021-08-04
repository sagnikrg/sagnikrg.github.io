### An working manual for
##  Param-Brahma

This file talks about the details about how to use our in house supercomputer.

**Logging in:**

To connect to the NSM server you have to use ssh. 
From terminal the format for the same is:

> ssh &emsp;< your_account@ip_addresss >

If things goes well it will connect to the user node and will print the dialouge box

#####################################################
 <br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;   Welcome to PARAM-Brahma                                
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;   All connections are monitored and recorded                      
&emsp;&emsp;&emsp;&emsp;    Disconnect IMMEDIATELY if you are not an authorized user!       
#####################################################

> Enter all the relevant credentials 
  (Captcha and Password). 

**Note:** Captchas are Case Sensitive.

You will be in the home directory of your account. It is instructable to create your own folder in case you are using a shared account, 
(which probably is the case for you if you are a Master's Student.)

**Logging Out:** Press Ctrl+D

**Terminal Commands:** The ususal Terminal commands functions. For e.g. You can use 

 * **mkdir _directoryname_** to create directory. 
 * **ls** to show files in current directory etc.
 * **rm _filename_** to remove a certain file.
 * **rm** *sh to remove all the file ending with "sh" (similarly for any other phrases) in the present directory.
 

To familiarise with such basic commands, an usual place to look at is: [http://www.iiserpune.ac.in/~pgoel/Tutorial1.pdf](http://www.iiserpune.ac.in/~pgoel/Tutorial1.pdf)
 <br /> 

**Copying Files (To and Fro):**

Copying files (codes/job scripts) to and (output/error files) from the NSM to local machine can be and is usually done using the **scp** command. The format for the same is (while using locally),

> scp &emsp;<address directory from/flienames> <address directory to>

However while doing the same with NSM, one ought to us it with the ip address. The format is,

> scp &emsp;<your_account@ip_addresss:address directory from/flienames> <address directory to>

**NB:**
 
1. To copy to the present directory just use /. Similarly while pasting
2. /*"phrase" copies (or pastes) all the files ending with "phrase" in the directory you have specified, just like the **rm** command.
3. While using the IISER wide ip this will suffice. But if you are accessing the same using the public ip you ought to use port with the same. For that **note** unlike ssh, scp uses captial -P for port, not -p. So, the format will be modified as,

> scp &emsp;-P&emsp; #####&emsp; <your_account@ip_addresss:address directory from/flienames> <address directory to>

where ##### denotes the port number provided to you by the IT department.

**Further clarification:** <https://stackoverflow.com/questions/10341032/scp-with-port-number-specified>
 
**Running Codes, Submitting Jobs:**

**A Sample Script File (And its basics):**

**Monitoring Jobs:**
> squeue

> sacct&emsp -j &emspjobid &emsp--format=User,JobID,Jobname,partition,state,time,start,end,elapsed,MaxRss,MaxVMSize,nnodes,ncpus,nodelist

**Parallelising A Code:** 
