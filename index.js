// @ts-check

// @ts-ignore
import twgl from "https://dev.jspm.io/twgl.js"
import { ZShaderWrapper } from './zModules/zShader.js'

// WebGL
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvasgl'))
const gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true })
gl.getExtension('EXT_color_buffer_float') // prevents Buffer Incomplete error
gl.getExtension('OES_texture_float_linear')

// Scene
const voxelsNum = 128
let segments, relief

// function prepareTexVoxels () {
//   const texVoxels = twgl.createTexture(gl, {
//     src: texVoxelsArray.flat(3),
//     width: texVoxelsArray[0].length,
//     mag: gl.NEAREST,
//     min: gl.NEAREST
//   })

//   return texVoxels
// }

// const texVoxels = prepareTexVoxels()

let tick = 0

twgl.resizeCanvasToDisplaySize(gl.canvas)
const zsw = new ZShaderWrapper(gl, twgl)

import {glsl as gi} from './gi.frag.js'
import {glsl as dr} from './draw.frag.js'

// console.log(dr)

const passes = {
  gi: zsw.createPass(gi, [128,128], gl.RGBA),
  draw: zsw.createPass(dr)
}



const params = [...Array(10)].map(() => Math.random())

const timeI = new Date() / 1000

function draw () {
  const time = new Date() / 1000
  twgl.resizeCanvasToDisplaySize(gl.canvas)
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

  passes.gi.draw({
    u_frame: tick,
    tex: passes.gi.b,
    u_time: time - timeI,
    u_params: params,
    // u_tex_voxels: texVoxels,
    u_voxels_num: voxelsNum,
    u_resolution: [128,128],
  }, 'self')

  passes.draw.draw({
    tex: passes.gi.b,
    u_resolution: [canvas.width, canvas.height],
  }, 'screen')

  tick++
  console.log(tick)
  // if (tick < 10) {
  requestAnimationFrame(draw)
  // }
  // setTimeout(draw,500)
}

draw()

window.addEventListener('resize', (e) => {
  resize()
})

function resize () {
  const w = 128//window.innerWidth// * window.devicePixelRatio
  const h = 128//window.innerHeight// * window.devicePixelRatio
  console.log(w, h)
  twgl.resizeFramebufferInfo(gl, passes.gi.buffer, passes.gi.attachments, w, h)
  twgl.resizeFramebufferInfo(gl, passes.gi.backbuffer, passes.gi.attachments, w, h)
  passes.gi.resolution = [w, h]
  tick = 0
}
resize()