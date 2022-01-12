import { Injectable } from '@angular/core';
import * as tinycolor from 'tinycolor2'

export interface Color {
  name: string;
  hex: string;
  darkContrast: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  primaryColorPalette: Color[] = [];
  secondaryColorPalette: Color[] = [];

  constructor() { }

  savePrimaryColor(primaryColor: string) {
    this.primaryColorPalette = this.computeColors(primaryColor);

    for (const color of this.primaryColorPalette) {
      const key = `--theme-primary-${color.name}`;
      const value = color.hex;
      document.documentElement.style.setProperty(key, value);
    }
  }

  saveSecondaryColor(secondaryColor: string) {
    this.secondaryColorPalette = this.computeColors(secondaryColor);

    for (const color of this.secondaryColorPalette) {
      const key = `--theme-secondary-${color.name}`;
      const value = color.hex;
      document.documentElement.style.setProperty(key, value);
    }
  }

  computeColors(hex: string): Color[] {
    return [
      this.getColorObject(tinycolor(hex).lighten(52), '50'),
      this.getColorObject(tinycolor(hex).lighten(37), '100'),
      this.getColorObject(tinycolor(hex).lighten(26), '200'),
      this.getColorObject(tinycolor(hex).lighten(12), '300'),
      this.getColorObject(tinycolor(hex).lighten(6), '400'),
      this.getColorObject(tinycolor(hex), '500'),
      this.getColorObject(tinycolor(hex).darken(6), '600'),
      this.getColorObject(tinycolor(hex).darken(12), '700'),
      this.getColorObject(tinycolor(hex).darken(18), '800'),
      this.getColorObject(tinycolor(hex).darken(24), '900'),
      this.getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
      this.getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
      this.getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
      this.getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    ];
  }
  
  getColorObject(value: any, name: any): Color {
    const c = tinycolor(value);
    return {
      name: name,
      hex: c.toHexString(),
      darkContrast: c.isLight()
    };
  }
}




