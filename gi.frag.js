import * as g from './zModules/glsl.js'

export let glsl = /*glsl*/`#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform vec2 mouse;
uniform float u_voxels_num;
uniform float u_time;
uniform float u_frame;
uniform float u_params[10];
uniform sampler2D backbuffer;
uniform sampler2D u_tex_voxels;
${ g.rnd + g.PI + g.rot + g.colorGradient }
#define rnd_k(_) rnd(k+floor(100.*objId)+_)
#define EPS .001
#define REFLECTIONS 4.
#define MAX_STEPS 200.
#define MAX_DIST 50.
#define UV_SCALE 16.

out vec4 o;

float objId = 0.;
vec3 col = vec3(1); // accumulated color
int side = 0; // side of the building

float kDepthMin; // # of the smallest rib
float depthMin = 999.; // depth of the smalles rib
float kHit = 0.; // # of the rib the ray hit
float voxelId;
bool isRoof;

vec4 getRelativeVoxel(vec3 p) {
    p = floor(p / 2.);
    vec3 pTex = p + u_voxels_num / 2.; // FIXME pass N as uniform
    vec2 uvTex = vec2(pTex.x, pTex.y + u_voxels_num * pTex.z) / vec2(u_voxels_num, u_voxels_num * u_voxels_num);  // FIXME pass N as uniform
    return texture(u_tex_voxels, uvTex);
}

float sdfVoxel(vec3 p) {
    objId = 0.;
    vec4 tx = getRelativeVoxel(p);
    objId = tx.r;
    if(tx.r > 0.) { // voxel is full
        bool b = getRelativeVoxel(p + vec3(0, 0, 1)).r > 0.;
        bool r = getRelativeVoxel(p + vec3(1, 0, 0)).r > 0.;
        bool f = getRelativeVoxel(p + vec3(0, 0, -1)).r > 0.;
        bool l = getRelativeVoxel(p + vec3(-1, 0, 0)).r > 0.;
        bool br = getRelativeVoxel(p + vec3(1, 0, 1)).r > 0.;
        bool rf = getRelativeVoxel(p + vec3(1, 0, -1)).r > 0.;
        bool fl = getRelativeVoxel(p + vec3(-1, 0, -1)).r > 0.;
        bool lb = getRelativeVoxel(p + vec3(-1, 0, 1)).r > 0.;
        isRoof = getRelativeVoxel(p + vec3(0, 1, 0)).r == 0.;

        if(false);
        else if(!b && r && f && l)     // b    1
            side = 1;
        else if(b && !r && f && l)     // r    2
            side = 2;
        else if(b && r && !f && l)     // f    3
            side = 3;
        else if(b && r && f && !l)     // l    4
            side = 4;
        else if(!b && !r && f && l)    // br   5
            side = 5;
        else if(b && !r && !f && l)    // rf   6
            side = 6;
        else if(b && r && !f && !l)    // fl   7
            side = 7;
        else if(!b && r && f && !l)    // lb   8
            side = 8;
        else if(!br)                   // bri  9
            side = 9;
        else if(!rf)                   // rfi 10
            side = 10;
        else if(!fl)                   // fli 11
            side = 11;
        else if(!lb)                   // lbi 12
            side = 12;
        else                           // c    0
            side = 0;
    }

    float res = .5 - step(1e-4, tx.r);

    voxelId = rnd(dot(floor(p), vec3(13, 17, 19)));
    return res;
}

float sdf(vec3 p) {
    float boundingBox = length(p - clamp(p, -.4999, .4999)) - .0001;
    float res;

    switch(side) {
        case 0:
            kHit = -1.;
            if(isRoof) return 999.;
            else return boundingBox;
        case 1: // b
            p.xz *= rot(PI);
            break;
        case 2: // r
            p.xz *= rot(-PI / 2.);
            break;
        case 3: // f
            break;
        case 4: // l
            p.xz *= rot(PI / 2.);
            break;
        case 5: // br
            p.xz = -p.xz;
            if(p.x < p.z)
                p.xz = p.zx;
            break;
        case 6: // rf
            p.x = -p.x;
            if(p.x < p.z)
                p.xz = p.zx;
            break;
        case 7: // fl
            if(p.x < p.z)
                p.xz = p.zx;
            break;
        case 8: // lb
            p.z = -p.z;
            if(p.x < p.z)
                p.xz = p.zx;
            break;
        case 9: // bri
            p.xz = -p.xz;
            if(p.x > p.z)
                p.xz = p.zx;
            break;
        case 10: // rfi
            p.x = -p.x;
            if(p.x > p.z)
                p.xz = p.zx;
            break;
        case 11: // fli
            if(p.x > p.z)
                p.xz = p.zx;
            break;
        case 12: // lbi
            p.z = -p.z;
            if(p.x > p.z)
                p.xz = p.zx;
            break;
    }

    kHit = 0.;
    kDepthMin = 0.;

    float c = -p.z;

    for(float k = 1.; k < 6.; k++) {
        p.xy = p.yx;
        float period = 2. * (rnd_k(.3) * .8 + .2);
        if(k <= 2.)
            period = 1.;
        p.y = mod(p.y, period) - period * .5;
        vec3 p1 = p;
        p1.x = 0.;
        float width = rnd_k(.1) * period * .1 + .04;
        float depth = pow(rnd_k(.2), 1.) * .4 + .05;
        if(depth < depthMin) {
            // discard;
            depthMin = depth;
            kDepthMin = k;
        }
        p1.y -= clamp(p1.y, -width * .5, width * .5); // width
        p1.z -= clamp(p1.z, -depth, .0); // depth

        float cNew = length(p1) - .0001;
        if(cNew < c) {
            c = cNew;
            kHit = -1.;
        }
    }
    if(isRoof && c < p.z+.1) {
        c = p.z+.1;
        kHit = -1.;
    }

    if(c > boundingBox) {
        return c;
    } else {
        kHit = -1.;
        return boundingBox;
    }
}

vec3 norm(vec3 p) {
    float d = sdf(p);
    vec2 e = vec2(.0001, 0);
    return normalize(vec3(d - sdf(p - e.xyy), d - sdf(p - e.yxy), d - sdf(p - e.yyx)));
}

vec3 getLight(vec3 p) {
    // if(p.y > 30. && p.z > 0. && p.x > 0.)
        // return vec3(15, 6, 5);
    // if(p.y > 26. && p.z < -0. && p.x < -0.)
        // return vec3(100, 15, 15);
    // if(p.y > 16.)
    //     return vec3(50, 15, 15);
    if(kHit == kDepthMin)
        return colorGradient(voxelId * .2 + objId) * rnd(voxelId) * rnd(voxelId) * 4.;
    return vec3(0);
}

void main() {
    float i, d, e, rfl, l;

    vec2 uv = (gl_FragCoord.xy + rnd(length(mod(vec3(gl_FragCoord.xy, u_time), 3.141592))) - .5 - u_resolution * .5) / u_resolution.y + .001;
    vec3 rd = (vec3(0, 0, 1)), ro, p;
    ro.xz = uv * UV_SCALE;
    ro.y = 30.;
    rd.yz *= rot(atan(1. / sqrt(2.)));
    rd.xz *= rot(3.1415 / 4.);
    ro.x /= sqrt(3.);
    ro.xz *= rot(3.1415 / 4.);

    vec3 light;

    vec3 n;
    for(; rfl++ < REFLECTIONS;) {
        d = 0.;
        for(i = 0.; i++ < MAX_STEPS;) {
            p = ro + rd * d;
            vec3 dp = (step(0., rd) - fract(p)) / rd;
            float dpmin;

            dpmin = min(min(dp.x, dp.y), dp.z) + 1e-4;

            bool breaker = false;
            if(sdfVoxel(p) < 0.) {
                float ddd = 0.;
                for(float stepsWithnVoxel; stepsWithnVoxel++ < 100.;) {
                    p = ro + rd * (d + ddd);
                    ddd += e = sdf(fract(p) - .5);
                    if(e < EPS || ++i > MAX_STEPS) {
                        n = norm(fract(p) - .5);
                        dpmin = ddd;
                        breaker = true;
                        break;
                    }
                    if(ddd > dpmin) { // улетели в соседнюю клетку
                        break;
                    }
                }
            }

            d += dpmin;

            if(breaker == true)
                break;

        }
        if(d > MAX_DIST) {
            break;
        }
        light = getLight(p);
        if(length(light) > 0.) {
            break;
        } else {
            rd += (rnd(length(uv) + u_frame + vec3(0, 1, 2)) * 2. - 1.) * .8;
            rd = reflect(rd, n);
            rd = normalize(rd);
            float g = dot(rd, n);
            rd = rd - (g - abs(g))*n;
            ro = p + n * .001;
            col *= .9;
        }
    }
    col *= light;
    o += mix(texture(backbuffer, gl_FragCoord.xy / u_resolution), col.rgbb, 1. / (u_frame + 1.));
    // o += 10./i * tex;
    // o.rgb = n * .5 + .5;
    // if(kHit == kDepthMin)
        // o *= 0.;//kHit/6.;
    o.a = 1.;

    // o = vec4(1,1,0,1);
}
`