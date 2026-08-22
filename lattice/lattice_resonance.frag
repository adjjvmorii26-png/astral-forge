// Lattice Resonance Fragment Shader (GLSL-style)
// Visualizes crystal resonance as layered waves

precision mediump float;
uniform float u_time;
uniform float u_resonance[3]; // strengths of active shards
varying vec2 v_uv;

void main() {
  float r = u_resonance[0] * sin(v_uv.x * 12.0 + u_time * 1.7);
  float g = u_resonance[1] * cos(v_uv.y * 9.0  - u_time * 1.3);
  float b = u_resonance[2] * sin((v_uv.x + v_uv.y) * 7.0 + u_time);
  float a = 0.55 + 0.35 * (r + g + b) * 0.33;
  gl_FragColor = vec4(abs(r), abs(g), abs(b), clamp(a, 0.2, 0.95));
}
