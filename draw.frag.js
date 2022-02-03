export let glsl = /*glsl*/`#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_tex_res;
uniform sampler2D tex;
// uniform sampler2D backbuffer;
uniform float u_time;

out vec4 o;

vec3 ACESFilm(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0., 1.);
}

void main() {
  vec2 uvN = gl_FragCoord.xy / u_resolution;
  o.rgb = ACESFilm(texture(tex, uvN).rgb);
  o.a = 1.;
}
`