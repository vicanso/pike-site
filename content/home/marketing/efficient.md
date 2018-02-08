---
title: 高效
order: 1
---

得益于fasthttp与badger的高性能，Pike在测试机上对于缓存的请求能达到100k/rps(Intel Celeron® G1610T 2x 2.30 GHz/8GB内存)，而转发接口的性能损耗也在1ms左右，足以应对高访问量请求处理。
