## GPT4o summary of daily BAF updates:

[[Latest](https://sagnikrg.github.io/BAF-Updates/#latest)] at bottom.

25 Jun, 24 7:07:37 PM:

Here's a summary of the email:

---

**Summary: /cephfs Access Issues on Desktops**

BAF has received reports of access to /cephfs from desktops hanging under high activity. The issue does not affect access from within the cluster or interactive jobs.

**Key Points:**
- **Issue:** Desktop access to /cephfs may hang, especially under high activity.
- **Current Status:** Investigation is ongoing without a clear trigger identified yet.
- **Next Steps:** The team hopes to resolve this before the next Ceph upgrade, which requires an OS upgrade and will take weeks. The issue might be related to the current Ceph release.

Cheers,
BAF Operators

27 Jun, 24 4:24:00 PM:

Here's a summary of the email:

---

**Summary: BAF System Upgrade Progress**

The BAF team is prioritizing the OS upgrade for worker nodes to eventually upgrade the OS of file servers, aiming to restore /cephfs on desktops. This process will be gradual.

**Key Points:**
- **Current Status:** Initial worker nodes with the new OS are running, but still require stability testing, particularly with InfiniBand hardware.
- **Access:** These nodes are not yet available for regular jobs.
- **Expectations:** A small fraction of high I/O nodes may be reopened by the weekend to accommodate high I/O job demands and test the new setup and cooling system.

Cheers,
BAF Operators


28 Jun, 24 4:02:11 PM:

Here's a summary of the email:

---

**Summary: High I/O Nodes and CephFS Update**

BAF has reintroduced the first high I/O worker nodes with the new OS and updated CephFS clients. High-IO jobs are now running on four nodes, with interactive and batch job slots available.

**Key Points:**
- **Cooling Stability:** Due to ongoing concerns, only 20% of high I/O machines will be brought back before the weekend.
- **Performance Improvements:** Initial tests show improved write performance and I/O throughput stability.
- **User Action:** If you notice any changes in job behavior, report them for investigation.

**Future Steps:**
- Revive all nodes with the new OS.
- Upgrade previously used nodes.
- Ongoing work on the CephFS file server upgrade to restore /cephfs on desktops.

**Note:** Recovery will take several weeks due to other commitments, including a move to a new building. Users relying on /cephfs from desktops should use provided workarounds.

Cheers and have a nice weekend,
BAF Operators


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

