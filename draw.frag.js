import * as g from './zModules/glsl.js'

export let glsl = /*glsl*/`#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_tex_res;
uniform sampler2D u_tex;
uniform sampler2D backbuffer;
uniform float u_time;

out vec4 o;


vec3 color(float x){
  x = clamp(x,0.,1.);
  float c = x/2. + .25;
  return vec3(c*1.9,c*.8,c*.2);
}

${ g.rnd + g.PI }
${ g.rnd2D }

void main() {
  vec2 uvN = gl_FragCoord.xy / u_tex_res;
  // if(u_time<1.){
  //   o += sin(gl_FragCoord.x*.1) * .5 + .5;
  //   o.a = 1.;
  // }
  // else {
  //   o = vec4(uvN,0,1);//texture(backbuffer, uvN);
  // }
  // return;



  uvN = (floor(uvN*u_tex_res) + .5)/u_tex_res;
  o = texture(u_tex, uvN);
  if(abs(o.a-.5) < .01){
    discard;
  }
  o.rgb *= o.a;
  if(abs(o.a-.5)<.01) o.r = mod(gl_FragCoord.y+gl_FragCoord.x, 4.)/4.;
  if(o.a > .9){
    o.rgb = color(o.r);
  }
  if(o.a < .1){
    vec4 above = texture(u_tex, uvN+vec2(0,1)/u_tex_res);
    if(above.a > .9){
      o.rgb = color(above.r);
    }

    float sum = 0.;
    for(float R = 0.; R < 2.; R++){
      vec4 probe;
      vec2 grainUV;
      
      grainUV = uvN+vec2(0,R)/u_tex_res;
      probe = texture(u_tex, grainUV);
      if(probe.a>.9) sum += min(1., .005 / fract(u_time / PI * (1. + rnd(probe.r + .2)) + rnd2D(uvN) + rnd(probe.r * 10.))) * rnd(probe.r * 10.+.1);
      
      grainUV = uvN+vec2(0,-R)/u_tex_res;
      probe = texture(u_tex, grainUV);
      if(probe.a>.9) sum += min(1., .005 / fract(u_time / PI * (1. + rnd(probe.r + .2)) + rnd2D(uvN) + rnd(probe.r * 10.))) * rnd(probe.r * 10.+.1);
      
      grainUV = uvN+vec2(R,0)/u_tex_res;
      probe = texture(u_tex, grainUV);
      if(probe.a>.9) sum += min(1., .005 / fract(u_time / PI * (1. + rnd(probe.r + .2)) + rnd2D(uvN) + rnd(probe.r * 10.))) * rnd(probe.r * 10.+.1);
      
      grainUV = uvN+vec2(-R,0)/u_tex_res;
      probe = texture(u_tex, grainUV);
      if(probe.a>.9) sum += min(1., .005 / fract(u_time / PI * (1. + rnd(probe.r + .2)) + rnd2D(uvN) + rnd(probe.r * 10.))) * rnd(probe.r * 10.+.1);
    }
    // o+=sum;
    o+=step(.3, sum);
  
  }


  o.a = 1.;
  // o = mix(o, texture(backbuffer, uvN), (u_time<1.)?0.:.8);
}
`