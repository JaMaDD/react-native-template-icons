"use client";

/**
 * This is a generated file. If you modify it manually, your changes will be lost!
 * This file was generated from packages/generator-react-native-vector-icons/src/app/templates
 * If you're contributing to react-native-vector-icons, make the change there; otherwise it'll be lost
 *
 * ReactNativeTemplate icon set component.
 * Usage: <Icon name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from "@react-native-vector-icons/common";

import glyphMap from "../glyphmaps/ReactNativeTemplateIcons.json";

export const Icon = createIconSet(glyphMap, {
  postScriptName: "reactnativetemplateicons",
  fontFileName: "reactnativetemplateicons.ttf",
  fontSource: require("../fonts/reactnativetemplateicons.ttf"), // eslint-disable-line @typescript-eslint/no-require-imports, global-require
});

export type IconName = keyof typeof glyphMap;

export enum IconSize {
  XXS = 12,
  XS = 18,
  S = 24,
  M = 30,
  L = 36,
  XL = 42,
  XXL = 48,
}

/** @alias */
export default Icon;
