import * as g from './zModules/glsl.js'

export let glsl = /*glsl*/`#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_voxels_num;
uniform float u_time;
uniform float u_frame;
uniform float u_params[10];
uniform sampler2D backbuffer;
uniform sampler2D u_tex_voxels;
out vec4 o;

${ g.rnd + g.rnd2D + g.PI + g.rot + g.colorGradient }
${ g.snoiseCommon + g.snoise3D + g.fsnoise }

// #define tex(i,j) (floor(texture(backbuffer,fract((FC.xy+vec2(i,j))/u_resolution))*3e3)/3e3)
#define tex(i,j) texture(backbuffer,fract((FC.xy+vec2(i,j))/u_resolution))
#define tx(i,j) tex(i,j).a
#define isGround(v) (abs(v-.5)<.1) 
#define isSand(v) (abs(v-1.)<.1)
#define fallL(i,j) (int(f)%2==0)
#define fallR(i,j) !fallL(i,j)  
#define prio(i,j) fsnoise(uv+vec2(i,j)-t)

// #define prio(i,j) sin(uv.x+float(i)-t)   
// #define prio(i,j) sin(FC.x+i*.1+t)
// #define prio(i,j) ((FC.x)*(mod(f,2.)*2.-1.)+float(i))

#define f u_frame
#define t u_time
#define FC gl_FragCoord

bool plannedToBeGround(vec2 uv,float frame){
    return snoise3D(vec3(uv*vec2(2,40),t*.01)) > .7;
    // return 0.>sin(frame-1.+uv.x);
}

void main() {

#define col(c) (c-cos((c + off) * 2. * PI) * mul + add)
vec3 off = vec3(.0, .3, .4);
vec3 mul = vec3(.5, .5, .5);
vec3 add = vec3(.5, .5, .5);

vec2 uv = FC.xy/u_resolution;

// spawning
if(f<1. && length(uv-.501)<.3){
    o.a = 1.;
    o.rgb = vec3(fract(rnd2D(uv*100.+10.) + uv.x * 100.));
    return;
}

// земля останется землёй
if(isGround(tx(0,0))){
    if(plannedToBeGround(uv, u_frame))
        o.a=.5;
    return;
}

if(isSand(tx(0,0))){
  o=tex(0,0);
  // если снизу дырка
  if(tx(0,-1)==0.){  
    // если ничего не прилетит в эту дырку слева  
    if(isSand(tx(-1,0)) && tx(-1,-1)>0. && fallR(-1,0) && prio(0,0)< prio(-1,0)) return;
    if(isSand(tx( 1,0)) && tx( 1,-1)>0. && fallL( 1,0) && prio(0,0)<=prio( 1,0)) return;
    o.a=.0; 
  }
  // если слева дырка
  if(tx(-1,-1)==0. && fallL(0,0)){ // если слева дырка и я хочу бухнуться влево
    // если ничего не прилетит в эту ячейку сверху
    if(isSand(tx(-1,0)) && prio(0,0)>=prio(-1,0)) return;
    // если ничего не прилетит в эту ячейку ещё более слева
    if(isSand(tx(-2,0)) && tx(-2,-1)>0. && fallR(-2,0) && prio(0,0)<prio(-2,0)) return;
    o.a=.0; 
  }
  // если справа дырка
  if(tx(1,-1)==0. && fallR(0,0)){
    // если ничего не прилетит в эту ячейку сверху
    if(isSand(tx(1,0)) && prio(0,0)>prio(1,0)) return;
    // если ничего не прилетит в эту ячейку ещё более справа
    if(isSand(tx(2,0)) && tx(2,-1)>0. && fallL(2,0) && prio(0,0)<=prio(2,0)) return; 
    o.a=.0; 
  }
}
else{
    // if(distance(uv,m)<.1)o.a=1.,o.rgb=col(fract(t*.1)).rgb;
    if(isSand(tx(0,1)))
    o=tex(0,1);
    if(isSand(tx(1,1))) // справа вверху песок
    if(tx(1,0)>0.) // он на чём-то лежит.
        if(fallL(1,1)){ // она хочет бухнуться влево
        o=tex(1,1);
        if(isSand(tx(0,1)) && prio(0,1)>prio(1,1))
            o=tex(0,1);
        if(isSand(tx(-1,1)) && prio(-1,1)>prio(1,1))
            o=tex(-1,1);
        }
    if(isSand(tx(-1,1))) // слева вверху песок
    if(tx(-1,0)>0.) // он на чём-то лежит.
        if(fallR(-1,1)) { // она хочет бухнуться влево
        o=tex(-1,1);
        if(isSand(tx(0,1)) && prio(0,1)>prio(-1,1))
            o=tex(0,1);
        if(isSand(tx(1,1)) && prio(1,1)>prio(-1,1))
            o=tex(1,1);
        }
    }

    if(o.a==0.){
        if(plannedToBeGround(uv, u_frame))
            o.a=.5;
    }
}
`