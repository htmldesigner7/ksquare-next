# Lighthouse (mobile preset, performance only, production build, 1 run/page)

| Route | Perf | CLS | TBT (ms) | LCP (ms) |
|---|---|---|---|---|
| / | 59 | 0.000 | 1308 | 4485 |
| /about-us | 50 | 0.000 | 1165 | 6287 |
| /about-us/awards | 62 | 0.000 | 713 | 5633 |
| /about-us/certifications | 60 | 0.000 | 828 | 5686 |
| /about-us/leadership-team | 71 | 0.000 | 466 | 4654 |
| /about-us/news-events | 75 | 0.000 | 348 | 4680 |
| /about-us/our-presence | 63 | 0.000 | 576 | 5215 |
| /about-us/press-releases | 64 | 0.000 | 524 | 5987 |
| /blog | 63 | 0.000 | 525 | 5781 |
| /blog/dcdb-vs-acdb-difference | 54 | 0.000 | 1233 | 5216 |
| /career | 70 | 0.000 | 221 | 6001 |
| /contact | 56 | 0.000 | 1123 | 5076 |
| /download-resources | 72 | 0.000 | 446 | 4708 |
| /faqs | 57 | 0.000 | 1111 | 5136 |
| /grievance | 56 | 0.000 | 770 | 5655 |
| /manufacturing | 79 | 0.000 | 545 | 3267 |
| /manufacturing/custom-product-development | 68 | 0.000 | 550 | 4763 |
| /manufacturing/private-label-manufacturing | 86 | 0.000 | 326 | 3248 |
| /our-infrastructure | 60 | 0.000 | 435 | 7219 |
| /partners | 63 | 0.000 | 608 | 5307 |
| /partners/become-a-partner | 73 | 0.000 | 534 | 4111 |
| /partners/export-business | 69 | 0.000 | 540 | 4776 |
| /partners/oem-partnership | 62 | 0.000 | 850 | 4778 |
| /payment-details | 64 | 0.000 | 584 | 4908 |
| /products | 58 | 0.000 | 798 | 5381 |
| /products/dcdb | 63 | 0.000 | 619 | 5150 |
| /products/dcdb/1 | 58 | 0.000 | 775 | 5463 |
| /products/ksquare-inverter | 64 | 0.000 | 494 | 5677 |
| /projects | 49 | 0.000 | 1246 | 7248 |
| /resources | 65 | 0.000 | 566 | 5049 |
| /solar-calculators | 63 | 0.000 | 545 | 5510 |
| /solutions | 68 | 0.000 | 482 | 5043 |
| /solutions/annual-maintenance | 78 | 0.000 | 339 | 4138 |
| /solutions/epc-solutions | 64 | 0.000 | 588 | 5067 |
| /solutions/export-solutions | 78 | 0.000 | 312 | 4172 |
| /solutions/net-metering-support | 65 | 0.000 | 501 | 5394 |
| /solutions/oem-solutions | 60 | 0.000 | 737 | 5214 |
| /solutions/pm-surya-ghar | 61 | 0.000 | 510 | 6114 |
| /solutions/remote-monitoring | 75 | 0.000 | 363 | 4524 |
| /solutions/residential-solar | 75 | 0.000 | 296 | 4808 |
| /solutions/rooftop-solar | 72 | 0.000 | 486 | 4416 |
| /solutions/rooftop-solar-for-flats | 63 | 0.000 | 561 | 5328 |
| /solutions/solar-consultation | 77 | 0.000 | 241 | 4820 |
| /solutions/subsidy-assistance | 77 | 0.000 | 291 | 4434 |
| /track-solar-status | 63 | 0.000 | 697 | 5358 |

Notes: production build (`next build && next start`), Lighthouse mobile preset (simulated 4x CPU / slow-4G), headless Chromium 156, run on a busy Windows dev machine, so absolute scores are pessimistic and noisy (±5-8 pts). Compare before/after only with the identical script (`motion-audit/scripts/lighthouse.mjs`).
