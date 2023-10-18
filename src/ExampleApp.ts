/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from 'gophergfx'
import { ColorMap } from './ColorMap';


export class ExampleApp extends gfx.GfxApp
{   
    private map1 : ColorMap;
    private map2 : ColorMap;
    private map3 : ColorMap;
    private map4 : ColorMap;
    private map5 : ColorMap;

    // --- Create the ExampleApp class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();


        // from the Blue1Lt map on sciviscolor.org
        this.map1 = new ColorMap();
        this.map1.addControlPt(0, new gfx.Color(0.2853064890941744, 0.15395435920168324, 0.34295850088547175));        
        this.map1.addControlPt(0.14285714285714285, new gfx.Color(0.32967251386393176, 0.20703714793159128, 0.41581746391221786));
        this.map1.addControlPt(0.2857142857142857, new gfx.Color(0.3902234584337365, 0.28480149898010665, 0.5177492491460003));
        this.map1.addControlPt(0.42857142857142855, new gfx.Color(0.4326358559136225, 0.3572388360948143, 0.6144259897922976));
        this.map1.addControlPt(0.5714285714285714, new gfx.Color(0.46593308583738374, 0.43557203709722425, 0.6917674027023865));
        this.map1.addControlPt(0.7142857142857142, new gfx.Color(0.5487067447034688, 0.5535534191011201, 0.7884441171663151));
        this.map1.addControlPt(0.8571428571428571, new gfx.Color(0.6673784307018353, 0.6860206317632478, 0.8503599878805238));
        this.map1.addControlPt(1, new gfx.Color(0.8179857939185406, 0.8421919573141563, 0.9223794791765053));

        // from the 01green-gr1214b map on sciviscolor.org
        this.map2 = new ColorMap();
        this.map2.addControlPt(0, new gfx.Color(1, 0.9759995920032639, 0.92));
        this.map2.addControlPt(0.08424847926910076, new gfx.Color(0.9439833333333333, 0.95, 0.7695));
        this.map2.addControlPt(0.19183642403182155, new gfx.Color(0.8208000000000001, 0.9, 0.603));
        this.map2.addControlPt(0.3014509828614353, new gfx.Color(0.6556992336811005, 0.83, 0.48140000000000005));
        this.map2.addControlPt(0.42429488499807144, new gfx.Color(0.4623333333333333, 0.73, 0.32849999999999996));
        this.map2.addControlPt(0.5480837402280662, new gfx.Color(0.27391999999999994, 0.64, 0.2176));
        this.map2.addControlPt(0.6416340964705813, new gfx.Color(0.1508, 0.58, 0.18656666666666652));
        this.map2.addControlPt(0.7531385614869126, new gfx.Color(0.10579999999999999, 0.46, 0.22386666666666674));
        this.map2.addControlPt(0.8457439646360692, new gfx.Color(0.0936, 0.39, 0.26155999999999996));
        this.map2.addControlPt(0.9225331945797911, new gfx.Color(0.11199999999999999, 0.32, 0.2818666666666666));
        this.map2.addControlPt(1, new gfx.Color(0.15400000000000003, 0.28, 0.26530000000000004));

        // from the div1-blue-orange-div.xml map on sciviscolor.org
        this.map3 = new ColorMap();
        this.map3.addControlPt(0, new gfx.Color(0.0862745098039216, 0.00392156862745098, 0.298039215686275));
        this.map3.addControlPt(0.030334, new gfx.Color(0.113725, 0.0235294, 0.45098));
        this.map3.addControlPt(0.055527, new gfx.Color(0.105882, 0.0509804, 0.509804));
        this.map3.addControlPt(0.073008, new gfx.Color(0.0392157, 0.0392157, 0.560784));
        this.map3.addControlPt(0.089974, new gfx.Color(0.0313725, 0.0980392, 0.6));
        this.map3.addControlPt(0.106427, new gfx.Color(0.0431373, 0.164706, 0.639216));
        this.map3.addControlPt(0.130077, new gfx.Color(0.054902, 0.243137, 0.678431));
        this.map3.addControlPt(0.16144, new gfx.Color(0.054902, 0.317647, 0.709804));
        this.map3.addControlPt(0.2, new gfx.Color(0.0509804, 0.396078, 0.741176));
        this.map3.addControlPt(0.225, new gfx.Color(0.0392157, 0.466667, 0.768627));
        this.map3.addControlPt(0.25, new gfx.Color(0.0313725, 0.537255, 0.788235));
        this.map3.addControlPt(0.276093, new gfx.Color(0.0313725, 0.615686, 0.811765));
        this.map3.addControlPt(0.302828, new gfx.Color(0.0235294, 0.709804, 0.831373));
        this.map3.addControlPt(0.329563, new gfx.Color(0.0509804, 0.8, 0.85098));
        this.map3.addControlPt(0.351671, new gfx.Color(0.0705882, 0.854902, 0.870588));
        this.map3.addControlPt(0.372237, new gfx.Color(0.262745, 0.901961, 0.862745));
        this.map3.addControlPt(0.390231, new gfx.Color(0.423529, 0.941176, 0.87451));
        this.map3.addControlPt(0.417995, new gfx.Color(0.572549, 0.964706, 0.835294));
        this.map3.addControlPt(0.436504, new gfx.Color(0.658824, 0.980392, 0.843137));
        this.map3.addControlPt(0.456041, new gfx.Color(0.764706, 0.980392, 0.866667));
        this.map3.addControlPt(0.468895, new gfx.Color(0.827451, 0.980392, 0.886275));
        this.map3.addControlPt(0.482262, new gfx.Color(0.890196078431372, 0.988235294117647, 0.925490196078431));
        this.map3.addControlPt(0.492545, new gfx.Color(0.913725, 0.988235, 0.937255));
        this.map3.addControlPt(0.501285, new gfx.Color(1, 1, 0.972549019607843));
        this.map3.addControlPt(0.510026, new gfx.Color(0.988235294117647, 0.988235294117647, 0.905882352941176));
        this.map3.addControlPt(0.526478, new gfx.Color(0.992156862745098, 0.972549019607843, 0.803921568627451));
        this.map3.addControlPt(0.539846, new gfx.Color(0.992157, 0.964706, 0.713725));
        this.map3.addControlPt(0.554756, new gfx.Color(0.988235, 0.956863, 0.643137));
        this.map3.addControlPt(0.576864, new gfx.Color(0.980392, 0.917647, 0.509804));
        this.map3.addControlPt(0.599486, new gfx.Color(0.968627, 0.87451, 0.407843));
        this.map3.addControlPt(0.620051, new gfx.Color(0.94902, 0.823529, 0.321569));
        this.map3.addControlPt(0.636504, new gfx.Color(0.929412, 0.776471, 0.278431));
        this.map3.addControlPt(0.660668, new gfx.Color(0.909804, 0.717647, 0.235294));
        this.map3.addControlPt(0.682262, new gfx.Color(0.890196, 0.658824, 0.196078));
        this.map3.addControlPt(0.7, new gfx.Color(0.878431, 0.619608, 0.168627));
        this.map3.addControlPt(0.725, new gfx.Color(0.870588, 0.54902, 0.156863));
        this.map3.addControlPt(0.75, new gfx.Color(0.85098, 0.47451, 0.145098));
        this.map3.addControlPt(0.775, new gfx.Color(0.831373, 0.411765, 0.133333));
        this.map3.addControlPt(0.8, new gfx.Color(0.811765, 0.345098, 0.113725));
        this.map3.addControlPt(0.825, new gfx.Color(0.788235, 0.266667, 0.0941176));
        this.map3.addControlPt(0.85, new gfx.Color(0.741176, 0.184314, 0.0745098));
        this.map3.addControlPt(0.875, new gfx.Color(0.690196, 0.12549, 0.0627451));
        this.map3.addControlPt(0.9, new gfx.Color(0.619608, 0.0627451, 0.0431373));
        this.map3.addControlPt(0.923393, new gfx.Color(0.54902, 0.027451, 0.0705882));
        this.map3.addControlPt(0.943959, new gfx.Color(0.470588, 0.0156863, 0.0901961));
        this.map3.addControlPt(0.967095, new gfx.Color(0.4, 0.00392157, 0.101961));
        this.map3.addControlPt(1, new gfx.Color(0.188235294117647, 0, 0.0705882352941176));

        this.map4 = new ColorMap();
        this.map4.addControlPt(0, new gfx.Color(1, 0, 0));
        this.map4.addControlPt(0.5, new gfx.Color(1, 1, 1));
        this.map4.addControlPt(1, new gfx.Color(0, 0, 1));

        this.map5 = new ColorMap();
        this.map5.addControlPt(0, new gfx.Color(1, 1, 0));
        this.map5.addControlPt(1, new gfx.Color(0, 0, 1));
    }

    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.renderer.background = new gfx.Color(.2, .2, .2);

        const radius = 0.02;
        const nCircles = 50;
        for (let i=0; i<nCircles; i++) {
            const alpha = i / (nCircles - 1); // from 0.0 to 1.0

            // linear interp by hand
            const xStart = -1 + radius;
            const xEnd = 1 - radius;
            //const totalDiff = xEnd - xStart;
            //const x = xStart + alpha * totalDiff;

            // linear interp a number with MathUtils.lerp
            const x = gfx.MathUtils.lerp(xStart, xEnd, alpha);

            const startPt = new gfx.Vector2(xStart, 0.5);
            const endPt = new gfx.Vector2(xEnd, 0.5);
            const curPos = gfx.Vector2.lerp(startPt, endPt, alpha);

            //const amt = i / (nCircles - 1);
            //const x = (-1 + radius) + amt * (2 - 2 * radius);
    
            const c1 = gfx.Geometry2Factory.createCircle(radius, 20);
            //c1.position.x = x;
            //c1.position.y = 0.5;
            c1.position = curPos;
            c1.material.color = this.map1.lookupColor(alpha);
            this.scene.add(c1);

            const c2 = gfx.Geometry2Factory.createCircle(radius, 20);
            c2.position.x = x;
            c2.position.y = 0.25;
            c2.material.color = this.map2.lookupColor(alpha);
            this.scene.add(c2);

            const c3 = gfx.Geometry2Factory.createCircle(radius, 20);
            c3.position.x = x;
            c3.position.y = 0;
            c3.material.color = this.map3.lookupColor(alpha);
            this.scene.add(c3);

            const c4 = gfx.Geometry2Factory.createCircle(radius, 20);
            c4.position.x = x;
            c4.position.y = -0.25;
            c4.material.color = this.map4.lookupColor(alpha);
            this.scene.add(c4);

            const c5 = gfx.Geometry2Factory.createCircle(radius, 20);
            c5.position.x = x;
            c5.position.y = -0.5;
            c5.material.color = this.map5.lookupColor(alpha);
            this.scene.add(c5);
        }
    }


    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
    }
}
