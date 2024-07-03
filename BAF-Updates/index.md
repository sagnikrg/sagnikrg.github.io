*GPT4o summary of BAF daily BAF updates*

[[Latest](https://sagnikrg.github.io/BAF-Updates/#latest)] at bottom.


<a name="latest"></a>

02 Jul, 24 5:24:06 PM:

Here's a summary of the email:

---

**Summary: BAF System Upgrade Update**

The BAF team has upgraded most of the worker nodes, including many "medium" I/O nodes. However, due to low job activity, the stability of the cooling system under increased load and large-scale testing of the new OS haven't been fully tested. Consequently, most "high" I/O nodes aren't yet in regular use.

**Key Points:**
- **/cephfs Access:** If your workflow requires /cephfs on desktops, you need to copy outputs to your desktop home directory or adjust job scripts accordingly.
- **Current Status:** All nodes (except GPU nodes) now run the new OS. Further upgrades will continue to restore /cephfs access on desktop machines.

Happy computing,
BAF Operators

