import * as gfx from 'gophergfx'


/** 
 * Small helper class to store color map control points.
 * Each control point holds a floating point number and a
 * color to associate with that number.
 */
class ControlPt {
    public dataVal : number;
    public col : gfx.Color;

    constructor(d: number, c: gfx.Color) {
        this.dataVal = d; 
        this.col = c; 
    }

    static compare(a: ControlPt, b: ControlPt) : number {
        return a.dataVal - b.dataVal;
    }    
}


/**
 * A color map class that supports:
 * - colors defined at multiple control points that do not need to be evenly spaced
 * - interpolation in Lab color space
 */
export class ColorMap
{   
    // list of dataValue, color pairs
    private controlPts : ControlPt[];
    
    /**
     * Creates an empty ColorMap -- use addControlPt() to add colors to the map.  Then, 
     * use lookupColor() to access an interpolated color by data value.
     */
    constructor()
    {
        this.controlPts = [];
    }

    public addControlPt(dataVal: number, col: gfx.Color) {
        this.controlPts.push(new ControlPt(dataVal, col));
        this.controlPts.sort(ControlPt.compare);
    }

    public lookupColor(dataVal: number) : gfx.Color {
        if (this.controlPts.length == 0) {
          console.log("ColorMap.lookupColor called for an empty color map!");
          return new gfx.Color(1, 1, 1, 1);
        }
        else if (this.controlPts.length == 1) {
          return this.controlPts[0].col;
        }
        else {
            const minVal = this.controlPts[0].dataVal;
            const maxVal = this.controlPts[this.controlPts.length - 1].dataVal;
    
            // check bounds
            if (dataVal >= maxVal) {
                return this.controlPts[this.controlPts.length - 1].col;
            }
            else if (dataVal <= minVal) {
                return this.controlPts[0].col;
            }
            else {  // value within bounds
    
                // make i = upper control pt and (i-1) = lower control point
                let i = 1;
                while (this.controlPts[i].dataVal < dataVal) {
                    i++;
                }
    
                // find the amount to interpolate between the two control points
                const v1 = this.controlPts[i-1].dataVal;
                const v2 = this.controlPts[i].dataVal;
                const alpha  = (dataVal - v1) / (v2 - v1);
    
                // use lab space to interpolate between the colors at the two control points
                const c1 = this.controlPts[i-1].col;
                const c2 = this.controlPts[i].col;
                //return gfx.Color.lerp(c1, c2, alpha);

                // convert both c1 and c2 from the rgb color space to the lab color space 
                const lab1 = this.rgbToLab([c1.r, c1.g, c1.b]);
                const lab2 = this.rgbToLab([c2.r, c2.g, c2.b]);

                // lerp each component of the colors (L, a, and b) separately
                const labLerped = [0, 0, 0];
                labLerped[0] = gfx.MathUtils.lerp(lab1[0], lab2[0], alpha);
                labLerped[1] = gfx.MathUtils.lerp(lab1[1], lab2[1], alpha);
                labLerped[2] = gfx.MathUtils.lerp(lab1[2], lab2[2], alpha);

                // convert the resulting color in lab space back to rgb space
                const finalRgb = this.labToRgb(labLerped);
                return new gfx.Color(finalRgb[0], finalRgb[1], finalRgb[2]);
            }
        }
    }

    // ----- BEGIN EXTERNAL CODE FOR RGB-LAB CONVERSION ---
    // https://github.com/antimatter15/rgb-lab
    // includes some minor edits and conversion to typescript
    /*
    MIT License
    Copyright (c) 2014 Kevin Kwok <antimatter15@gmail.com>
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */

    // the following functions are based off of the pseudocode
    // found on www.easyrgb.com
  
    public labToRgb(lab: number[]) : number[] {
        let y = (lab[0] + 16.0) / 116.0;
        let x = lab[1] / 500.0 + y;
        let z = y - lab[2] / 200.0;
        
        x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16.0 / 116.0) / 7.787);
        y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16.0 / 116.0) / 7.787);
        z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16.0 / 116.0) / 7.787);
        
        const rgb = [0, 0, 0];
        rgb[0] = x * 3.2406 + y * -1.5372 + z * -0.4986;
        rgb[1] = x * -0.96890 + y * 1.8758 + z * 0.0415;
        rgb[2] = x * 0.05570 + y * -0.2040 + z * 1.0570;
        
        rgb[0] = (rgb[0] > 0.0031308) ? (1.055 * Math.pow(rgb[0], 1.0 / 2.4) - 0.055) : 12.92 * rgb[0];
        rgb[1] = (rgb[1] > 0.0031308) ? (1.055 * Math.pow(rgb[1], 1.0 / 2.4) - 0.055) : 12.92 * rgb[1];
        rgb[2] = (rgb[2] > 0.0031308) ? (1.055 * Math.pow(rgb[2], 1.0 / 2.4) - 0.055) : 12.92 * rgb[2];
        
        rgb[0] = gfx.MathUtils.clamp(rgb[0], 0, 1);
        rgb[1] = gfx.MathUtils.clamp(rgb[1], 0, 1);
        rgb[2] = gfx.MathUtils.clamp(rgb[2], 0, 1);
        return rgb;
    }
  
    public rgbToLab(rgb: number[]) : number[] {
        let r = rgb[0];
        let g = rgb[1];
        let b = rgb[2];
    
        r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    
        let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
        let y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
        let z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    
        x = (x > 0.008856) ? Math.pow(x, 1.0 / 3.0) : (7.787 * x) + 16.0 / 116.0;
        y = (y > 0.008856) ? Math.pow(y, 1.0 / 3.0) : (7.787 * y) + 16.0 / 116.0;
        z = (z > 0.008856) ? Math.pow(z, 1.0 / 3.0) : (7.787 * z) + 16.0 / 116.0;
    
        const lab = [0, 0, 0];
        lab[0] = (116.0 * y) - 16.0;
        lab[1] = (500.0 * (x - y));
        lab[2] = (200.0 * (y - z));
    
        return lab;
    }
}
