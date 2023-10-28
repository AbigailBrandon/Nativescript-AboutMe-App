import { createViewModel } from './main-view-model';

import { Frame } from "@nativescript/core";

export function onAboutTap() {
  const topmost = Frame.topmost();
  topmost.navigate("about-page");
}

export function onSkillsTap() {
  const topmost = Frame.topmost();
  topmost.navigate("skills-page");
}

export function onContactTap() {
  const topmost = Frame.topmost();
  topmost.navigate("contact-page");
}

export function onPtTap() {
  const topmost = Frame.topmost();
  topmost.navigate("portfolio-page");
}