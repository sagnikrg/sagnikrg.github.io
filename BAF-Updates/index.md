## GPT4o summary of daily BAF updates:

[[Latest](https://sagnikrg.github.io/BAF-Updates/#latest)] at bottom.


24 Jun, 24 11:50:28 PM

Here's a summary of the email:

---

**Summary: Cooling System Status Update**

The technical department inspected the cooling system and found one redundant device completely unresponsive and the other in error.

**Key Points:**
- **Inspection Results:** One redundant cooling device is broken, and the other was reset after being in error.
- **Current Status:** Optimistic that temperatures will either decrease or remain stable until tomorrow.
- **Action Taken:** The core part of BAF (CephFS_IO="high") will remain down until cooling is stable.
- **Future Steps:** The broken cooling device will be repaired soon to restore redundancy.

Cheers and have a good night,
Oliver

25 Jun, 24 1:46:20 AM

Here's a summary of the email:

---

**Summary: Ongoing Cooling System Issues**

The BAF team reports that the cooling system reset did not resolve the issue, and temperatures are still rising.

**Key Points:**
- **Temperature Status:** Temperatures continue to rise despite the cooling system reset.
- **Current Actions:** All redundant and non-critical systems have been shut off to manage the temperature.
- **Next Steps:** The team expects to maintain safe temperatures until morning, when technicians can further investigate.

More updates will be provided in the morning.

Cheers,
Oliver

25 Jun, 24 1:52:04 PM

Here's a summary of the email:

---

**Summary: Cooling System Update**

The BAF team provides an update on the cooling system issues. One cooling machine remains broken, and the other one, despite showing 100% operational status, isn't providing any cooling power.

**Key Points:**
- **Current Status:** One cooling machine is broken, and the other isn't working properly.
- **Technical Support:** The cooling system technicians have been alerted and arrived an hour ago. The hot weather has caused multiple outages, delaying their response.
- **Temporary Measures:** The server room is open and under surveillance, with big fans providing minimal cooling.

Further updates will be provided as soon as available.

Cheers,
BAF Operators

25 Jun, 24 2:23:45 PM

Here's a summary of the email:

---

**Summary: Upcoming CephFS Storage Upgrade**

While technicians work on the cooling system (currently with reduced capacity), the BAF team will upgrade the CephFS storage (BAF User Data Directory / BUDDY, i.e., /cephfs, not home storage). This upgrade includes several major updates missed previously due to the need for extensive testing.

**Key Points:**
- **Cooling System:** Reduced cooling capacity is partially restored.
- **Upgrade:** Planned upgrade for CephFS storage, aiming for a smooth process.
- **Backup Notice:** There are no backups for the CephFS / BUDDY storage.

The team will keep users updated on the progress.

Cheers,
BAF Operators

25 Jun, 24 4:48:16 PM:

Here's a summary of the email:

---

**Summary: Filesystem Upgrade Update**

The BAF team has completed today's filesystem upgrade.

**Key Points:**
- **Current Status:** Today's filesystem upgrade is finished.
- **Upcoming Work:** Further filesystem upgrades will occur in the coming weeks after migrating all BAF servers to a new OS. This migration should not cause any noticeable downtime for users.

Cheers,
BAF Operators

25 Jun, 24 4:48:30 PM:

Here's a summary of the email:

---

**Summary: Filesystem Upgrade Update**

The BAF team has completed today's filesystem upgrade.

**Key Points:**
- **Current Status:** Today's filesystem upgrade is finished.
- **Upcoming Work:** Further filesystem upgrades will occur in the coming weeks after migrating all BAF servers to a new OS. This migration should not cause any noticeable downtime for users.

Cheers,
BAF Operators


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

