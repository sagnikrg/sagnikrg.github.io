### An working manual for
##  Param-Brahma

This file talks about the details about how to use our in house supercomputer.

**Logging in:**

To connect to the NSM server you have to use ssh. 
From terminal the format for the same is:

> ssh **your_account@ip_addresss**

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

**Running Codes, Submitting Jobs:**

**A Sample Script File (And its basics):**

**Monitoring Jobs:**
> squeue
> sacct

**Parallelising A Code:**
