import type { IconKey } from "./icons";

/**
 * The Figma uses one set of two-tone navy illustrations (not line icons) inside white tiles.
 * Each semantic icon key maps to the closest existing illustration so content files stay readable.
 */
const A = "/assets";
export const ILLUSTRATIONS: Record<IconKey, string> = {
  activity: `${A}/career/icon_engineering.svg`,
  award: `${A}/career/icon_quality.svg`,
  badge: `${A}/grievance/icon_warranty.svg`,
  battery: `${A}/dcdb/icon_1_3.svg`,
  building: `${A}/about/serve_epc.svg`,
  calculator: `${A}/grievance/icon_billing.svg`,
  clipboard: `${A}/our-infrastructure/icon_quality.svg`,
  clock: `${A}/career/icon_project_ops.svg`,
  cpu: `${A}/about/serve_integrators.svg`,
  factory: `${A}/our-infrastructure/icon_manufacturing.svg`,
  file: `${A}/career/icon_corporate.svg`,
  globe: `${A}/about/serve_export.svg`,
  handshake: `${A}/about/serve_distributors.svg`,
  headset: `${A}/career/icon_sales.svg`,
  home: `${A}/grievance/icon_installation.svg`,
  rupee: `${A}/grievance/icon_billing.svg`,
  layers: `${A}/our-infrastructure/icon_assembly.svg`,
  leaf: `${A}/dcdb/icon_1_5.svg`,
  pin: `${A}/contact/icon_map_pin.svg`,
  monitor: `${A}/about/serve_epc.svg`,
  package: `${A}/about/serve_distributors.svg`,
  ruler: `${A}/our-infrastructure/icon_technical.svg`,
  search: `${A}/our-infrastructure/icon_machinery.svg`,
  settings: `${A}/our-infrastructure/icon_machinery.svg`,
  shield: `${A}/grievance/icon_product.svg`,
  sun: `${A}/dcdb/icon_1_4.svg`,
  truck: `${A}/about/serve_distributors.svg`,
  users: `${A}/career/icon_corporate.svg`,
  wrench: `${A}/about/serve_installers.svg`,
  zap: `${A}/grievance/icon_net_metering.svg`,
};

/** Hex-process icons downloaded from the Figma delivery-flow frames. */
export const HEX_ICONS = [1, 2, 3, 4, 5].map((n) => `/assets/pages/shared/hex_${n}.svg`);
