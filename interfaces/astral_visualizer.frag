// Astral Visualizer Fragment
precision mediump float;
uniform float u_time;
uniform vec3 u_choir; // alpha, beta, gamma strengths
varying vec2 v_uv;

void main() {
  float pulse = 0.5 + 0.5 * sin(u_time * 2.1);
  vec3 col = vec3(
    u_choir.x * (0.6 + 0.4 * sin(v_uv.x * 8.0 + u_time)),
    u_choir.y * (0.6 + 0.4 * cos(v_uv.y * 6.0 - u_time)),
    u_choir.z * (0.5 + 0.5 * pulse)
  );
  gl_FragColor = vec4(col, 0.75);
}
